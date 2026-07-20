import { useCallback } from 'react';
import { useStore } from 'jotai';
import {
  shoppingMemosState,
  ShoppingMemo,
} from '@src/states/shoppingMemo/state';

export const useShoppingMemoActions = () => {
  const store = useStore();
  const addShoppingMemo = useCallback(
    ({
      id,
      masterId,
      name,
      displayName,
      imageUri,
      fridgeType,
      unitName,
      incrementalUnit,
      quantity,
      isChecked,
    }: ShoppingMemo['byId'][number]) => {
      store.set(shoppingMemosState, (prev) => ({
        ids: [...prev.ids, id],
        byId: {
          ...prev.byId,
          [id]: {
            id,
            masterId,
            name,
            displayName,
            imageUri,
            fridgeType,
            unitName,
            incrementalUnit,
            quantity,
            isChecked,
          },
        },
      }));
    },
    [store],
  );

  const upsertShoppingMemo = useCallback(
    ({
      id,
      prevId,
      masterId,
      name,
      displayName,
      imageUri,
      fridgeType,
      unitName,
      incrementalUnit,
      quantity,
      isChecked,
    }: ShoppingMemo['byId'][number] & {
      prevId: string;
    }) => {
      store.set(shoppingMemosState, (prev) => {
        // prevId と id が同じ場合は更新。そうでない場合は削除して追加。
        // 順番は変えない。
        const ids = prev.ids.map((_id) => (_id === prevId ? id : _id));
        const byId = { ...prev.byId };
        delete byId[prevId];
        return {
          ids,
          byId: {
            ...byId,
            [id]: {
              id,
              masterId,
              name,
              displayName,
              imageUri,
              fridgeType,
              unitName,
              incrementalUnit,
              quantity,
              isChecked,
            },
          },
        };
      });
    },
    [store],
  );

  const updateShoppingMemoIsChecked = useCallback(
    ({ id, isChecked }: { id: string; isChecked: boolean }) => {
      store.set(shoppingMemosState, (prev) => ({
        ...prev,
        byId: {
          ...prev.byId,
          [id]: {
            ...prev.byId[id],
            isChecked,
          },
        },
      }));
    },
    [store],
  );

  const deleteShoppingMemo = useCallback(
    ({ id }: { id: string }) => {
      store.set(shoppingMemosState, (prev) => {
        const ids = prev.ids.filter((_id) => _id !== id);
        const byId = { ...prev.byId };
        delete byId[id];
        return {
          ids,
          byId,
        };
      });
    },
    [store],
  );

  const bulkDeleteShoppingMemo = useCallback(
    ({ ids }: { ids: string[] }) => {
      store.set(shoppingMemosState, (prev) => {
        const idsSet = new Set(ids);
        const _ids = prev.ids.filter((_id) => !idsSet.has(_id));
        const byId = { ...prev.byId };
        ids.forEach((id) => {
          delete byId[id];
        });
        return {
          ids: _ids,
          byId,
        };
      });
    },
    [store],
  );

  return {
    addShoppingMemo,
    upsertShoppingMemo,
    updateShoppingMemoIsChecked,
    deleteShoppingMemo,
    bulkDeleteShoppingMemo,
  };
};
