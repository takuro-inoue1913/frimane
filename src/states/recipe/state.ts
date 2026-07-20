import { atom } from 'jotai';
import { TypeName } from '@src/states/fridge';
import { NormalizedArray } from '@src/types';

export type BrunchType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type Recipes = NormalizedArray<{
  id: string;
  /** レシピ名 */
  name: string;
  imageUri: string;
  materials: {
    id: string;
    masterId: string;
    fridgeType: TypeName;
    fridgeName: string;
    quantity: number;
  }[];
  descriptions: string[];
}>;

export type DailyRecipes = NormalizedArray<{
  id: string;
  date: string;
  dailyRecipes: {
    id: string;
    recipeId: string;
    recipeName: string;
    recipeImageUri: string;
    brunchType: BrunchType;
    isCreated: boolean;
  }[];
}>;

export const recipesState = atom<Recipes>({
  ids: [],
  byId: {},
});

export const dailyRecipesState = atom<DailyRecipes>({
  ids: [],
  byId: {},
});
