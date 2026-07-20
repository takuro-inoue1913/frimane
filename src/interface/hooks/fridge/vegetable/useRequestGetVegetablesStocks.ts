import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateVegetablesStocks } from '@src/interface/logics/generate/generateVegetablesStocks';
import {
  vegetablesStocksIdsState,
  vegetablesStocksState,
} from '@src/states/fridge/vegetables';
import { selectFilterOptionsState } from '@src/states/fridge';
import { vegetableStockRepository } from '@src/interface/repositories/vegetableStockRepository';
import { filterVegetablesStock } from '@src/states/fridge/vegetables/logics/filterVegetablesStock';

export const useRequestGetVegetablesStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [vegetablesStocks, setVegetablesStocks] = useAtom(
    vegetablesStocksState,
  );
  const setVegetablesStocksIdsState = useSetAtom(vegetablesStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'vegetable', 'master', 'stock'],
    queryFn: async () => {
      const data = await vegetableStockRepository.getAll({ idToken });
      const _vegetablesStocks = generateVegetablesStocks(data);
      setVegetablesStocks({
        byId: _vegetablesStocks.byId,
        ids: filterVegetablesStock({
          vegetablesStocks: _vegetablesStocks,
          originalIds: _vegetablesStocks.ids,
          selectFilterOptions,
        }),
      });
      setVegetablesStocksIdsState(_vegetablesStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    vegetablesStocks,
    isFetching,
    refetch,
  };
};
