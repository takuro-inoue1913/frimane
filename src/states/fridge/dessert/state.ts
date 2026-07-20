import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type DessertStocks = NormalizedArray<FridgeStock>;

export const dessertStocksState = atom({
  ids: [],
  byId: {},
} as DessertStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * dessertStocksState と同時に更新する。
 */
export const dessertStocksIdsState = atom([] as string[]);

export const dessertStockById = atom((get) => {
  const dessertStocks = get(dessertStocksState);
  return (dessertId: string) => dessertStocks.byId[dessertId];
});
