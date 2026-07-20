import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customStapleFoodMasterRepository } from '@src/interface/repositories/customStapleFoodMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomStapleFoodMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (stapleFoodId: string) => {
    try {
      const data = await customStapleFoodMasterRepository.delete({
        idToken,
        stapleFoodId,
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
