import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customStapleFoodMasterRepository } from '@src/interface/repositories/customStapleFoodMasterRepository';
import Toast from 'react-native-toast-message';
import { stapleFoodStockRepository } from '@src/interface/repositories/stapleFoodStockRepository';

type InsertCustomStapleFoodMasterArgs = {
  stapleFoodName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomStapleFoodMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomStapleFoodMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customStapleFoodMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await stapleFoodStockRepository.insert({
        idToken,
        userId: user!.uid,
        stapleFoodId: data!.custom_staple_food_id,
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
