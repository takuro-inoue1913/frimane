import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 野菜在庫の型
 */
export type VegetablesStocks = NormalizedArray<FridgeStock>;

export const vegetablesStocksState = atom({
  ids: [],
  byId: {},
} as VegetablesStocks);

/**
 * 野菜在庫のIDの配列。絞り込みのために使用する想定。
 * vegetablesStocksState と同時に更新する。
 */
export const vegetablesStocksIdsState = atom([] as string[]);

export const vegetableStockById = atom((get) => {
  const vegetablesStocks = get(vegetablesStocksState);
  return (vegetableId: string) => vegetablesStocks.byId[vegetableId];
});
