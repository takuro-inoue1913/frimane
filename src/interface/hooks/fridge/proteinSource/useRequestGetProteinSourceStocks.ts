import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateProteinSourceStocks } from '@src/interface/logics/generate/generateProteinSourceStocks';
import {
  proteinSourceStocksState,
  proteinSourceStocksIdsState,
} from '@src/states/fridge/proteinSource';
import { proteinSourceStockRepository } from '@src/interface/repositories/proteinSourceStockRepository';
import { filterProteinSourceStock } from '@src/states/fridge/proteinSource/logics/filterProteinSourceStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetProteinSourceStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [proteinSourceStocks, setProteinSourceStocks] = useAtom(
    proteinSourceStocksState,
  );
  const setProteinSourceStocksIds = useSetAtom(proteinSourceStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'proteinSource', 'master', 'stock'],
    queryFn: async () => {
      const data = await proteinSourceStockRepository.getAll({ idToken });
      const _proteinSourceStocks = generateProteinSourceStocks(data);
      setProteinSourceStocks({
        byId: _proteinSourceStocks.byId,
        ids: filterProteinSourceStock({
          proteinSourceStocks: _proteinSourceStocks,
          originalIds: _proteinSourceStocks.ids,
          selectFilterOptions,
        }),
      });
      setProteinSourceStocksIds(_proteinSourceStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    proteinSourceStocks,
    isFetching,
    refetch,
  };
};
