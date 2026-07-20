import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  OtherStocks,
  otherStocksIdsState,
  otherStocksState,
} from '@src/states/fridge/other/state';
import { filterOtherStock } from '@src/states/fridge/other/logics/filterOtherStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type OtherStockActions = {
  increaseOtherStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseOtherStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateOtherStockDetail: ({
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

export const useOtherStockActions = () => {
  const store = useStore();
  const increaseOtherStock: OtherStockActions['increaseOtherStock'] =
    useCallback(
      ({ id: otherId, quantity }) => {
        store.set(otherStocksState, (prev) => {
          const newStocks: OtherStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === otherId) {
                  acc[cur].quantity += quantity;
                  acc[cur].hasStock = true;
                }
                return acc;
              },
              {} as OtherStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const decreaseOtherStock: OtherStockActions['decreaseOtherStock'] =
    useCallback(
      ({ id: otherId, quantity }) => {
        store.set(otherStocksState, (prev) => {
          const updatedQuantity = prev.byId[otherId].quantity - quantity;

          const newStocks: OtherStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === otherId) {
                  acc[cur].quantity = Math.max(updatedQuantity, 0);
                  acc[cur].hasStock = updatedQuantity > 0;
                }
                return acc;
              },
              {} as OtherStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const updateOtherStockDetail: OtherStockActions['updateOtherStockDetail'] =
    useCallback(
      ({
        id: otherId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(otherStocksState, (prev) => {
          const newStocks: OtherStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === otherId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as OtherStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterOtherStocks: OtherStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const otherStocksIds = await store.get(otherStocksIdsState);
      store.set(otherStocksState, (prev) => {
        const sortedIds = filterOtherStock({
          otherStocks: prev,
          originalIds: otherStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: OtherStockActions['updateIsFavorite'] = useCallback(
    ({ id: otherId, isFavorite }) => {
      store.set(otherStocksState, (prev) => {
        const newStocks: OtherStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === otherId) {
                acc[cur].isFavorite = isFavorite;
              }
              return acc;
            },
            {} as OtherStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const deleteOtherStock = useCallback(
    (otherId: string) => {
      store.set(otherStocksState, (prev) => {
        const newStocks: OtherStocks = {
          ids: prev.ids.filter((id) => id !== otherId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === otherId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as OtherStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseOtherStock,
    decreaseOtherStock,
    updateOtherStockDetail,
    filterOtherStocks,
    updateIsFavorite,
    deleteOtherStock,
  };
};
