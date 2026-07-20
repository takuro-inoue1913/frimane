import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateFishStocks } from '@src/interface/logics/generate/generateFishStocks';
import { fishStocksState, fishStocksIdsState } from '@src/states/fridge/fish';
import { fishStockRepository } from '@src/interface/repositories/fishStockRepository';
import { filterFishStock } from '@src/states/fridge/fish/logics/filterFishStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetFishStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [fishStocks, setFishStocks] = useAtom(fishStocksState);
  const setFishStocksIds = useSetAtom(fishStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'fish', 'master', 'stock'],
    queryFn: async () => {
      const data = await fishStockRepository.getAll({ idToken });
      const _fishStocks = generateFishStocks(data);
      setFishStocks({
        byId: _fishStocks.byId,
        ids: filterFishStock({
          fishStocks: _fishStocks,
          originalIds: _fishStocks.ids,
          selectFilterOptions,
        }),
      });
      setFishStocksIds(_fishStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    fishStocks,
    isFetching,
    refetch,
  };
};
