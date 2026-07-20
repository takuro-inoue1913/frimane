import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { shoppingMemoRepository } from '@src/interface/repositories/shoppingMemoRepository';
import Toast from 'react-native-toast-message';

type useRequestBulkDeleteShoppingMemoArgs = {
  shoppingMemoIds: string[];
};

export const useRequestBulkDeleteShoppingMemo = () => {
  const idToken = useAtomValue(idTokenState);

  return async (args: useRequestBulkDeleteShoppingMemoArgs) => {
    try {
      const data = await shoppingMemoRepository.bulkDelete({
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
