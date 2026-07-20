import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type OtherStocks = NormalizedArray<FridgeStock>;

export const otherStocksState = atom({
  ids: [],
  byId: {},
} as OtherStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * otherStocksState と同時に更新する。
 */
export const otherStocksIdsState = atom([] as string[]);

export const otherStockById = atom((get) => {
  const otherStocks = get(otherStocksState);
  return (otherId: string) => otherStocks.byId[otherId];
});
