import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateDessertStocks } from '@src/interface/logics/generate/generateDessertStocks';
import {
  dessertStocksState,
  dessertStocksIdsState,
} from '@src/states/fridge/dessert';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';
import { filterDessertStock } from '@src/states/fridge/dessert/logics/filterDessertStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetDessertStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [dessertStocks, setDessertStocks] = useAtom(dessertStocksState);
  const setDessertStocksIds = useSetAtom(dessertStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'dessert', 'master', 'stock'],
    queryFn: async () => {
      const data = await dessertStockRepository.getAll({ idToken });
      const _dessertStocks = generateDessertStocks(data);
      setDessertStocks({
        byId: _dessertStocks.byId,
        ids: filterDessertStock({
          dessertStocks: _dessertStocks,
          originalIds: _dessertStocks.ids,
          selectFilterOptions,
        }),
      });
      setDessertStocksIds(_dessertStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    dessertStocks,
    isFetching,
    refetch,
  };
};
