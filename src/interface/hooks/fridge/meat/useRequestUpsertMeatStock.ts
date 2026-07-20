import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { meatStocksState } from '@src/states/fridge/meat';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';

type UpsertMeatStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertMeatStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const meatStocks = useAtomValue(meatStocksState);

  // MEMO: コールバック関数内で最新の meatStocks を参照するために、useRefを使用する
  const meatStocksRef = useRef(meatStocks);
  useEffect(() => {
    meatStocksRef.current = meatStocks;
  }, [meatStocks]);

  return async ({ id: meatId, quantity }: UpsertMeatStockArgs) => {
    const existingStock = await meatStockRepository.getOne({
      idToken,
      userId: user!.uid,
      meatId,
    });
    if (existingStock.length === 0) {
      const data = await meatStockRepository.insert({
        idToken,
        userId: user!.uid,
        meatId,
        quantity,
        incrementalUnit: meatStocksRef.current.byId[meatId].incrementalUnit,
        defaultExpirationPeriod:
          meatStocksRef.current.byId[meatId].defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await meatStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        meatId,
        quantity,
        defaultExpirationPeriod:
          meatStocksRef.current.byId[meatId].defaultExpirationPeriod,
      });
      return data;
    }
  };
};
