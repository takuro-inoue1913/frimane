import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { recipeRepository } from '@src/interface/repositories/recipeRepository';
import Toast from 'react-native-toast-message';
import { dailyRecipeRepository } from '@src/interface/repositories/dailyRecipeRepository';

type DeleteRecipeArgs = {
  recipeId: string;
};

export const useRequestDeleteRecipe = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);

  return async (args: DeleteRecipeArgs) => {
    if (!user) {
      return Promise.reject(new Error('user is not defined'));
    }

    try {
      await recipeRepository.delete({
        idToken,
        recipeId: args.recipeId,
      });
      await dailyRecipeRepository.deleteDailyRecipeByRecipeId({
        idToken,
        recipeId: args.recipeId,
      });

      return Promise.resolve();
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
