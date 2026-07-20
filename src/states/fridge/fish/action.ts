import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  FishStocks,
  fishStocksIdsState,
  fishStocksState,
} from '@src/states/fridge/fish/state';
import { filterFishStock } from '@src/states/fridge/fish/logics/filterFishStock';
import { selectFilterOptionsState } from '@src/states/fridge';

type FishStockActions = {
  increaseFishStock: ({
    id,
    quantity,
  }: {
    /** 増やすID */
    id: string;
    /** 増やす数を指定。 */
    quantity: number;
  }) => void;
  decreaseFishStock: ({
    id,
    quantity,
  }: {
    /** 減らすID */
    id: string;
    /** 減らす数を指定。 */
    quantity: number;
  }) => void;
  updateFishStockDetail: ({
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

export const useFishStockActions = () => {
  const store = useStore();
  const increaseFishStock: FishStockActions['increaseFishStock'] = useCallback(
    ({ id: fishId, quantity }) => {
      store.set(fishStocksState, (prev) => {
        const newStocks: FishStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === fishId) {
                acc[cur].quantity += quantity;
                acc[cur].hasStock = true;
              }
              return acc;
            },
            {} as FishStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const decreaseFishStock: FishStockActions['decreaseFishStock'] = useCallback(
    ({ id: fishId, quantity }) => {
      store.set(fishStocksState, (prev) => {
        const updatedQuantity = prev.byId[fishId].quantity - quantity;

        const newStocks: FishStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === fishId) {
                acc[cur].quantity = Math.max(updatedQuantity, 0);
                acc[cur].hasStock = updatedQuantity > 0;
              }
              return acc;
            },
            {} as FishStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const updateFishStockDetail: FishStockActions['updateFishStockDetail'] =
    useCallback(
      ({
        id: fishId,
        quantity,
        incrementalUnit,
        expirationDate,
        memo,
        isFavorite,
      }) => {
        store.set(fishStocksState, (prev) => {
          const newStocks: FishStocks = {
            ids: [...prev.ids],
            byId: prev.ids.reduce(
              (acc, cur) => {
                acc[cur] = { ...prev.byId[cur] };
                if (cur === fishId) {
                  acc[cur].quantity = quantity;
                  acc[cur].incrementalUnit = incrementalUnit;
                  acc[cur].expirationDate = expirationDate;
                  acc[cur].memo = memo;
                  acc[cur].hasStock = quantity > 0;
                  acc[cur].isFavorite = isFavorite;
                }
                return acc;
              },
              {} as FishStocks['byId'],
            ),
          };
          return newStocks;
        });
      },
      [store],
    );

  const filterFishStocks: FishStockActions['filterVegetableStocks'] =
    useCallback(async () => {
      const selectFilterOptions = await store.get(selectFilterOptionsState);
      const fishStocksIds = await store.get(fishStocksIdsState);
      store.set(fishStocksState, (prev) => {
        const sortedIds = filterFishStock({
          fishStocks: prev,
          originalIds: fishStocksIds,
          selectFilterOptions,
        });
        return {
          ids: sortedIds,
          byId: prev.byId,
        };
      });
    }, [store]);

  const updateIsFavorite: FishStockActions['updateIsFavorite'] = useCallback(
    ({ id: fishId, isFavorite }) => {
      store.set(fishStocksState, (prev) => {
        const newStocks: FishStocks = {
          ids: [...prev.ids],
          byId: prev.ids.reduce(
            (acc, cur) => {
              acc[cur] = { ...prev.byId[cur] };
              if (cur === fishId) {
                acc[cur].isFavorite = isFavorite;
              }
              return acc;
            },
            {} as FishStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );

  const deleteFishStock = useCallback(
    (fishId: string) => {
      store.set(fishStocksState, (prev) => {
        const newStocks: FishStocks = {
          ids: prev.ids.filter((id) => id !== fishId),
          byId: prev.ids.reduce(
            (acc, cur) => {
              if (cur === fishId) {
                return acc;
              }
              acc[cur] = { ...prev.byId[cur] };
              return acc;
            },
            {} as FishStocks['byId'],
          ),
        };
        return newStocks;
      });
    },
    [store],
  );
  return {
    increaseFishStock,
    decreaseFishStock,
    updateFishStockDetail,
    filterFishStocks,
    updateIsFavorite,
    deleteFishStock,
  };
};
