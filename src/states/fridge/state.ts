import { GetAllFridgeMasterQuery } from '@src/interface/__generated__/graphql';
import { FILTER_OPTIONS } from '@src/utils/consts';
import { atom } from 'recoil';

export type SelectFridgeCategory =
  | '野菜類'
  | '肉類'
  | '魚介類'
  | '主食・粉'
  | 'スパイス'
  | '調味料'
  | '卵・乳・豆'
  | 'デザート'
  | 'その他';

export type TypeName =
  | GetAllFridgeMasterQuery['vegetable_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_vegetable_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_dessert_master'][number]['__typename']
  | GetAllFridgeMasterQuery['dessert_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_fish_master'][number]['__typename']
  | GetAllFridgeMasterQuery['fish_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_meat_master'][number]['__typename']
  | GetAllFridgeMasterQuery['meat_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_other_master'][number]['__typename']
  | GetAllFridgeMasterQuery['other_master'][number]['__typename']
  | GetAllFridgeMasterQuery['protein_source_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_protein_source_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_seasoning_master'][number]['__typename']
  | GetAllFridgeMasterQuery['seasoning_master'][number]['__typename']
  | GetAllFridgeMasterQuery['spice_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_spice_master'][number]['__typename'];

export type FridgeMaster = {
  id: string;
  name: string;
  displayName: string;
  imageUri: string;
  fridgeType: TypeName;
  unitName: string;
  incrementalUnit: number;
};

export type SelectFilterOptions = {
  sort: (typeof FILTER_OPTIONS)['sort'][number];
};

export type UnitMater = {
  id: number;
  name: string;
};

export const selectFridgeCategoryState = atom<SelectFridgeCategory>({
  key: 'selectedCategoryState',
  default: '野菜類',
});

export const selectFilterOptionsState = atom<SelectFilterOptions>({
  key: 'selectFilterOptionsState',
  default: {
    sort: '通常',
  },
});

export const fridgeMasterState = atom<FridgeMaster[]>({
  key: 'fridgeMasterState',
  default: [],
});

export const unitMasterState = atom<UnitMater[]>({
  key: 'unitMasterState',
  default: [],
});
