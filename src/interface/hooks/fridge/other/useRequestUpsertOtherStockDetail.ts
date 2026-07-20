import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { otherStockRepository } from '@src/interface/repositories/otherStockRepository';
import { useEffect, useRef } from 'react';
import { otherStocksState } from '@src/states/fridge/other';

type UpsertOtherStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertOtherStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const otherStocks = useAtomValue(otherStocksState);

  // MEMO: コールバック関数内で最新の otherStocks を参照するために、useRefを使用する
  const otherStocksRef = useRef(otherStocks);
  useEffect(() => {
    otherStocksRef.current = otherStocks;
  }, [otherStocks]);

  return async ({
    id: otherId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertOtherStockDetail) => {
    const existingStock = await otherStockRepository.getOne({
      idToken,
      userId: user!.uid,
      otherId,
    });
    if (existingStock.length === 0) {
      const data = await otherStockRepository.insert({
        idToken,
        userId: user!.uid,
        otherId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          otherStocksRef.current.byId[otherId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await otherStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        otherId,
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
