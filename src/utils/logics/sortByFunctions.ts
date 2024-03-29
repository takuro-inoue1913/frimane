import dayjs from 'dayjs';

import { FridgeStock, NormalizedArray } from '@src/types';

export const sortNormal = (
  sortedIds: string[],
  fridgeStocks: NormalizedArray<FridgeStock>,
) => {
  // isFavoriteがtrueのものを先頭に持ってくる。
  const sortedIdsWithFavorite = [...sortedIds].filter(
    (id) => fridgeStocks.byId[id].isFavorite,
  );
  const sortedIdsWithoutFavorite = [...sortedIds].filter(
    (id) => !fridgeStocks.byId[id].isFavorite,
  );
  return [...sortedIdsWithFavorite, ...sortedIdsWithoutFavorite];
};

/** 所有食材ソート関数 */
export const sortOwnedIngredients = (
  sortedIds: string[],
  fridgeStocks: NormalizedArray<FridgeStock>,
) => {
  const sortedIdsWithStock = [...sortedIds].filter(
    (id) => fridgeStocks.byId[id].hasStock,
  );
  const sortedIdsWithoutStock = [...sortedIds].filter(
    (id) => !fridgeStocks.byId[id].hasStock,
  );
  return [...sortedIdsWithStock, ...sortedIdsWithoutStock];
};

/** 賞味期限が近いものソート関数 */
export const sortNearingExpirationDate = (
  sortedIds: string[],
  fridgeStocks: NormalizedArray<FridgeStock>,
) => {
  const now = dayjs();
  const sortedIdsWithExpirationDate = [...sortedIds]
    .filter((id) => fridgeStocks.byId[id].hasStock)
    .sort((a, b) => {
      const aExpirationDate = dayjs(fridgeStocks.byId[a].expirationDate);
      const bExpirationDate = dayjs(fridgeStocks.byId[b].expirationDate);
      const aDiff = aExpirationDate.diff(now, 'day');
      const bDiff = bExpirationDate.diff(now, 'day');
      return aDiff - bDiff;
    });
  const sortedIdsWithoutExpirationDate = [...sortedIds]
    .filter((id) => !fridgeStocks.byId[id].hasStock)
    .sort((a, b) => {
      const aExpirationDate = dayjs(fridgeStocks.byId[a].expirationDate);
      const bExpirationDate = dayjs(fridgeStocks.byId[b].expirationDate);
      const aDiff = aExpirationDate.diff(now, 'day');
      const bDiff = bExpirationDate.diff(now, 'day');
      return aDiff - bDiff;
    });
  return [...sortedIdsWithExpirationDate, ...sortedIdsWithoutExpirationDate];
};

/** あいうえお順ソート関数 */
export const sortAiueo = (
  sortedIds: string[],
  fridgeStocks: NormalizedArray<FridgeStock>,
) => {
  const sortedAiueo = [...sortedIds].sort((a, b) =>
    fridgeStocks.byId[a].name.localeCompare(fridgeStocks.byId[b].name),
  );
  return sortedAiueo;
};
