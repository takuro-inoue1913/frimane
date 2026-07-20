import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customDessertMasterRepository } from '@src/interface/repositories/customDessertMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomDessertMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (dessertId: string) => {
    try {
      const data = await customDessertMasterRepository.delete({
        idToken,
        dessertId,
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
