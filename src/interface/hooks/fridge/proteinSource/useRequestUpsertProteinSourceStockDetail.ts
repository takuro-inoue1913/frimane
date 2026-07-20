import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { proteinSourceStockRepository } from '@src/interface/repositories/proteinSourceStockRepository';
import { useEffect, useRef } from 'react';
import { proteinSourceStocksState } from '@src/states/fridge/proteinSource';

type UpsertProteinSourceStockDetail = {
  id: string;
  quantity: number;
  incrementalUnit: number;
  expirationDate: string;
  memo: string;
  isFavorite: boolean;
};

export const useRequestUpsertProteinSourceStockDetail = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const proteinSourceStocks = useAtomValue(proteinSourceStocksState);

  // MEMO: コールバック関数内で最新の proteinSourceStocks を参照するために、useRefを使用する
  const proteinSourceStocksRef = useRef(proteinSourceStocks);
  useEffect(() => {
    proteinSourceStocksRef.current = proteinSourceStocks;
  }, [proteinSourceStocks]);

  return async ({
    id: proteinSourceId,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: UpsertProteinSourceStockDetail) => {
    const existingStock = await proteinSourceStockRepository.getOne({
      idToken,
      userId: user!.uid,
      proteinSourceId,
    });
    if (existingStock.length === 0) {
      const data = await proteinSourceStockRepository.insert({
        idToken,
        userId: user!.uid,
        proteinSourceId,
        quantity,
        incrementalUnit,
        defaultExpirationPeriod:
          proteinSourceStocksRef.current.byId[proteinSourceId]
            .defaultExpirationPeriod,
      });
      return data;
    } else {
      const data = await proteinSourceStockRepository.updateDetail({
        idToken,
        userId: user!.uid,
        proteinSourceId,
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
