import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type StapleFoodStocks = NormalizedArray<FridgeStock>;

export const stapleFoodStocksState = atom({
  ids: [],
  byId: {},
} as StapleFoodStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * stapleFoodStocksState と同時に更新する。
 */
export const stapleFoodStocksIdsState = atom([] as string[]);

export const stapleFoodStockById = atom((get) => {
  const stapleFoodStocks = get(stapleFoodStocksState);
  return (stapleFoodId: string) => stapleFoodStocks.byId[stapleFoodId];
});
