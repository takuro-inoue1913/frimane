import { useAtomValue } from 'jotai';

import { idTokenState, userState } from '@src/states/user';
import { recipeRepository } from '@src/interface/repositories/recipeRepository';
import Toast from 'react-native-toast-message';
import { Recipes } from '@src/states/recipe';
import { fridgeMasterState } from '@src/states/fridge';
import { getFridgeMaster } from '@src/interface/logics/generate/generateRecipes';

type UpdateRecipeArgs = {
  recipeId: string;
  recipeName: string;
  recipeImage: string;
  materials: { masterId: string; quantity: number }[];
  descriptions: string[];
};

type ResultData = {
  recipeId: string;
  recipeName: string;
  imageUri: string;
  materials: Recipes['byId'][number]['materials'];
  descriptions: string[];
};

export const useRequestUpdateRecipe = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const fridgeMaster = useAtomValue(fridgeMasterState);

  return async (args: UpdateRecipeArgs) => {
    if (!user) {
      return Promise.reject(new Error('user is not defined'));
    }

    let resultData = {} as ResultData;
    try {
      const data = await recipeRepository.update({
        idToken,
        recipeId: args.recipeId,
        recipeName: args.recipeName,
        recipeImage: args.recipeImage,
      });

      if (data) {
        const updateMaterialsResult = await recipeRepository.updateMaterials({
          idToken,
          recipeId: data.recipe_id,
          args: args.materials,
        });
        const updateStepsResult = await recipeRepository.updateSteps({
          idToken,
          recipeId: data.recipe_id,
          args: args.descriptions.map((description) => ({
            description,
          })),
        });
        if (!updateMaterialsResult) {
          return Promise.reject(
            new Error('insertMaterialsResult is not defined'),
          );
        }

        resultData = {
          recipeId: data.recipe_id,
          recipeName: data.recipe_name,
          imageUri: data.recipe_image,
          materials:
            updateMaterialsResult?.returning.map((i) => {
              const _fridgeMaster = getFridgeMaster(fridgeMaster, i.master_id);
              return {
                id: i.recipe_material_id,
                masterId: i.master_id,
                fridgeType: _fridgeMaster.fridgeType,
                fridgeName: _fridgeMaster.name,
                quantity: i.quantity,
              };
            }) || [],
          descriptions:
            updateStepsResult?.returning.map((i) => i.description) || [],
        };
      }

      return Promise.resolve(resultData);
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
