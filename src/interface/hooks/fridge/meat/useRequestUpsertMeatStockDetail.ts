import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';
import { useEffect, useRef } from 'react';
import { meatStocksState } from '@src/states/fridge/meat';

type UpsertMeatStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertMeatStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const meatStocks = useAtomValue(meatStocksState);

  // MEMO: コールバック関数内で最新の meatStocks を参照するために、useRefを使用する
  const meatStocksRef = useRef(meatStocks);
  useEffect(() => {
    meatStocksRef.current = meatStocks;
  }, [meatStocks]);

  return async ({
    id: meatId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertMeatStockDetail) => {
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
        incrementalUnit,
        defaultExpirationPeriod:
          meatStocksRef.current.byId[meatId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await meatStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        meatId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      });
      return data;
    }
  };
};
