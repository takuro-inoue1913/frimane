import { atom } from 'jotai';
import { FridgeStock, NormalizedArray } from '@src/types';

/**
 * 在庫の型
 */
export type ProteinSourceStocks = NormalizedArray<FridgeStock>;

export const proteinSourceStocksState = atom({
  ids: [],
  byId: {},
} as ProteinSourceStocks);

/**
 * 在庫IDの配列。絞り込みのために使用する想定。
 * proteinSourceStocksState と同時に更新する。
 */
export const proteinSourceStocksIdsState = atom([] as string[]);

export const proteinSourceStockById = atom((get) => {
  const proteinSourceStocks = get(proteinSourceStocksState);
  return (proteinSourceId: string) => proteinSourceStocks.byId[proteinSourceId];
});
