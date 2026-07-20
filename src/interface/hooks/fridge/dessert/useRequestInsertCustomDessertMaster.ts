import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customDessertMasterRepository } from '@src/interface/repositories/customDessertMasterRepository';
import Toast from 'react-native-toast-message';
import { dessertStockRepository } from '@src/interface/repositories/dessertStockRepository';

type InsertCustomDessertMasterArgs = {
  dessertName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomDessertMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomDessertMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customDessertMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await dessertStockRepository.insert({
        idToken,
        userId: user!.uid,
        dessertId: data!.custom_dessert_id,
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
