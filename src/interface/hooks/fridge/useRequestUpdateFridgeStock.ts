import { useAtomValue } from 'jotai';

// import { useRef, useEffect } from 'react';
import { TypeName } from '@src/states/fridge';
import { idTokenState, userState } from '@src/states/user';
import { useRequestUpsertVegetableStock } from '@src/interface/hooks/fridge/vegetable/useRequestUpsertVegetableStock';
import { useRequestUpsertStapleFoodStock } from '@src/interface/hooks/fridge/stapleFood/useRequestUpsertStapleFoodStock';
import { useRequestUpsertSpiceStock } from './spice/useRequestUpsertSpiceStock';
import { useRequestUpsertSeasoningStock } from './seasoning/useRequestUpsertSeasoningStock';
import { useRequestUpsertProteinSourceStock } from './proteinSource/useRequestUpsertProteinSourceStock';
import { useRequestUpsertOtherStock } from './other/useRequestUpsertOtherStock';
import { useRequestUpsertMeatStock } from './meat/useRequestUpsertMeatStock';
import { useRequestUpsertFishStock } from './fish/useRequestUpsertFishStock';
import { useRequestUpsertDessertStock } from './dessert/useRequestUpsertDessertStock';

type DecreaseFridgeStockArgs = {
  masterId: string;
  quantity: number;
  fridgeType: TypeName;
};

export const useRequestUpdateFridgeStock = () => {
  const idToken = useAtomValue(idTokenState);
  const user = useAtomValue(userState);
  const requestUpsertVegetableStock = useRequestUpsertVegetableStock();
  const requestUpsertStapleFoodStock = useRequestUpsertStapleFoodStock();
  const requestUpsertSpiceStock = useRequestUpsertSpiceStock();
  const requestUpsertSeasoningStock = useRequestUpsertSeasoningStock();
  const requestUpsertProteinSourceStock = useRequestUpsertProteinSourceStock();
  const requestUpsertOtherStock = useRequestUpsertOtherStock();
  const requestUpsertMeatStock = useRequestUpsertMeatStock();
  const requestUpsertFishStock = useRequestUpsertFishStock();
  const requestUpsertDessertStock = useRequestUpsertDessertStock();

  return async ({
    masterId,
    quantity,
    fridgeType,
  }: DecreaseFridgeStockArgs) => {
    if (!idToken) {
      throw new Error('idToken is not exist');
    }
    if (!user) {
      throw new Error('user is not exist');
    }

    // ここに追加
    switch (fridgeType) {
      case 'vegetable_master':
      case 'custom_vegetable_master':
        return requestUpsertVegetableStock({
          id: masterId,
          quantity,
        });
      case 'staple_food_master':
      case 'custom_staple_food_master':
        return requestUpsertStapleFoodStock({
          id: masterId,
          quantity,
        });
      case 'spice_master':
      case 'custom_spice_master':
        return requestUpsertSpiceStock({
          id: masterId,
          quantity,
        });
      case 'seasoning_master':
      case 'custom_seasoning_master':
        return requestUpsertSeasoningStock({
          id: masterId,
          quantity,
        });
      case 'protein_source_master':
      case 'custom_protein_source_master':
        return requestUpsertProteinSourceStock({
          id: masterId,
          quantity,
        });
      case 'other_master':
      case 'custom_other_master':
        return requestUpsertOtherStock({
          id: masterId,
          quantity,
        });
      case 'meat_master':
      case 'custom_meat_master':
        return requestUpsertMeatStock({
          id: masterId,
          quantity,
        });
      case 'fish_master':
      case 'custom_fish_master':
        return requestUpsertFishStock({
          id: masterId,
          quantity,
        });
      case 'dessert_master':
      case 'custom_dessert_master':
        return requestUpsertDessertStock({
          id: masterId,
          quantity,
        });
    }
  };
};
