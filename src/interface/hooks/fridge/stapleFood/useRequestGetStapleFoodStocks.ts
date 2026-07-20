import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateStapleFoodStocks } from '@src/interface/logics/generate/generateStapleFoodStocks';
import {
  stapleFoodStocksState,
  stapleFoodStocksIdsState,
} from '@src/states/fridge/stapleFood';
import { stapleFoodStockRepository } from '@src/interface/repositories/stapleFoodStockRepository';
import { filterStapleFoodStock } from '@src/states/fridge/stapleFood/logics/filterStapleFoodStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetStapleFoodStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [stapleFoodStocks, setStapleFoodStocks] = useAtom(
    stapleFoodStocksState,
  );
  const setStapleFoodStocksIds = useSetAtom(stapleFoodStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'stapleFood', 'master', 'stock'],
    queryFn: async () => {
      const data = await stapleFoodStockRepository.getAll({ idToken });
      const _stapleFoodStocks = generateStapleFoodStocks(data);
      setStapleFoodStocks({
        byId: _stapleFoodStocks.byId,
        ids: filterStapleFoodStock({
          stapleFoodStocks: _stapleFoodStocks,
          originalIds: _stapleFoodStocks.ids,
          selectFilterOptions,
        }),
      });
      setStapleFoodStocksIds(_stapleFoodStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    stapleFoodStocks,
    isFetching,
    refetch,
  };
};
