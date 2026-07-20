import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue } from 'jotai';

import { unitMasterState, UnitMater } from '@src/states/fridge';
import { idTokenState } from '@src/states/user';
import { unitRepository } from '@src/interface/repositories/unitRepository';

export const useRequestGetUnit = () => {
  const idToken = useAtomValue(idTokenState);
  const [unitMaster, setUnitMaster] = useAtom(unitMasterState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'unit'],
    queryFn: async () => {
      const data = await unitRepository.getAll({ idToken });
      const _unitMaster: UnitMater[] = data.map((unit) => ({
        id: unit.unit_id,
        name: unit.unit_name,
      }));
      setUnitMaster(_unitMaster);
      return data;
    },
    // マスターデータなのでキャッシュを長めに設定
    staleTime: 30000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    unitMaster,
    isFetching,
    refetch,
  };
};
