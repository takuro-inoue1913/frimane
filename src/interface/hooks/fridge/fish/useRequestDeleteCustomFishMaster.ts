import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customFishMasterRepository } from '@src/interface/repositories/customFishMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomFishMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (fishId: string) => {
    try {
      const data = await customFishMasterRepository.delete({
        idToken,
        fishId,
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
