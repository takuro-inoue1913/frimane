import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customMeatMasterRepository } from '@src/interface/repositories/customMeatMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomMeatMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (meatId: string) => {
    try {
      const data = await customMeatMasterRepository.delete({
        idToken,
        meatId,
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
