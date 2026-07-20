import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { customSeasoningMasterRepository } from '@src/interface/repositories/customSeasoningMasterRepository';
import Toast from 'react-native-toast-message';

export const useRequestDeleteCustomSeasoningMaster = () => {
  const idToken = useAtomValue(idTokenState);

  return async (seasoningId: string) => {
    try {
      const data = await customSeasoningMasterRepository.delete({
        idToken,
        seasoningId,
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
