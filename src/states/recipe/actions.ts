import {
  DailyRecipes,
  Recipes,
  dailyRecipesState,
  recipesState,
} from '@src/states/recipe/state';
import { useRecoilCallback } from 'recoil';

export const useRecipesActions = () => {
  const addRecipe = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        name,
        imageUri,
        materials,
        descriptions,
      }: Recipes['byId'][number]) => {
        set(recipesState, (prev) => {
          const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];
          const byId = {
            ...prev.byId,
            [id]: {
              id,
              name,
              imageUri,
              materials,
              descriptions,
            },
          };
          return {
            ids,
            byId,
          };
        });
      },
  );

  const updateRecipe = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        name,
        imageUri,
        materials,
        descriptions,
      }: Recipes['byId'][number]) => {
        set(recipesState, (prev) => {
          const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];
          const byId = {
            ...prev.byId,
            [id]: {
              id,
              name,
              imageUri,
              materials,
              descriptions,
            },
          };
          return {
            ids,
            byId,
          };
        });
      },
  );

  const deleteRecipe = useRecoilCallback(({ set }) => (id: string) => {
    set(recipesState, (prev) => {
      const ids = prev.ids.filter((i) => i !== id);
      const byId = { ...prev.byId };
      delete byId[id];
      return {
        ids,
        byId,
      };
    });
  });

  const addDailyRecipe = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        date,
        dailyRecipe,
      }: {
        id: string;
        date: string;
        dailyRecipe: DailyRecipes['byId'][number]['dailyRecipes'][number];
      }) => {
        set(dailyRecipesState, (prev) => {
          const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];
          const byId = {
            ...prev.byId,
            [id]: {
              id,
              date,
              dailyRecipes: prev.byId[id]
                ? [...prev.byId[id].dailyRecipes, dailyRecipe]
                : [dailyRecipe],
            },
          };
          return {
            ids,
            byId,
          };
        });
      },
  );

  const updateDailyRecipe = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        date,
        dailyRecipe,
      }: {
        id: string;
        date: string;
        dailyRecipe: DailyRecipes['byId'][number]['dailyRecipes'][number];
      }) => {
        set(dailyRecipesState, (prev) => {
          const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];

          const byId = {
            ...prev.byId,
            [id]: {
              id,
              date,
              dailyRecipes: prev.byId[id]
                ? prev.byId[id].dailyRecipes.map((i) =>
                    i.id === dailyRecipe.id ? dailyRecipe : i,
                  )
                : [dailyRecipe],
            },
          };
          return {
            ids,
            byId,
          };
        });
      },
  );

  const deleteDailyRecipe = useRecoilCallback(
    ({ set }) =>
      ({
        id,
        date,
        dailyRecipeId,
      }: {
        id: string;
        date: string;
        dailyRecipeId: string;
      }) => {
        set(dailyRecipesState, (prev) => {
          const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];

          const byId = {
            ...prev.byId,
            [id]: {
              id,
              date,
              dailyRecipes: prev.byId[id]
                ? prev.byId[id].dailyRecipes.filter(
                    (i) => i.id !== dailyRecipeId,
                  )
                : [],
            },
          };
          return {
            ids,
            byId,
          };
        });
      },
  );

  const deleteDailyRecipeByRecipeId = useRecoilCallback(
    ({ set }) =>
      (recipeId: string) => {
        set(dailyRecipesState, (prev) => {
          const ids = prev.ids;
          const byId = { ...prev.byId };
          ids.forEach((id) => {
            byId[id].dailyRecipes = byId[id].dailyRecipes.filter(
              (i) => i.recipeId !== recipeId,
            );
          });
          return {
            ids,
            byId,
          };
        });
      },
  );

  return {
    addRecipe,
    updateRecipe,
    deleteRecipe,
    addDailyRecipe,
    updateDailyRecipe,
    deleteDailyRecipe,
    deleteDailyRecipeByRecipeId,
  };
};
