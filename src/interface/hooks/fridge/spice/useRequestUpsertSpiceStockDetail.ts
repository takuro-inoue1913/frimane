import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { spiceStockRepository } from '@src/interface/repositories/spiceStockRepository';
import { useEffect, useRef } from 'react';
import { spiceStocksState } from '@src/states/fridge/spice';

type UpsertSpiceStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertSpiceStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const spiceStocks = useAtomValue(spiceStocksState);

  // MEMO: コールバック関数内で最新の spiceStocks を参照するために、useRefを使用する
  const spiceStocksRef = useRef(spiceStocks);
  useEffect(() => {
    spiceStocksRef.current = spiceStocks;
  }, [spiceStocks]);

  return async ({
    id: spiceId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertSpiceStockDetail) => {
    const existingStock = await spiceStockRepository.getOne({
      idToken,
      userId: user!.uid,
      spiceId,
    });
    if (existingStock.length === 0) {
      const data = await spiceStockRepository.insert({
        idToken,
        userId: user!.uid,
        spiceId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          spiceStocksRef.current.byId[spiceId].defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await spiceStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        spiceId,
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
