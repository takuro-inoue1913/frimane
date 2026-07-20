import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { stapleFoodStocksState } from '@src/states/fridge/stapleFood';
import { stapleFoodStockRepository } from '@src/interface/repositories/stapleFoodStockRepository';

type UpsertStapleFoodStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertStapleFoodStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const stapleFoodStocks = useAtomValue(stapleFoodStocksState);

  // MEMO: コールバック関数内で最新の stapleFoodStocks を参照するために、useRefを使用する
  const stapleFoodStocksRef = useRef(stapleFoodStocks);
  useEffect(() => {
    stapleFoodStocksRef.current = stapleFoodStocks;
  }, [stapleFoodStocks]);

  return async ({ id: stapleFoodId, quantity }: UpsertStapleFoodStockArgs) => {
    const existingStock = await stapleFoodStockRepository.getOne({
      idToken,
      userId: user!.uid,
      stapleFoodId,
    });
    if (existingStock.length === 0) {
      const data = await stapleFoodStockRepository.insert({
        idToken,
        userId: user!.uid,
        stapleFoodId,
        quantity,
        incrementalUnit:
          stapleFoodStocksRef.current.byId[stapleFoodId].incrementalUnit,
        defaultExpirationPeriod:
          stapleFoodStocksRef.current.byId[stapleFoodId]
            .defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await stapleFoodStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        stapleFoodId,
        quantity,
        defaultExpirationPeriod:
          stapleFoodStocksRef.current.byId[stapleFoodId]
            .defaultExpirationPeriod,
      });
      return data;
    }
  };
};
