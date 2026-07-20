import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customProteinSourceMasterRepository } from '@src/interface/repositories/customProteinSourceMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomProteinSourceMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (proteinSourceId: string) => {
    try {
      const data = await customProteinSourceMasterRepository.delete({
        idToken,
        proteinSourceId,
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
