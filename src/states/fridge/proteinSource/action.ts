import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  ProteinSourceStocks,
  proteinSourceStocksIdsState,
  proteinSourceStocksState,
} from '@src/states/fridge/proteinSource/state';
import { filterProteinSourceStock } from '@src/states/fridge/proteinSource/logics/filterProteinSourceStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type ProteinSourceStockActions = {
  increaseProteinSourceStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseProteinSourceStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateProteinSourceStockDetail: ({
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

export const useProteinSourceStockActions = () => {
  const store = useStore();
  const increaseProteinSourceStock: ProteinSourceStockActions['increaseProteinSourceStock'] =
    useCallback(
      ({ id: proteinSourceId, quantity }) => {
        store.set(proteinSourceStocksState, (prev) => {
          const newStocks: ProteinSourceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === proteinSourceId) {
                  acc[cur].quantity += quantity;
                  acc[cur].hasStock = true;
                }
                return acc;
              },
              {} as ProteinSourceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const decreaseProteinSourceStock: ProteinSourceStockActions['decreaseProteinSourceStock'] =
    useCallback(
      ({ id: proteinSourceId, quantity }) => {
        store.set(proteinSourceStocksState, (prev) => {
          const updatedQuantity =
            prev.byId[proteinSourceId].quantity - quantity;

          const newStocks: ProteinSourceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === proteinSourceId) {
                  acc[cur].quantity = Math.max(updatedQuantity, 0);
                  acc[cur].hasStock = updatedQuantity > 0;
                }
                return acc;
              },
              {} as ProteinSourceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const updateProteinSourceStockDetail: ProteinSourceStockActions['updateProteinSourceStockDetail'] =
    useCallback(
      ({
        id: proteinSourceId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(proteinSourceStocksState, (prev) => {
          const newStocks: ProteinSourceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === proteinSourceId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as ProteinSourceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterProteinSourceStocks: ProteinSourceStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const proteinSourceStocksIds = await store.get(
        proteinSourceStocksIdsState,
      );
      store.set(proteinSourceStocksState, (prev) => {
        const sortedIds = filterProteinSourceStock({
          proteinSourceStocks: prev,
          originalIds: proteinSourceStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: ProteinSourceStockActions['updateIsFavorite'] =
    useCallback(
      ({ id: proteinSourceId, isFavorite }) => {
        store.set(proteinSourceStocksState, (prev) => {
          const newStocks: ProteinSourceStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === proteinSourceId) {
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as ProteinSourceStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const deleteProteinSourceStock = useCallback(
    (proteinSourceId: string) => {
      store.set(proteinSourceStocksState, (prev) => {
        const newStocks: ProteinSourceStocks = {
          ids: prev.ids.filter((id) => id !== proteinSourceId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === proteinSourceId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as ProteinSourceStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseProteinSourceStock,
    decreaseProteinSourceStock,
    updateProteinSourceStockDetail,
    filterProteinSourceStocks,
    updateIsFavorite,
    deleteProteinSourceStock,
  };
};
