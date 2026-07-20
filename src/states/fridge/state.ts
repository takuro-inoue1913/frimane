import { GetAllFridgeMasterQuery } from '@src/interface/__generated__/graphql';
import { FILTER_OPTIONS } from '@src/utils/consts';
import { atom } from 'jotai';

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
  | GetAllFridgeMasterQuery['custom_spice_master'][number]['__typename']
  | GetAllFridgeMasterQuery['custom_staple_food_master'][number]['__typename']
  | GetAllFridgeMasterQuery['staple_food_master'][number]['__typename'];

export type FridgeMaster = {
  id: string;
  name: string;
  displayName: string;
  imageUri: string;
  fridgeType: TypeName;
  /** 単位名 */
  unitName: string;
  /** 増減単位 */
  incrementalUnit: number;
  /** 在庫数。在庫がない場合は 0 になる。  */
  quantity: number;
  /** 在庫があるかどうか */
  hasStock: boolean;
  /** 基本賞味期限期間 */
  defaultExpirationPeriod: number;
};

export type SelectFilterOptions = {
  sort: (typeof FILTER_OPTIONS)['sort'][number];
  /** 検索する冷蔵庫名 */
  searchFridgeName: string;
};

export type UnitMater = {
  id: number;
  name: string;
};

export const selectFridgeCategoryState = atom<SelectFridgeCategory>('野菜類');

export const selectFilterOptionsState = atom<SelectFilterOptions>({
  sort: '通常',
  searchFridgeName: '',
});

export const fridgeMasterState = atom<FridgeMaster[]>([]);

export const unitMasterState = atom<UnitMater[]>([]);
