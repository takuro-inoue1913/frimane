import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { idTokenState } from '@src/states/user';
import { generateVegetablesStocks } from '@src/interface/logics/generate/generateVegetablesStocks';
import {
  vegetablesStocksIdsState,
  vegetablesStocksState,
} from '@src/states/fridge/vegetables';
import { vegetableStockRepository } from '@src/interface/repositories/vegetableStockRepository';

export const useRequestGetVegetablesStocks = () => {
  const idToken = useRecoilValue(idTokenState);
  const [vegetablesStocks, setVegetablesStocks] = useRecoilState(
    vegetablesStocksState,
  );
  const setVegetablesStocksIdsState = useSetRecoilState(
    vegetablesStocksIdsState,
  );

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'vegetable', 'master', 'stock'],
    queryFn: async () => {
      const data = await vegetableStockRepository.getAll({ idToken });
      const _vegetablesStocks = generateVegetablesStocks(data);
      setVegetablesStocks(_vegetablesStocks);
      setVegetablesStocksIdsState(_vegetablesStocks.ids);
      return _vegetablesStocks;
    },
  });

  return {
    vegetablesStocks,
    isFetching,
    refetch,
  };
};