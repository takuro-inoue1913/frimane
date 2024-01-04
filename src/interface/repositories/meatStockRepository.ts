import {
  GetMeatMasterAndUnitAndStocksDocument,
  GetMeatStockByUserIdAndMeatIdDocument,
  InsertMeatStockDocument,
  UpdateMeatStockDocument,
} from '@src/interface/__generated__/graphql';
import { buildGraphQLUserClient } from '@src/interface/logics/buildGraphQLClient/buildGraphQLUserClient';

type GetOneMeatStockArgs = {
  idToken: string | null;
  userId: string;
  meatId: number;
};

type InsertMeatStockArgs = {
  idToken: string | null;
  userId: string;
  meatId: number;
  quantity: number;
};

type UpsertMeatStockArgs = {
  idToken: string | null;
  userId: string;
  meatId: number;
  quantity: number;
};

export const meatStockRepository = {
  getOne: async ({ idToken, userId, meatId }: GetOneMeatStockArgs) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(GetMeatStockByUserIdAndMeatIdDocument, {
      userId,
      meatId,
    });

    return data.meat_stocks;
  },
  getAll: async ({ idToken }: { idToken: string | null }) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(GetMeatMasterAndUnitAndStocksDocument);

    return data;
  },
  insert: async ({
    idToken,
    userId,
    meatId,
    quantity,
  }: InsertMeatStockArgs) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(InsertMeatStockDocument, {
      object: {
        user_id: userId,
        meat_id: meatId,
        quantity,
      },
    });
    return data.insert_meat_stocks_one;
  },
  update: async ({
    idToken,
    userId,
    meatId,
    quantity,
  }: UpsertMeatStockArgs) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(UpdateMeatStockDocument, {
      userId,
      meatId,
      quantity,
    });
    return data.update_meat_stocks?.returning[0];
  },
};