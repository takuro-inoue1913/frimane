import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customVegetableMasterRepository } from '@src/interface/repositories/customVegetableMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomVegetableMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (vegetableId: string) => {
    try {
      const data = await customVegetableMasterRepository.delete({
        idToken,
        vegetableId,
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
