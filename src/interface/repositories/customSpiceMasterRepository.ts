import {
  InsertCustomSpiceMasterDocument,
  DeleteCustomSpiceAndStocksDocument,
} from '@src/interface/__generated__/graphql';
import { buildGraphQLUserClient } from '@src/interface/logics/buildGraphQLClient/buildGraphQLUserClient';

type InsertCustomSpiceMasterArgs = {
  idToken: string | null;
  userId: string;
  spiceName: string;
  displayName: string;
  imageUri: string;
  defaultExpirationPeriod: number;
  unitId: number;
};

export const customSpiceMasterRepository = {
  insert: async ({
    idToken,
    userId,
    spiceName,
    displayName,
    imageUri,
    defaultExpirationPeriod,
    unitId,
  }: InsertCustomSpiceMasterArgs) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(InsertCustomSpiceMasterDocument, {
      userId,
      spiceName,
      displayName,
      imageUri,
      defaultExpirationPeriod,
      unitId,
    });
    return data.insert_custom_spice_master_one;
  },
  delete: async ({
    idToken,
    spiceId,
  }: {
    idToken: string | null;
    spiceId: string;
  }) => {
    const client = buildGraphQLUserClient(idToken);

    const data = await client.request(DeleteCustomSpiceAndStocksDocument, {
      spiceId,
    });
    return data.delete_custom_spice_master;
  },
};
