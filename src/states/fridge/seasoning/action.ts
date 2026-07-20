import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  SeasoningStocks,
  seasoningStocksIdsState,
  seasoningStocksState,
} from '@src/states/fridge/seasoning/state';
import { filterSeasoningStock } from '@src/states/fridge/seasoning/logics/filterSeasoningStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type SeasoningStockActions = {
  increaseSeasoningStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseSeasoningStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateSeasoningStockDetail: ({
    id,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: {
    /** 更新するID */
    id: string;
    /** 更新する数量を指定。 */
    quantity: number;
    /** 更新する単位を指定。 */
    incrementalUnit: number;
    /** 更新する賞味期限を指定。 */
    expirationDate: string;
    /** 更新するメモを指定。 */
    memo: string;
    /** 更新するお気に入りの状態を指定。 */
    isFavorite: boolean;
  }) => void;
  filterVegetableStocks: () => void;
  updateIsFavorite: ({
    id,
    isFavorite,
  }: {
    /** 更新するID */
    id: string;
    /** 更新するお気に入りの状態を指定。 */
    isFavorite: boolean;
  }) => void;
};

export const useSeasoningStockActions = () => {
  const store = useStore();
  const increaseSeasoningStock: SeasoningStockActions['increaseSeasoningStock'] =
    useCallback(
      ({ id: seasoningId, quantity }) => {
        store.set(seasoningStocksState, (prev) => {
          const newStocks: SeasoningStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === seasoningId) {
                  acc[cur].quantity += quantity;
                  acc[cur].hasStock = true;
                }
                return acc;
              },
              {} as SeasoningStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const decreaseSeasoningStock: SeasoningStockActions['decreaseSeasoningStock'] =
    useCallback(
      ({ id: seasoningId, quantity }) => {
        store.set(seasoningStocksState, (prev) => {
          const updatedQuantity = prev.byId[seasoningId].quantity - quantity;

          const newStocks: SeasoningStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === seasoningId) {
                  acc[cur].quantity = Math.max(updatedQuantity, 0);
                  acc[cur].hasStock = updatedQuantity > 0;
                }
                return acc;
              },
              {} as SeasoningStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const updateSeasoningStockDetail: SeasoningStockActions['updateSeasoningStockDetail'] =
    useCallback(
      ({
        id: seasoningId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(seasoningStocksState, (prev) => {
          const newStocks: SeasoningStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === seasoningId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as SeasoningStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterSeasoningStocks: SeasoningStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const seasoningStocksIds = await store.get(seasoningStocksIdsState);
      store.set(seasoningStocksState, (prev) => {
        const sortedIds = filterSeasoningStock({
          seasoningStocks: prev,
          originalIds: seasoningStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: SeasoningStockActions['updateIsFavorite'] =
    useCallback(
      ({ id: seasoningId, isFavorite }) => {
        store.set(seasoningStocksState, (prev) => {
          const newStocks: SeasoningStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === seasoningId) {
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as SeasoningStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const deleteSeasoningStock = useCallback(
    (seasoningId: string) => {
      store.set(seasoningStocksState, (prev) => {
        const newStocks: SeasoningStocks = {
          ids: prev.ids.filter((id) => id !== seasoningId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === seasoningId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as SeasoningStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseSeasoningStock,
    decreaseSeasoningStock,
    updateSeasoningStockDetail,
    filterSeasoningStocks,
    updateIsFavorite,
    deleteSeasoningStock,
  };
};
