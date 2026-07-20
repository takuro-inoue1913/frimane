import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  SpiceStocks,
  spiceStocksIdsState,
  spiceStocksState,
} from '@src/states/fridge/spice/state';
import { filterSpiceStock } from '@src/states/fridge/spice/logics/filterSpiceStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type SpiceStockActions = {
  increaseSpiceStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseSpiceStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateSpiceStockDetail: ({
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

export const useSpiceStockActions = () => {
  const store = useStore();
  const increaseSpiceStock: SpiceStockActions['increaseSpiceStock'] =
    useCallback(
      ({ id: spiceId, quantity }) => {
        store.set(spiceStocksState, (prev) => {
          const newStocks: SpiceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === spiceId) {
                  acc[cur].quantity += quantity;
                  acc[cur].hasStock = true;
                }
                return acc;
              },
              {} as SpiceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const decreaseSpiceStock: SpiceStockActions['decreaseSpiceStock'] =
    useCallback(
      ({ id: spiceId, quantity }) => {
        store.set(spiceStocksState, (prev) => {
          const updatedQuantity = prev.byId[spiceId].quantity - quantity;

          const newStocks: SpiceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === spiceId) {
                  acc[cur].quantity = Math.max(updatedQuantity, 0);
                  acc[cur].hasStock = updatedQuantity > 0;
                }
                return acc;
              },
              {} as SpiceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const updateSpiceStockDetail: SpiceStockActions['updateSpiceStockDetail'] =
    useCallback(
      ({
        id: spiceId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(spiceStocksState, (prev) => {
          const newStocks: SpiceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === spiceId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as SpiceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterSpiceStocks: SpiceStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const spiceStocksIds = await store.get(spiceStocksIdsState);
      store.set(spiceStocksState, (prev) => {
        const sortedIds = filterSpiceStock({
          spiceStocks: prev,
          originalIds: spiceStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: SpiceStockActions['updateIsFavorite'] = useCallback(
    ({ id: spiceId, isFavorite }) => {
      store.set(spiceStocksState, (prev) => {
        const newStocks: SpiceStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === spiceId) {
                acc[cur].isFavorite = isFavorite;
              }
              return acc;
            },
            {} as SpiceStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const deleteSpiceStock = useCallback(
    (spiceId: string) => {
      store.set(spiceStocksState, (prev) => {
        const newStocks: SpiceStocks = {
          ids: prev.ids.filter((id) => id !== spiceId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === spiceId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as SpiceStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  return {
    increaseSpiceStock,
    decreaseSpiceStock,
    updateSpiceStockDetail,
    filterSpiceStocks,
    updateIsFavorite,
    deleteSpiceStock,
  };
};
