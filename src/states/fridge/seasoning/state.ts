import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type SeasoningStocks = NormalizedArray<FridgeStock>;

export const seasoningStocksState = atom({
  ids: [],
  byId: {},
} as SeasoningStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * seasoningStocksState と同時に更新する。
 */
export const seasoningStocksIdsState = atom([] as string[]);

export const seasoningStockById = atom((get) => {
  const seasoningStocks = get(seasoningStocksState);
  return (seasoningId: string) => seasoningStocks.byId[seasoningId];
});
