/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetMeatMasterAndUnitAndStocks {\n  meat_master {\n    meat_id\n    display_name\n    meat_name\n    image_uri\n    meat_master_unit_master {\n      unit_id\n      unit_name\n    }\n    meat_master_meat_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetMeatStockByUserIdAndMeatId($userId: String!, $meatId: Int!) {\n  meat_stocks(where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}) {\n    stock_id\n    user_id\n    meat_id\n    quantity\n  }\n}\n\nmutation InsertMeatStock($object: meat_stocks_insert_input!) {\n  insert_meat_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    meat_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateMeatStockQuantity($userId: String!, $meatId: Int!, $quantity: Int!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateMeatStockDetail($userId: String!, $meatId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}": types.GetMeatMasterAndUnitAndStocksDocument,
    "query GetUser {\n  users {\n    id\n    email\n    created_at\n  }\n}": types.GetUserDocument,
    "query GetVegetableMasterAndUnitAndStocks {\n  vegetable_master {\n    vegetable_id\n    display_name\n    vegetable_name\n    image_uri\n    vegetable_master_unit_master {\n      unit_id\n      unit_name\n    }\n    vegetable_master_vegetable_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetVegetableStockByUserIdAndVegetableId($userId: String!, $vegetableId: Int!) {\n  vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n  ) {\n    stock_id\n    user_id\n    vegetable_id\n    quantity\n  }\n}\n\nmutation InsertVegetableStock($object: vegetable_stocks_insert_input!) {\n  insert_vegetable_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    vegetable_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateVegetableStockQuantity($userId: String!, $vegetableId: Int!, $quantity: Int!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateVegetableStockDetail($userId: String!, $vegetableId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}": types.GetVegetableMasterAndUnitAndStocksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMeatMasterAndUnitAndStocks {\n  meat_master {\n    meat_id\n    display_name\n    meat_name\n    image_uri\n    meat_master_unit_master {\n      unit_id\n      unit_name\n    }\n    meat_master_meat_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetMeatStockByUserIdAndMeatId($userId: String!, $meatId: Int!) {\n  meat_stocks(where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}) {\n    stock_id\n    user_id\n    meat_id\n    quantity\n  }\n}\n\nmutation InsertMeatStock($object: meat_stocks_insert_input!) {\n  insert_meat_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    meat_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateMeatStockQuantity($userId: String!, $meatId: Int!, $quantity: Int!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateMeatStockDetail($userId: String!, $meatId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}"): (typeof documents)["query GetMeatMasterAndUnitAndStocks {\n  meat_master {\n    meat_id\n    display_name\n    meat_name\n    image_uri\n    meat_master_unit_master {\n      unit_id\n      unit_name\n    }\n    meat_master_meat_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetMeatStockByUserIdAndMeatId($userId: String!, $meatId: Int!) {\n  meat_stocks(where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}) {\n    stock_id\n    user_id\n    meat_id\n    quantity\n  }\n}\n\nmutation InsertMeatStock($object: meat_stocks_insert_input!) {\n  insert_meat_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    meat_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateMeatStockQuantity($userId: String!, $meatId: Int!, $quantity: Int!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateMeatStockDetail($userId: String!, $meatId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_meat_stocks(\n    where: {user_id: {_eq: $userId}, meat_id: {_eq: $meatId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      meat_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser {\n  users {\n    id\n    email\n    created_at\n  }\n}"): (typeof documents)["query GetUser {\n  users {\n    id\n    email\n    created_at\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetVegetableMasterAndUnitAndStocks {\n  vegetable_master {\n    vegetable_id\n    display_name\n    vegetable_name\n    image_uri\n    vegetable_master_unit_master {\n      unit_id\n      unit_name\n    }\n    vegetable_master_vegetable_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetVegetableStockByUserIdAndVegetableId($userId: String!, $vegetableId: Int!) {\n  vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n  ) {\n    stock_id\n    user_id\n    vegetable_id\n    quantity\n  }\n}\n\nmutation InsertVegetableStock($object: vegetable_stocks_insert_input!) {\n  insert_vegetable_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    vegetable_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateVegetableStockQuantity($userId: String!, $vegetableId: Int!, $quantity: Int!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateVegetableStockDetail($userId: String!, $vegetableId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}"): (typeof documents)["query GetVegetableMasterAndUnitAndStocks {\n  vegetable_master {\n    vegetable_id\n    display_name\n    vegetable_name\n    image_uri\n    vegetable_master_unit_master {\n      unit_id\n      unit_name\n    }\n    vegetable_master_vegetable_stocks {\n      stock_id\n      quantity\n      incremental_unit\n      expiration_date\n      memo\n    }\n  }\n}\n\nquery GetVegetableStockByUserIdAndVegetableId($userId: String!, $vegetableId: Int!) {\n  vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n  ) {\n    stock_id\n    user_id\n    vegetable_id\n    quantity\n  }\n}\n\nmutation InsertVegetableStock($object: vegetable_stocks_insert_input!) {\n  insert_vegetable_stocks_one(object: $object) {\n    quantity\n    stock_id\n    user_id\n    vegetable_id\n    expiration_date\n    memo\n  }\n}\n\nmutation UpdateVegetableStockQuantity($userId: String!, $vegetableId: Int!, $quantity: Int!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n    }\n  }\n}\n\nmutation UpdateVegetableStockDetail($userId: String!, $vegetableId: Int!, $quantity: Int!, $expirationDate: date!, $memo: String!) {\n  update_vegetable_stocks(\n    where: {user_id: {_eq: $userId}, vegetable_id: {_eq: $vegetableId}}\n    _set: {quantity: $quantity, expiration_date: $expirationDate, memo: $memo}\n  ) {\n    returning {\n      stock_id\n      user_id\n      vegetable_id\n      quantity\n      expiration_date\n      memo\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;