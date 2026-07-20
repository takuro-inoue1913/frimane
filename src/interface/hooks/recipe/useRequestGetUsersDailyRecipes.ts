import { useAtom, useAtomValue } from 'jotai';

import { idTokenState } from '@src/states/user';
import { useQuery } from '@tanstack/react-query';
import { generateDailyRecipes } from '@src/interface/logics/generate/generateDailyRecipes';
import { dailyRecipesState } from '@src/states/recipe';
import { dailyRecipeRepository } from '@src/interface/repositories/dailyRecipeRepository';

export const useRequestGetUsersDailyRecipes = (
  startDate: string,
  endDate: string,
) => {
  const idToken = useAtomValue(idTokenState);
  const [dailyRecipes, setDailyRecipes] = useAtom(dailyRecipesState);

  const { isFetching, refetch } = useQuery({
    queryKey: ['graphl', 'get', 'users', 'daily', 'recipes'],
    queryFn: async () => {
      const data = await dailyRecipeRepository.getInRange({
        idToken,
        startDate,
        endDate,
      });
      const _dailyRecipes = generateDailyRecipes(data);
      setDailyRecipes(_dailyRecipes);
      return data;
    },
  });

  const changeDate = async (date: string) => {
    const data = await dailyRecipeRepository.byDate({
      idToken,
      date,
    });
    const _dailyRecipes = generateDailyRecipes(data);
    setDailyRecipes((prev) => {
      return {
        ids: [...prev.ids],
        byId: {
          ...prev.byId,
          ..._dailyRecipes.byId,
        },
      };
    });
  };

  const changeMonth = async (startDate: string, endDate: string) => {
    const data = await dailyRecipeRepository.getInRange({
      idToken,
      startDate,
      endDate,
    });
    const _dailyRecipes = generateDailyRecipes(data);
    setDailyRecipes(_dailyRecipes);
  };

  return {
    isFetching,
    dailyRecipes,
    changeDate,
    changeMonth,
    refetch,
  };
};
