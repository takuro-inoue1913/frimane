import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';

import { idTokenState } from '@src/states/user';
import { generateMeatStocks } from '@src/interface/logics/generate/generateMeatStocks';
import { meatStocksState } from '@src/states/fridge/meat';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';

export const useRequestGetMeatStocks = () => {
  const idToken = useRecoilValue(idTokenState);
  const [meatStocks, setMeatStocks] = useRecoilState(meatStocksState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'meat', 'master', 'stock'],
    queryFn: async () => {
      const data = await meatStockRepository.getAll({ idToken });
      const _meatStocks = generateMeatStocks(data);
      setMeatStocks(_meatStocks);
      return _meatStocks;
    },
  });

  return {
    meatStocks,
    isFetching,
    refetch,
  };
};