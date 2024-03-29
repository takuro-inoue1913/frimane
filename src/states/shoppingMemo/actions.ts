import {
  shoppingMemosState,
  ShoppingMemo,
} from '@src/states/shoppingMemo/state';
import { useRecoilCallback } from 'recoil';

export const useShoppingMemoActions = () => {
  const addShoppingMemo = useRecoilCallback(
    ({ set }) =>
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
        set(shoppingMemosState, (prev) => ({
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
  );

  const upsertShoppingMemo = useRecoilCallback(
    ({ set }) =>
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
        set(shoppingMemosState, (prev) => {
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
  );

  const updateShoppingMemoIsChecked = useRecoilCallback(
    ({ set }) =>
      ({ id, isChecked }: { id: string; isChecked: boolean }) => {
        set(shoppingMemosState, (prev) => ({
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
  );

  const deleteShoppingMemo = useRecoilCallback(
    ({ set }) =>
      ({ id }: { id: string }) => {
        set(shoppingMemosState, (prev) => {
          const ids = prev.ids.filter((_id) => _id !== id);
          const byId = { ...prev.byId };
          delete byId[id];
          return {
            ids,
            byId,
          };
        });
      },
  );

  const bulkDeleteShoppingMemo = useRecoilCallback(
    ({ set }) =>
      ({ ids }: { ids: string[] }) => {
        set(shoppingMemosState, (prev) => {
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
  );

  return {
    addShoppingMemo,
    upsertShoppingMemo,
    updateShoppingMemoIsChecked,
    deleteShoppingMemo,
    bulkDeleteShoppingMemo,
  };
};
