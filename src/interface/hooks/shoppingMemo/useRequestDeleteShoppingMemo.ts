import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { shoppingMemoRepository } from '@src/interface/repositories/shoppingMemoRepository';
import Toast from 'react-native-toast-message';

type DeleteShoppingMemoArgs = {
  shoppingMemoId: string;
};

export const useRequestDeleteShoppingMemo = () => {
  const idToken = useAtomValue(idTokenState);

  return async (args: DeleteShoppingMemoArgs) => {
    try {
      const data = await shoppingMemoRepository.delete({
        idToken,
        ...args,
      });
      return Promise.resolve(data);
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
