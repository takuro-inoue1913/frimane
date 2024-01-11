import { useRecoilValue } from 'recoil';

import { idTokenState, userState } from '@src/states/user';
import { vegetableStockRepository } from '@src/interface/repositories/vegetableStockRepository';
import { vegetablesStocksState } from '@src/states/fridge/vegetables';
import { useEffect, useRef } from 'react';

type UpsertMeatStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
};

export const useRequestUpsertVegetableStockDetail = () => {
  const idToken = useRecoilValue(idTokenState);
  const user = useRecoilValue(userState);

  const vegetablesStocks = useRecoilValue(vegetablesStocksState);

  // MEMO: コールバック関数内で最新の vegetablesStocks を参照するために、useRefを使用する
  const vegetablesStocksRef = useRef(vegetablesStocks);
  useEffect(() => {
    vegetablesStocksRef.current = vegetablesStocks;
  }, [vegetablesStocks]);

  return async ({
    id: vegetableId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
  }: UpsertMeatStockDetail) => {
    const plainId = vegetablesStocksRef.current.byId[vegetableId].plainId;
    const existingStock = await vegetableStockRepository.getOne({
      idToken,
      userId: user!.uid,
      vegetableId: plainId,
    });
    if (existingStock.length === 0) {
      const data = await vegetableStockRepository.insert({
        idToken,
        userId: user!.uid,
        vegetableId: plainId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          vegetablesStocksRef.current.byId[vegetableId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await vegetableStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        vegetableId: plainId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
      });
      return data;
    }
  };
};
