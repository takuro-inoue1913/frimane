import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customSpiceMasterRepository } from '@src/interface/repositories/customSpiceMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomSpiceMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (spiceId: string) => {
    try {
      const data = await customSpiceMasterRepository.delete({
        idToken,
        spiceId,
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
