import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { idTokenState } from '@src/states/user';
import { generateOtherStocks } from '@src/interface/logics/generate/generateOtherStocks';
import {
  otherStocksState,
  otherStocksIdsState,
} from '@src/states/fridge/other';
import { otherStockRepository } from '@src/interface/repositories/otherStockRepository';
import { filterOtherStock } from '@src/states/fridge/other/logics/filterOtherStock';
import { selectFilterOptionsState } from '@src/states/fridge';

export const useRequestGetOtherStocks = () => {
  const idToken = useAtomValue(idTokenState);
  const [otherStocks, setOtherStocks] = useAtom(otherStocksState);
  const setOtherStocksIds = useSetAtom(otherStocksIdsState);
  const selectFilterOptions = useAtomValue(selectFilterOptionsState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'other', 'master', 'stock'],
    queryFn: async () => {
      const data = await otherStockRepository.getAll({ idToken });
      const _otherStocks = generateOtherStocks(data);
      setOtherStocks({
        byId: _otherStocks.byId,
        ids: filterOtherStock({
          otherStocks: _otherStocks,
          originalIds: _otherStocks.ids,
          selectFilterOptions,
        }),
      });
      setOtherStocksIds(_otherStocks.ids);

      return data;
    },
    // キャッシュ時間を延長
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return {
    otherStocks,
    isFetching,
    refetch,
  };
};
