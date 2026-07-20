import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { spiceStocksState } from '@src/states/fridge/spice';
import { spiceStockRepository } from '@src/interface/repositories/spiceStockRepository';

type UpsertSpiceStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertSpiceStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const spiceStocks = useAtomValue(spiceStocksState);

  // MEMO: コールバック関数内で最新の spiceStocks を参照するために、useRefを使用する
  const spiceStocksRef = useRef(spiceStocks);
  useEffect(() => {
    spiceStocksRef.current = spiceStocks;
  }, [spiceStocks]);

  return async ({ id: spiceId, quantity }: UpsertSpiceStockArgs) => {
    const existingStock = await spiceStockRepository.getOne({
      idToken,
      userId: user!.uid,
      spiceId,
    });
    if (existingStock.length === 0) {
      const data = await spiceStockRepository.insert({
        idToken,
        userId: user!.uid,
        spiceId,
        quantity,
        incrementalUnit: spiceStocksRef.current.byId[spiceId].incrementalUnit,
        defaultExpirationPeriod:
          spiceStocksRef.current.byId[spiceId].defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await spiceStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        spiceId,
        quantity,
        defaultExpirationPeriod:
          spiceStocksRef.current.byId[spiceId].defaultExpirationPeriod,
      });
      return data;
    }
  };
};
