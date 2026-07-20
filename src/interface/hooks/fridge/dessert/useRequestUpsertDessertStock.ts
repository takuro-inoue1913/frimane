import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { dessertStocksState } from '@src/states/fridge/dessert';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';

type UpsertDessertStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertDessertStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const dessertStocks = useAtomValue(dessertStocksState);

  // MEMO: コールバック関数内で最新の dessertStocks を参照するために、useRefを使用する
  const dessertStocksRef = useRef(dessertStocks);
  useEffect(() => {
    dessertStocksRef.current = dessertStocks;
  }, [dessertStocks]);

  return async ({ id: dessertId, quantity }: UpsertDessertStockArgs) => {
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
        incrementalUnit:
          dessertStocksRef.current.byId[dessertId].incrementalUnit,
        defaultExpirationPeriod:
          dessertStocksRef.current.byId[dessertId].defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await dessertStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        dessertId,
        quantity,
        defaultExpirationPeriod:
          dessertStocksRef.current.byId[dessertId].defaultExpirationPeriod,
      });
      return data;
    }
  };
};
