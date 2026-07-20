import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 肉在庫の型
 */
export type MeatStocks = NormalizedArray<FridgeStock>;

export const meatStocksState = atom({
  ids: [],
  byId: {},
} as MeatStocks);

/**
 * 肉在庫のIDの配列。絞り込みのために使用する想定。
 * meatStocksState と同時に更新する。
 */
export const meatStocksIdsState = atom([] as string[]);

export const meatStockById = atom((get) => {
  const meatStocks = get(meatStocksState);
  return (meatId: string) => meatStocks.byId[meatId];
});
