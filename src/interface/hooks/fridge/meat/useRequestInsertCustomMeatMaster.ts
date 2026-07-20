import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customMeatMasterRepository } from '@src/interface/repositories/customMeatMasterRepository';
import Toast from 'react-native-toast-message';
import { meatStockRepository } from '@src/interface/repositories/meatStockRepository';

type InsertCustomMeatMasterArgs = {
  meatName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomMeatMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomMeatMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customMeatMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await meatStockRepository.insert({
        idToken,
        userId: user!.uid,
        meatId: data!.custom_meat_id,
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
