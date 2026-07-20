import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateSeasoningStocks } from '@src/interface/logics/generate/generateSeasoningStocks';
import {
  seasoningStocksState,
  seasoningStocksIdsState,
} from '@src/states/fridge/seasoning';
import { seasoningStockRepository } from '@src/interface/repositories/seasoningStockRepository';
import { filterSeasoningStock } from '@src/states/fridge/seasoning/logics/filterSeasoningStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetSeasoningStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [seasoningStocks, setSeasoningStocks] = useAtom(seasoningStocksState);
  const setSeasoningStocksIds = useSetAtom(seasoningStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'seasoning', 'master', 'stock'],
    queryFn: async () => {
      const data = await seasoningStockRepository.getAll({ idToken });
      const _seasoningStocks = generateSeasoningStocks(data);
      setSeasoningStocks({
        byId: _seasoningStocks.byId,
        ids: filterSeasoningStock({
          seasoningStocks: _seasoningStocks,
          originalIds: _seasoningStocks.ids,
          selectFilterOptions,
        }),
      });
      setSeasoningStocksIds(_seasoningStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    seasoningStocks,
    isFetching,
    refetch,
  };
};
