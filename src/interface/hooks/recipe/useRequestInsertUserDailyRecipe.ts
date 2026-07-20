import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import Toast from 'react-native-toast-message';
import { dailyRecipesState } from '@src/states/recipe';
import { dailyRecipeRepository } from '@src/interface/repositories/dailyRecipeRepository';

type InsertUserDailyRecipe = {
  date: string;
  brunchType: string;
  recipeId: string;
  isCreated: boolean;
};

export const useRequestInsertUserDailyRecipe = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const dailyRecipes = useAtomValue(dailyRecipesState);

  return async (args: InsertUserDailyRecipe) => {
    if (!user) {
      return Promise.reject(new Error('user is not defined'));
    }

    let dailyId = dailyRecipes.ids.find(
      (id) => dailyRecipes.byId[id].date === args.date,
    );

    if (!dailyId) {
      const result = await dailyRecipeRepository.insertDaily({
        idToken,
        date: args.date,
        userId: user.uid,
      });
      if (!result?.user_daily_id) {
        return Promise.reject(new Error('user_daily_id is not defined'));
      }
      dailyId = result.user_daily_id;
    }

    try {
      const data = await dailyRecipeRepository.insertDailyRecipe({
        idToken,
        userDailyId: dailyId,
        brunchType: args.brunchType,
        recipeId: args.recipeId,
        isCreated: args.isCreated,
      });

      dailyId = undefined;
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
