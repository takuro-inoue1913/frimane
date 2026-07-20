import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { fishStockRepository } from '@src/interface/repositories/fishStockRepository';
import { useEffect, useRef } from 'react';
import { fishStocksState } from '@src/states/fridge/fish';

type UpsertFishStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertFishStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const fishStocks = useAtomValue(fishStocksState);

  // MEMO: コールバック関数内で最新の fishStocks を参照するために、useRefを使用する
  const fishStocksRef = useRef(fishStocks);
  useEffect(() => {
    fishStocksRef.current = fishStocks;
  }, [fishStocks]);

  return async ({
    id: fishId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertFishStockDetail) => {
    const existingStock = await fishStockRepository.getOne({
      idToken,
      userId: user!.uid,
      fishId,
    });
    if (existingStock.length === 0) {
      const data = await fishStockRepository.insert({
        idToken,
        userId: user!.uid,
        fishId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          fishStocksRef.current.byId[fishId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await fishStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        fishId,
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
