import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { customSeasoningMasterRepository } from '@src/interface/repositories/customSeasoningMasterRepository';
import Toast from 'react-native-toast-message';
import { seasoningStockRepository } from '@src/interface/repositories/seasoningStockRepository';

type InsertCustomSeasoningMasterArgs = {
  seasoningName: string;
  displayName: string;
  imageUri: string;
  incrementalUnit: number;
  defaultExpirationPeriod: number;
  unitId: number;
  isFavorite: boolean;
};

export const useRequestInsertCustomSeasoningMaster = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertCustomSeasoningMasterArgs) => {
    if (user?.uid === undefined) {
      throw new Error('user is not defined');
    }
    try {
      const data = await customSeasoningMasterRepository.insert({
        idToken,
        userId: user.uid,
        ...args,
      });

      await seasoningStockRepository.insert({
        idToken,
        userId: user!.uid,
        seasoningId: data!.custom_seasoning_id,
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
