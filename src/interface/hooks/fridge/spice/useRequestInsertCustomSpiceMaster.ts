import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customSpiceMasterRepository } from '@src/interface/repositories/customSpiceMasterRepository';
import Toast from 'react-native-toast-message';
import { spiceStockRepository } from '@src/interface/repositories/spiceStockRepository';

type InsertCustomSpiceMasterArgs = {
  spiceName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomSpiceMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomSpiceMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customSpiceMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await spiceStockRepository.insert({
        idToken,
        userId: user!.uid,
        spiceId: data!.custom_spice_id,
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
