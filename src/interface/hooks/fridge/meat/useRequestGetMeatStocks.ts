import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateMeatStocks } from '@src/interface/logics/generate/generateMeatStocks';
import { meatStocksState, meatStocksIdsState } from '@src/states/fridge/meat';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';
import { filterMeatStock } from '@src/states/fridge/meat/logics/filterMeatStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetMeatStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [meatStocks, setMeatStocks] = useAtom(meatStocksState);
  const setMeatStocksIds = useSetAtom(meatStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'meat', 'master', 'stock'],
    queryFn: async () => {
      const data = await meatStockRepository.getAll({ idToken });
      const _meatStocks = generateMeatStocks(data);
      setMeatStocks({
        byId: _meatStocks.byId,
        ids: filterMeatStock({
          meatStocks: _meatStocks,
          originalIds: _meatStocks.ids,
          selectFilterOptions,
        }),
      });
      setMeatStocksIds(_meatStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    meatStocks,
    isFetching,
    refetch,
  };
};
