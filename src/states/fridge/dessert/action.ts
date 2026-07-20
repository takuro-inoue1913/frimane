import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  DessertStocks,
  dessertStocksIdsState,
  dessertStocksState,
} from '@src/states/fridge/dessert/state';
import { filterDessertStock } from '@src/states/fridge/dessert/logics/filterDessertStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type DessertStockActions = {
  increaseDessertStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseDessertStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateDessertStockDetail: ({
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

export const useDessertStockActions = () => {
  const store = useStore();
  const increaseDessertStock: DessertStockActions['increaseDessertStock'] =
    useCallback(
      ({ id: dessertId, quantity }) => {
        store.set(dessertStocksState, (prev) => {
          const newStocks: DessertStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === dessertId) {
                  acc[cur].quantity += quantity;
                  acc[cur].hasStock = true;
                }
                return acc;
              },
              {} as DessertStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const decreaseDessertStock: DessertStockActions['decreaseDessertStock'] =
    useCallback(
      ({ id: dessertId, quantity }) => {
        store.set(dessertStocksState, (prev) => {
          const updatedQuantity = prev.byId[dessertId].quantity - quantity;

          const newStocks: DessertStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === dessertId) {
                  acc[cur].quantity = Math.max(updatedQuantity, 0);
                  acc[cur].hasStock = updatedQuantity > 0;
                }
                return acc;
              },
              {} as DessertStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const updateDessertStockDetail: DessertStockActions['updateDessertStockDetail'] =
    useCallback(
      ({
        id: dessertId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(dessertStocksState, (prev) => {
          const newStocks: DessertStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === dessertId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as DessertStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterDessertStocks: DessertStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const dessertStocksIds = await store.get(dessertStocksIdsState);
      store.set(dessertStocksState, (prev) => {
        const sortedIds = filterDessertStock({
          dessertStocks: prev,
          originalIds: dessertStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: DessertStockActions['updateIsFavorite'] = useCallback(
    ({ id: dessertId, isFavorite }) => {
      store.set(dessertStocksState, (prev) => {
        const newStocks: DessertStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === dessertId) {
                acc[cur].isFavorite = isFavorite;
              }
              return acc;
            },
            {} as DessertStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const deleteDessertStock = useCallback(
    (dessertId: string) => {
      store.set(dessertStocksState, (prev) => {
        const newStocks: DessertStocks = {
          ids: prev.ids.filter((id) => id !== dessertId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === dessertId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as DessertStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseDessertStock,
    decreaseDessertStock,
    updateDessertStockDetail,
    filterDessertStocks,
    updateIsFavorite,
    deleteDessertStock,
  };
};
