import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { seasoningStockRepository } from '@src/interface/repositories/seasoningStockRepository';
import { useEffect, useRef } from 'react';
import { seasoningStocksState } from '@src/states/fridge/seasoning';

type UpsertSeasoningStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertSeasoningStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const seasoningStocks = useAtomValue(seasoningStocksState);

  // MEMO: コールバック関数内で最新の seasoningStocks を参照するために、useRefを使用する
  const seasoningStocksRef = useRef(seasoningStocks);
  useEffect(() => {
    seasoningStocksRef.current = seasoningStocks;
  }, [seasoningStocks]);

  return async ({
    id: seasoningId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertSeasoningStockDetail) => {
    const existingStock = await seasoningStockRepository.getOne({
      idToken,
      userId: user!.uid,
      seasoningId,
    });
    if (existingStock.length === 0) {
      const data = await seasoningStockRepository.insert({
        idToken,
        userId: user!.uid,
        seasoningId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          seasoningStocksRef.current.byId[seasoningId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await seasoningStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        seasoningId,
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
