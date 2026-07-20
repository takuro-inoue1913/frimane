import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { shoppingMemoRepository } from '@src/interface/repositories/shoppingMemoRepository';
import Toast from 'react-native-toast-message';

type InsertShoppingMemoArgs = {
  masterId: string;
  quantity: number;
};

export const useRequestInsertShoppingMemo = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: InsertShoppingMemoArgs) => {
    if (!user) {
      return Promise.reject(new Error('user is not defined'));
    }
    try {
      const data = await shoppingMemoRepository.insert({
        idToken,
        userId: user.uid,
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
