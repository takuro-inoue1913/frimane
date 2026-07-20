import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { stapleFoodStockRepository } from '@src/interface/repositories/stapleFoodStockRepository';
import { useEffect, useRef } from 'react';
import { stapleFoodStocksState } from '@src/states/fridge/stapleFood';

type UpsertStapleFoodStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertStapleFoodStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const stapleFoodStocks = useAtomValue(stapleFoodStocksState);

  // MEMO: コールバック関数内で最新の stapleFoodStocks を参照するために、useRefを使用する
  const stapleFoodStocksRef = useRef(stapleFoodStocks);
  useEffect(() => {
    stapleFoodStocksRef.current = stapleFoodStocks;
  }, [stapleFoodStocks]);

  return async ({
    id: stapleFoodId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertStapleFoodStockDetail) => {
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
        incrementalUnit,
        defaultExpirationPeriod:
          stapleFoodStocksRef.current.byId[stapleFoodId]
            .defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await stapleFoodStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        stapleFoodId,
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
