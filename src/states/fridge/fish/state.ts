import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type FishStocks = NormalizedArray<FridgeStock>;

export const fishStocksState = atom({
  ids: [],
  byId: {},
} as FishStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * fishStocksState と同時に更新する。
 */
export const fishStocksIdsState = atom([] as string[]);

export const fishStockById = atom((get) => {
  const fishStocks = get(fishStocksState);
  return (fishId: string) => fishStocks.byId[fishId];
});
