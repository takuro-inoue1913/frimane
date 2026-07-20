import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';
import { useEffect, useRef } from 'react';
import { dessertStocksState } from '@src/states/fridge/dessert';

type UpsertDessertStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertDessertStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const dessertStocks = useAtomValue(dessertStocksState);

  // MEMO: コールバック関数内で最新の dessertStocks を参照するために、useRefを使用する
  const dessertStocksRef = useRef(dessertStocks);
  useEffect(() => {
    dessertStocksRef.current = dessertStocks;
  }, [dessertStocks]);

  return async ({
    id: dessertId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertDessertStockDetail) => {
    const existingStock = await dessertStockRepository.getOne({
      idToken,
      userId: user!.uid,
      dessertId,
    });
    if (existingStock.length === 0) {
      const data = await dessertStockRepository.insert({
        idToken,
        userId: user!.uid,
        dessertId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          dessertStocksRef.current.byId[dessertId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await dessertStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        dessertId,
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
