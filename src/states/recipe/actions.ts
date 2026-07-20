import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  DailyRecipes,
  Recipes,
  dailyRecipesState,
  recipesState,
} from '@src/states/recipe/state';

export const useRecipesActions = () => {
  const store = useStore();
  const addRecipe = useCallback(
    ({
      id,
      name,
      imageUri,
      materials,
      descriptions,
    }: Recipes['byId'][number]) => {
      store.set(recipesState, (prev) => {
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
    [store],
  );

  const updateRecipe = useCallback(
    ({
      id,
      name,
      imageUri,
      materials,
      descriptions,
    }: Recipes['byId'][number]) => {
      store.set(recipesState, (prev) => {
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
    [store],
  );

  const deleteRecipe = useCallback(
    (id: string) => {
      store.set(recipesState, (prev) => {
        const ids = prev.ids.filter((i) => i !== id);
        const byId = { ...prev.byId };
        delete byId[id];
        return {
          ids,
          byId,
        };
      });
    },
    [store],
  );

  const addDailyRecipe = useCallback(
    ({
      id,
      date,
      dailyRecipe,
    }: {
      id: string;
      date: string;
      dailyRecipe: DailyRecipes['byId'][number]['dailyRecipes'][number];
    }) => {
      store.set(dailyRecipesState, (prev) => {
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
    [store],
  );

  const updateDailyRecipe = useCallback(
    ({
      id,
      date,
      dailyRecipe,
    }: {
      id: string;
      date: string;
      dailyRecipe: DailyRecipes['byId'][number]['dailyRecipes'][number];
    }) => {
      store.set(dailyRecipesState, (prev) => {
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
    [store],
  );

  const deleteDailyRecipe = useCallback(
    ({
      id,
      date,
      dailyRecipeId,
    }: {
      id: string;
      date: string;
      dailyRecipeId: string;
    }) => {
      store.set(dailyRecipesState, (prev) => {
        const ids = prev.ids.includes(id) ? prev.ids : [...prev.ids, id];

        const byId = {
          ...prev.byId,
          [id]: {
            id,
            date,
            dailyRecipes: prev.byId[id]
              ? prev.byId[id].dailyRecipes.filter((i) => i.id !== dailyRecipeId)
              : [],
          },
        };
        return {
          ids,
          byId,
        };
      });
    },
    [store],
  );

  const deleteDailyRecipeByRecipeId = useCallback(
    (recipeId: string) => {
      store.set(dailyRecipesState, (prev) => {
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
    [store],
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
