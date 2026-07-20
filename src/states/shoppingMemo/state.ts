import { atom } from 'jotai';
import { TypeName } from '@src/states/fridge';
import { NormalizedArray } from '@src/types';

export type ShoppingMemo = NormalizedArray<{
  id: string;
  /** マスターID */
  masterId: string;
  name: string;
  displayName: string;
  imageUri: string;
  fridgeType: TypeName;
  /** 単位名 */
  unitName: string;
  /** 増減単位 */
  incrementalUnit: number;
  /** 数量 */
  quantity: number;
  /** チェック済みかどうか */
  isChecked: boolean;
}>;

export const shoppingMemosState = atom<ShoppingMemo>({
  ids: [],
  byId: {},
});
