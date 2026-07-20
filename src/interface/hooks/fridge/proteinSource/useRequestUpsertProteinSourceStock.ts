import { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { proteinSourceStocksState } from '@src/states/fridge/proteinSource';
import { proteinSourceStockRepository } from '@src/interface/repositories/proteinSourceStockRepository';

type UpsertProteinSourceStockArgs = {
  id: string;
  quantity: number;
};

export const useRequestUpsertProteinSourceStock = () => {
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
  }: UpsertProteinSourceStockArgs) => {
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
        incrementalUnit:
          proteinSourceStocksRef.current.byId[proteinSourceId].incrementalUnit,
        defaultExpirationPeriod:
          proteinSourceStocksRef.current.byId[proteinSourceId]
            .defaultExpirationPeriod,
      });
      return data;
    } else {
      // MEMO: 既存の在庫と同じ数量の場合は更新しない
      if (existingStock[0].quantity === quantity) {
        return;
      }
      const data = await proteinSourceStockRepository.updateQuantity({
        idToken,
        userId: user!.uid,
        proteinSourceId,
        quantity,
        defaultExpirationPeriod:
          proteinSourceStocksRef.current.byId[proteinSourceId]
            .defaultExpirationPeriod,
      });
      return data;
    }
  };
};
