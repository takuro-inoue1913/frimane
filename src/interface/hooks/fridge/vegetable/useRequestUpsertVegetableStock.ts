import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { vegetableStockRepository } from '@src/interface/repositories/vegetableStockRepository';
import { vegetablesStocksState } from '@src/states/fridge/vegetables';
import { useRef, useEffect } from 'react';

type UpsertVegetableStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertVegetableStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const vegetablesStocks = useAtomValue(vegetablesStocksState);

  // MEMO: コールバック関数内で最新の vegetablesStocks を参照するために、useRefを使用する
  const vegetablesStocksRef = useRef(vegetablesStocks);
  useEffect(() => {
    vegetablesStocksRef.current = vegetablesStocks;
  }, [vegetablesStocks]);

  return async ({ id: vegetableId, quantity }: UpsertVegetableStockArgs) => {
    const existingStock = await vegetableStockRepository.getOne({
      idToken,
      userId: user!.uid,
      vegetableId,
    });
    if (existingStock.length === 0) {
      const data = await vegetableStockRepository.insert({
        idToken,
        userId: user!.uid,
        vegetableId,
        quantity,
        incrementalUnit:
          vegetablesStocksRef.current.byId[vegetableId].incrementalUnit,
        defaultExpirationPeriod:
          vegetablesStocksRef.current.byId[vegetableId].defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await vegetableStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        vegetableId,
        quantity,
        defaultExpirationPeriod:
          vegetablesStocksRef.current.byId[vegetableId].defaultExpirationPeriod,
      });
      return data;
    }
  };
};
