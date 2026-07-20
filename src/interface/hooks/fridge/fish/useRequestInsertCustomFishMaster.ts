import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customFishMasterRepository } from '@src/interface/repositories/customFishMasterRepository';
import Toast from 'react-native-toast-message';
import { fishStockRepository } from '@src/interface/repositories/fishStockRepository';

type InsertCustomFishMasterArgs = {
  fishName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomFishMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomFishMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customFishMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await fishStockRepository.insert({
        idToken,
        userId: user!.uid,
        fishId: data!.custom_fish_id,
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
