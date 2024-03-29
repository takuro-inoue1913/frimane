import {
  InsertCustomFishMasterDocument,
  DeleteCustomFishAndStocksDocument,
} from '@src/interface/__generated__/graphql';
import { buildGraphQLUserClient } from '@src/interface/logics/buildGraphQLClient/buildGraphQLUserClient';

type InsertCustomFishMasterArgs = {
  idToken: string | null;
  userId: string;
  fishName: string;
  displayName: string;
  imageUri: string;
  defaultExpirationPeriod: number;
  unitId: number;
};

export const customFishMasterRepository = {
  insert: async ({
    idToken,
    userId,
    fishName,
    displayName,
    imageUri,
    defaultExpirationPeriod,
    unitId,
  }: InsertCustomFishMasterArgs) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(InsertCustomFishMasterDocument, {
      userId,
      fishName,
      displayName,
      imageUri,
      defaultExpirationPeriod,
      unitId,
    });
    return data.insert_custom_fish_master_one;
  },
  delete: async ({
    idToken,
    fishId,
  }: {
    idToken: string | null;
    fishId: string;
  }) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(DeleteCustomFishAndStocksDocument, {
      fishId,
    });
    return data.delete_custom_fish_master;
  },
};
