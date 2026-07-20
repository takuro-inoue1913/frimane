import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import Toast from 'react-native-toast-message';
import { dailyRecipeRepository } from '@src/interface/repositories/dailyRecipeRepository';

type DeleteUserDailyRecipeArgs = {
  userDailyRecipeId: string;
};

export const useRequestDeleteUserDailyRecipe = () => {
  const idToken = useAtomValue(idTokenState);

  return async (args: DeleteUserDailyRecipeArgs) => {
    try {
      const data = await dailyRecipeRepository.deleteDailyRecipe({
        idToken,
        userDailyRecipeId: args.userDailyRecipeId,
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
