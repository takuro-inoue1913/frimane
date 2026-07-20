import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { shoppingMemoRepository } from '@src/interface/repositories/shoppingMemoRepository';
import Toast from 'react-native-toast-message';

type DeleteShoppingMemoByMasterIdArgs = {
  masterId: string;
};

export const useRequestDeleteShoppingMemoByMasterId = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: DeleteShoppingMemoByMasterIdArgs) => {
    try {
      const data = await shoppingMemoRepository.deleteByMasterId({
        idToken,
        userId: user!.uid,
        ...args,
      });
      return Promise.resolve(data?.returning[0]);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'サーバーエラーが発生しました',
        text2: '時間をおいて再度お試しください',
      });
      return Promise.reject(error);
    }
  };
};
