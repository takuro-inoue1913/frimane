import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type SpiceStocks = NormalizedArray<FridgeStock>;

export const spiceStocksState = atom({
  ids: [],
  byId: {},
} as SpiceStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * spiceStocksState と同時に更新する。
 */
export const spiceStocksIdsState = atom([] as string[]);

export const spiceStockById = atom((get) => {
  const spiceStocks = get(spiceStocksState);
  return (spiceId: string) => spiceStocks.byId[spiceId];
});
