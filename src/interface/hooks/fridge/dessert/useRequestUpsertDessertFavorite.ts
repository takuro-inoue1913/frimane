import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { dessertStocksState } from '@src/states/fridge/dessert';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';

type UpsertDessertStockArgs = {
  id: string;
  isFavorite: boolean;
};

export const useRequestUpsertDessertFavorite = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const dessertStocks = useAtomValue(dessertStocksState);

  // MEMO: コールバック関数内で最新の dessertStocks を参照するために、useRefを使用する
  const dessertStocksRef = useRef(dessertStocks);
  useEffect(() => {
    dessertStocksRef.current = dessertStocks;
  }, [dessertStocks]);

  return async ({ id: dessertId, isFavorite }: UpsertDessertStockArgs) => {
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
        isFavorite,
        quantity: dessertStocksRef.current.byId[dessertId].quantity,
        incrementalUnit:
          dessertStocksRef.current.byId[dessertId].incrementalUnit,
        defaultExpirationPeriod:
          dessertStocksRef.current.byId[dessertId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await dessertStockRepository.updateIsFavorite({
        idToken,
        userId: user!.uid,
        dessertId,
        isFavorite,
      });
      return data;
    }
  };
};
