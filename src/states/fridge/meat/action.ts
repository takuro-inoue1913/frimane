import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  MeatStocks,
  meatStocksIdsState,
  meatStocksState,
} from '@src/states/fridge/meat/state';
import { filterMeatStock } from '@src/states/fridge/meat/logics/filterMeatStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type MeatStockActions = {
  increaseMeatStock: ({
    id,
    quantity,
  }: {
    /** 増やす肉ID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseMeatStock: ({
    id,
    quantity,
  }: {
    /** 減らす肉ID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateMeatStockDetail: ({
    id,
    quantity,
    incrementalUnit,
    expirationDate,
    memo,
    isFavorite,
  }: {
    /** 更新する肉ID */
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
    /** 更新する肉ID */
    id: string;
    /** 更新するお気に入りの状態を指定。 */
    isFavorite: boolean;
  }) => void;
};

export const useMeatStockActions = () => {
  const store = useStore();
  const increaseMeatStock: MeatStockActions['increaseMeatStock'] = useCallback(
    ({ id: meatId, quantity }) => {
      store.set(meatStocksState, (prev) => {
        const newStocks: MeatStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === meatId) {
                acc[cur].quantity += quantity;
                acc[cur].hasStock = true;
              }
              return acc;
            },
            {} as MeatStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const decreaseMeatStock: MeatStockActions['decreaseMeatStock'] = useCallback(
    ({ id: meatId, quantity }) => {
      store.set(meatStocksState, (prev) => {
        const updatedQuantity = prev.byId[meatId].quantity - quantity;

        const newStocks: MeatStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === meatId) {
                acc[cur].quantity = Math.max(updatedQuantity, 0);
                acc[cur].hasStock = updatedQuantity > 0;
              }
              return acc;
            },
            {} as MeatStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const updateMeatStockDetail: MeatStockActions['updateMeatStockDetail'] =
    useCallback(
      ({
        id: meatId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(meatStocksState, (prev) => {
          const newStocks: MeatStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === meatId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as MeatStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterMeatStocks: MeatStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const meatStocksIds = await store.get(meatStocksIdsState);
      store.set(meatStocksState, (prev) => {
        const sortedIds = filterMeatStock({
          meatStocks: prev,
          originalIds: meatStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: MeatStockActions['updateIsFavorite'] = useCallback(
    ({ id: meatId, isFavorite }) => {
      store.set(meatStocksState, (prev) => {
        const newStocks: MeatStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === meatId) {
                acc[cur].isFavorite = isFavorite;
              }
              return acc;
            },
            {} as MeatStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const deleteMeatStock = useCallback(
    (meatId: string) => {
      store.set(meatStocksState, (prev) => {
        const newStocks: MeatStocks = {
          ids: prev.ids.filter((id) => id !== meatId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === meatId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as MeatStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseMeatStock,
    decreaseMeatStock,
    updateMeatStockDetail,
    filterMeatStocks,
    updateIsFavorite,
    deleteMeatStock,
  };
};
