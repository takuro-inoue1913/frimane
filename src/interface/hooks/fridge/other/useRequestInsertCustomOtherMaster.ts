import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customOtherMasterRepository } from '@src/interface/repositories/customOtherMasterRepository';
import Toast from 'react-native-toast-message';
import { otherStockRepository } from '@src/interface/repositories/otherStockRepository';

type InsertCustomOtherMasterArgs = {
  otherName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomOtherMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomOtherMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customOtherMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await otherStockRepository.insert({
        idToken,
        userId: user!.uid,
        otherId: data!.custom_other_id,
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
