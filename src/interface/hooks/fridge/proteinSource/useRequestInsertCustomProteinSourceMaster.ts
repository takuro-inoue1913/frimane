import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customProteinSourceMasterRepository } from '@src/interface/repositories/customProteinSourceMasterRepository';
import Toast from 'react-native-toast-message';
import { proteinSourceStockRepository } from '@src/interface/repositories/proteinSourceStockRepository';

type InsertCustomProteinSourceMasterArgs = {
  proteinSourceName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomProteinSourceMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomProteinSourceMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customProteinSourceMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await proteinSourceStockRepository.insert({
        idToken,
        userId: user!.uid,
        proteinSourceId: data!.custom_protein_source_id,
        quantity: 0,
        incrementalUnit: args.incrementalUnit,
        defaultExpirationPeriod: args.defaultExpirationPeriod,
        isFavorite: args.isFavorite,
      });
      return data;
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'サーバーエラーが発生しました',
        text2: '時間をおいて再度お試しください',
      });
      throw error;
    }
  };
};
