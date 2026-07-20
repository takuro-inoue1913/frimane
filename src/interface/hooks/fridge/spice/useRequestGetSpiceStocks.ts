import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateSpiceStocks } from '@src/interface/logics/generate/generateSpiceStocks';
import {
  spiceStocksState,
  spiceStocksIdsState,
} from '@src/states/fridge/spice';
import { spiceStockRepository } from '@src/interface/repositories/spiceStockRepository';
import { filterSpiceStock } from '@src/states/fridge/spice/logics/filterSpiceStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetSpiceStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [spiceStocks, setSpiceStocks] = useAtom(spiceStocksState);
  const setSpiceStocksIds = useSetAtom(spiceStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'spice', 'master', 'stock'],
    queryFn: async () => {
      const data = await spiceStockRepository.getAll({ idToken });
      const _spiceStocks = generateSpiceStocks(data);
      setSpiceStocks({
        byId: _spiceStocks.byId,
        ids: filterSpiceStock({
          spiceStocks: _spiceStocks,
          originalIds: _spiceStocks.ids,
          selectFilterOptions,
        }),
      });
      setSpiceStocksIds(_spiceStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    spiceStocks,
    isFetching,
    refetch,
  };
};
