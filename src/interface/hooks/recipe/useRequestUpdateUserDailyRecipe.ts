import { useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import Toast from 'react-native-toast-message';
import { dailyRecipeRepository } from '@src/interface/repositories/dailyRecipeRepository';

type UpdateUserDailyRecipeArgs = {
  userDailyRecipeId: string;
  brunchType: string;
  recipeId: string;
  isCreated: boolean;
};

export const useRequestUpdateUserDailyRecipe = () => {
  const idToken = useAtomValue(idTokenState);

  return async (args: UpdateUserDailyRecipeArgs) => {
    try {
      const data = await dailyRecipeRepository.updateDailyRecipe({
        idToken,
        userDailyRecipeId: args.userDailyRecipeId,
        brunchType: args.brunchType,
        recipeId: args.recipeId,
        isCreated: args.isCreated,
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
