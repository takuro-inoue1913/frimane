/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: string; output: string; }
  numeric: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** ユーザごとに追加されるデザートマスタ */
export type Custom_Dessert_Master = {
  __typename?: 'custom_dessert_master';
  custom_dessert_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_dessert_master_dessert_stocks?: Maybe<Dessert_Stocks>;
  /** An object relationship */
  custom_dessert_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_dessert_master_users?: Maybe<Users>;
  custom_dessert_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_dessert_master" */
export type Custom_Dessert_Master_Aggregate = {
  __typename?: 'custom_dessert_master_aggregate';
  aggregate?: Maybe<Custom_Dessert_Master_Aggregate_Fields>;
  nodes: Array<Custom_Dessert_Master>;
};

/** aggregate fields of "custom_dessert_master" */
export type Custom_Dessert_Master_Aggregate_Fields = {
  __typename?: 'custom_dessert_master_aggregate_fields';
  avg?: Maybe<Custom_Dessert_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Dessert_Master_Max_Fields>;
  min?: Maybe<Custom_Dessert_Master_Min_Fields>;
  stddev?: Maybe<Custom_Dessert_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Dessert_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Dessert_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Dessert_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Dessert_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Dessert_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Dessert_Master_Variance_Fields>;
};


/** aggregate fields of "custom_dessert_master" */
export type Custom_Dessert_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Dessert_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Dessert_Master_Avg_Fields = {
  __typename?: 'custom_dessert_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_dessert_master". All fields are combined with a logical 'AND'. */
export type Custom_Dessert_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Dessert_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Dessert_Master_Bool_Exp>>;
  custom_dessert_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  custom_dessert_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_dessert_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_dessert_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_dessert_master" */
export enum Custom_Dessert_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomDessertMasterImageUriKey = 'custom_dessert_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_dessert_id" */
  CustomDessertMasterPkey = 'custom_dessert_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_dessert_master" */
export type Custom_Dessert_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_dessert_master" */
export type Custom_Dessert_Master_Insert_Input = {
  custom_dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Obj_Rel_Insert_Input>;
  custom_dessert_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_dessert_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_dessert_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Dessert_Master_Max_Fields = {
  __typename?: 'custom_dessert_master_max_fields';
  custom_dessert_id?: Maybe<Scalars['uuid']['output']>;
  custom_dessert_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Dessert_Master_Min_Fields = {
  __typename?: 'custom_dessert_master_min_fields';
  custom_dessert_id?: Maybe<Scalars['uuid']['output']>;
  custom_dessert_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_dessert_master" */
export type Custom_Dessert_Master_Mutation_Response = {
  __typename?: 'custom_dessert_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Dessert_Master>;
};

/** input type for inserting object relation for remote table "custom_dessert_master" */
export type Custom_Dessert_Master_Obj_Rel_Insert_Input = {
  data: Custom_Dessert_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Dessert_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_dessert_master" */
export type Custom_Dessert_Master_On_Conflict = {
  constraint: Custom_Dessert_Master_Constraint;
  update_columns?: Array<Custom_Dessert_Master_Update_Column>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_dessert_master". */
export type Custom_Dessert_Master_Order_By = {
  custom_dessert_id?: InputMaybe<Order_By>;
  custom_dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Order_By>;
  custom_dessert_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_dessert_master_users?: InputMaybe<Users_Order_By>;
  custom_dessert_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_dessert_master */
export type Custom_Dessert_Master_Pk_Columns_Input = {
  custom_dessert_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_dessert_master" */
export enum Custom_Dessert_Master_Select_Column {
  /** column name */
  CustomDessertId = 'custom_dessert_id',
  /** column name */
  CustomDessertName = 'custom_dessert_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_dessert_master" */
export type Custom_Dessert_Master_Set_Input = {
  custom_dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_dessert_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Dessert_Master_Stddev_Fields = {
  __typename?: 'custom_dessert_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Dessert_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_dessert_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Dessert_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_dessert_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_dessert_master" */
export type Custom_Dessert_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Dessert_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Dessert_Master_Stream_Cursor_Value_Input = {
  custom_dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_dessert_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Dessert_Master_Sum_Fields = {
  __typename?: 'custom_dessert_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_dessert_master" */
export enum Custom_Dessert_Master_Update_Column {
  /** column name */
  CustomDessertId = 'custom_dessert_id',
  /** column name */
  CustomDessertName = 'custom_dessert_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Dessert_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Dessert_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Dessert_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Dessert_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Dessert_Master_Var_Pop_Fields = {
  __typename?: 'custom_dessert_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Dessert_Master_Var_Samp_Fields = {
  __typename?: 'custom_dessert_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Dessert_Master_Variance_Fields = {
  __typename?: 'custom_dessert_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される魚マスタ */
export type Custom_Fish_Master = {
  __typename?: 'custom_fish_master';
  custom_fish_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_fish_master_fish_stocks?: Maybe<Fish_Stocks>;
  /** An object relationship */
  custom_fish_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_fish_master_users?: Maybe<Users>;
  custom_fish_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_fish_master" */
export type Custom_Fish_Master_Aggregate = {
  __typename?: 'custom_fish_master_aggregate';
  aggregate?: Maybe<Custom_Fish_Master_Aggregate_Fields>;
  nodes: Array<Custom_Fish_Master>;
};

/** aggregate fields of "custom_fish_master" */
export type Custom_Fish_Master_Aggregate_Fields = {
  __typename?: 'custom_fish_master_aggregate_fields';
  avg?: Maybe<Custom_Fish_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Fish_Master_Max_Fields>;
  min?: Maybe<Custom_Fish_Master_Min_Fields>;
  stddev?: Maybe<Custom_Fish_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Fish_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Fish_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Fish_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Fish_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Fish_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Fish_Master_Variance_Fields>;
};


/** aggregate fields of "custom_fish_master" */
export type Custom_Fish_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Fish_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Fish_Master_Avg_Fields = {
  __typename?: 'custom_fish_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_fish_master". All fields are combined with a logical 'AND'. */
export type Custom_Fish_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Fish_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Fish_Master_Bool_Exp>>;
  custom_fish_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Bool_Exp>;
  custom_fish_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_fish_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_fish_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_fish_master" */
export enum Custom_Fish_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomFishMasterImageUriKey = 'custom_fish_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_fish_id" */
  CustomFishMasterPkey = 'custom_fish_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_fish_master" */
export type Custom_Fish_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_fish_master" */
export type Custom_Fish_Master_Insert_Input = {
  custom_fish_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Obj_Rel_Insert_Input>;
  custom_fish_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_fish_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_fish_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Fish_Master_Max_Fields = {
  __typename?: 'custom_fish_master_max_fields';
  custom_fish_id?: Maybe<Scalars['uuid']['output']>;
  custom_fish_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Fish_Master_Min_Fields = {
  __typename?: 'custom_fish_master_min_fields';
  custom_fish_id?: Maybe<Scalars['uuid']['output']>;
  custom_fish_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_fish_master" */
export type Custom_Fish_Master_Mutation_Response = {
  __typename?: 'custom_fish_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Fish_Master>;
};

/** input type for inserting object relation for remote table "custom_fish_master" */
export type Custom_Fish_Master_Obj_Rel_Insert_Input = {
  data: Custom_Fish_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Fish_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_fish_master" */
export type Custom_Fish_Master_On_Conflict = {
  constraint: Custom_Fish_Master_Constraint;
  update_columns?: Array<Custom_Fish_Master_Update_Column>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_fish_master". */
export type Custom_Fish_Master_Order_By = {
  custom_fish_id?: InputMaybe<Order_By>;
  custom_fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Order_By>;
  custom_fish_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_fish_master_users?: InputMaybe<Users_Order_By>;
  custom_fish_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_fish_master */
export type Custom_Fish_Master_Pk_Columns_Input = {
  custom_fish_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_fish_master" */
export enum Custom_Fish_Master_Select_Column {
  /** column name */
  CustomFishId = 'custom_fish_id',
  /** column name */
  CustomFishName = 'custom_fish_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_fish_master" */
export type Custom_Fish_Master_Set_Input = {
  custom_fish_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_fish_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Fish_Master_Stddev_Fields = {
  __typename?: 'custom_fish_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Fish_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_fish_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Fish_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_fish_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_fish_master" */
export type Custom_Fish_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Fish_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Fish_Master_Stream_Cursor_Value_Input = {
  custom_fish_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_fish_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Fish_Master_Sum_Fields = {
  __typename?: 'custom_fish_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_fish_master" */
export enum Custom_Fish_Master_Update_Column {
  /** column name */
  CustomFishId = 'custom_fish_id',
  /** column name */
  CustomFishName = 'custom_fish_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Fish_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Fish_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Fish_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Fish_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Fish_Master_Var_Pop_Fields = {
  __typename?: 'custom_fish_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Fish_Master_Var_Samp_Fields = {
  __typename?: 'custom_fish_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Fish_Master_Variance_Fields = {
  __typename?: 'custom_fish_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される肉類マスタ */
export type Custom_Meat_Master = {
  __typename?: 'custom_meat_master';
  custom_meat_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_meat_master_meat_stocks?: Maybe<Meat_Stocks>;
  /** An object relationship */
  custom_meat_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_meat_master_users?: Maybe<Users>;
  custom_meat_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_meat_master" */
export type Custom_Meat_Master_Aggregate = {
  __typename?: 'custom_meat_master_aggregate';
  aggregate?: Maybe<Custom_Meat_Master_Aggregate_Fields>;
  nodes: Array<Custom_Meat_Master>;
};

export type Custom_Meat_Master_Aggregate_Bool_Exp = {
  count?: InputMaybe<Custom_Meat_Master_Aggregate_Bool_Exp_Count>;
};

export type Custom_Meat_Master_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "custom_meat_master" */
export type Custom_Meat_Master_Aggregate_Fields = {
  __typename?: 'custom_meat_master_aggregate_fields';
  avg?: Maybe<Custom_Meat_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Meat_Master_Max_Fields>;
  min?: Maybe<Custom_Meat_Master_Min_Fields>;
  stddev?: Maybe<Custom_Meat_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Meat_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Meat_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Meat_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Meat_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Meat_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Meat_Master_Variance_Fields>;
};


/** aggregate fields of "custom_meat_master" */
export type Custom_Meat_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "custom_meat_master" */
export type Custom_Meat_Master_Aggregate_Order_By = {
  avg?: InputMaybe<Custom_Meat_Master_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Custom_Meat_Master_Max_Order_By>;
  min?: InputMaybe<Custom_Meat_Master_Min_Order_By>;
  stddev?: InputMaybe<Custom_Meat_Master_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Custom_Meat_Master_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Custom_Meat_Master_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Custom_Meat_Master_Sum_Order_By>;
  var_pop?: InputMaybe<Custom_Meat_Master_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Custom_Meat_Master_Var_Samp_Order_By>;
  variance?: InputMaybe<Custom_Meat_Master_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "custom_meat_master" */
export type Custom_Meat_Master_Arr_Rel_Insert_Input = {
  data: Array<Custom_Meat_Master_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Meat_Master_On_Conflict>;
};

/** aggregate avg on columns */
export type Custom_Meat_Master_Avg_Fields = {
  __typename?: 'custom_meat_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Avg_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "custom_meat_master". All fields are combined with a logical 'AND'. */
export type Custom_Meat_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Meat_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Meat_Master_Bool_Exp>>;
  custom_meat_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Bool_Exp>;
  custom_meat_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_meat_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_meat_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_meat_master" */
export enum Custom_Meat_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomMeatMasterImageUriKey = 'custom_meat_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_meat_id" */
  CustomMeatMasterPkey = 'custom_meat_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_meat_master" */
export type Custom_Meat_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_meat_master" */
export type Custom_Meat_Master_Insert_Input = {
  custom_meat_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Obj_Rel_Insert_Input>;
  custom_meat_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_meat_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_meat_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Meat_Master_Max_Fields = {
  __typename?: 'custom_meat_master_max_fields';
  custom_meat_id?: Maybe<Scalars['uuid']['output']>;
  custom_meat_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Max_Order_By = {
  custom_meat_id?: InputMaybe<Order_By>;
  custom_meat_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Custom_Meat_Master_Min_Fields = {
  __typename?: 'custom_meat_master_min_fields';
  custom_meat_id?: Maybe<Scalars['uuid']['output']>;
  custom_meat_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Min_Order_By = {
  custom_meat_id?: InputMaybe<Order_By>;
  custom_meat_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "custom_meat_master" */
export type Custom_Meat_Master_Mutation_Response = {
  __typename?: 'custom_meat_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Meat_Master>;
};

/** input type for inserting object relation for remote table "custom_meat_master" */
export type Custom_Meat_Master_Obj_Rel_Insert_Input = {
  data: Custom_Meat_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Meat_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_meat_master" */
export type Custom_Meat_Master_On_Conflict = {
  constraint: Custom_Meat_Master_Constraint;
  update_columns?: Array<Custom_Meat_Master_Update_Column>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_meat_master". */
export type Custom_Meat_Master_Order_By = {
  custom_meat_id?: InputMaybe<Order_By>;
  custom_meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Order_By>;
  custom_meat_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_meat_master_users?: InputMaybe<Users_Order_By>;
  custom_meat_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_meat_master */
export type Custom_Meat_Master_Pk_Columns_Input = {
  custom_meat_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_meat_master" */
export enum Custom_Meat_Master_Select_Column {
  /** column name */
  CustomMeatId = 'custom_meat_id',
  /** column name */
  CustomMeatName = 'custom_meat_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_meat_master" */
export type Custom_Meat_Master_Set_Input = {
  custom_meat_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_meat_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Meat_Master_Stddev_Fields = {
  __typename?: 'custom_meat_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Stddev_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Custom_Meat_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_meat_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Stddev_Pop_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Custom_Meat_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_meat_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Stddev_Samp_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "custom_meat_master" */
export type Custom_Meat_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Meat_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Meat_Master_Stream_Cursor_Value_Input = {
  custom_meat_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_meat_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Meat_Master_Sum_Fields = {
  __typename?: 'custom_meat_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Sum_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** update columns of table "custom_meat_master" */
export enum Custom_Meat_Master_Update_Column {
  /** column name */
  CustomMeatId = 'custom_meat_id',
  /** column name */
  CustomMeatName = 'custom_meat_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Meat_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Meat_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Meat_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Meat_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Meat_Master_Var_Pop_Fields = {
  __typename?: 'custom_meat_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Var_Pop_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Custom_Meat_Master_Var_Samp_Fields = {
  __typename?: 'custom_meat_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Var_Samp_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Custom_Meat_Master_Variance_Fields = {
  __typename?: 'custom_meat_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "custom_meat_master" */
export type Custom_Meat_Master_Variance_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** ユーザごとに追加されるその他マスタ */
export type Custom_Other_Master = {
  __typename?: 'custom_other_master';
  custom_other_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_other_master_other_stocks?: Maybe<Other_Stocks>;
  /** An object relationship */
  custom_other_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_other_master_users?: Maybe<Users>;
  custom_other_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_other_master" */
export type Custom_Other_Master_Aggregate = {
  __typename?: 'custom_other_master_aggregate';
  aggregate?: Maybe<Custom_Other_Master_Aggregate_Fields>;
  nodes: Array<Custom_Other_Master>;
};

/** aggregate fields of "custom_other_master" */
export type Custom_Other_Master_Aggregate_Fields = {
  __typename?: 'custom_other_master_aggregate_fields';
  avg?: Maybe<Custom_Other_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Other_Master_Max_Fields>;
  min?: Maybe<Custom_Other_Master_Min_Fields>;
  stddev?: Maybe<Custom_Other_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Other_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Other_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Other_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Other_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Other_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Other_Master_Variance_Fields>;
};


/** aggregate fields of "custom_other_master" */
export type Custom_Other_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Other_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Other_Master_Avg_Fields = {
  __typename?: 'custom_other_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_other_master". All fields are combined with a logical 'AND'. */
export type Custom_Other_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Other_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Other_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Other_Master_Bool_Exp>>;
  custom_other_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_other_master_other_stocks?: InputMaybe<Other_Stocks_Bool_Exp>;
  custom_other_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_other_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_other_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_other_master" */
export enum Custom_Other_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomOtherMasterImageUriKey = 'custom_other_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_other_id" */
  CustomOtherMasterPkey = 'custom_other_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_other_master" */
export type Custom_Other_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_other_master" */
export type Custom_Other_Master_Insert_Input = {
  custom_other_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_other_master_other_stocks?: InputMaybe<Other_Stocks_Obj_Rel_Insert_Input>;
  custom_other_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_other_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_other_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Other_Master_Max_Fields = {
  __typename?: 'custom_other_master_max_fields';
  custom_other_id?: Maybe<Scalars['uuid']['output']>;
  custom_other_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Other_Master_Min_Fields = {
  __typename?: 'custom_other_master_min_fields';
  custom_other_id?: Maybe<Scalars['uuid']['output']>;
  custom_other_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_other_master" */
export type Custom_Other_Master_Mutation_Response = {
  __typename?: 'custom_other_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Other_Master>;
};

/** input type for inserting object relation for remote table "custom_other_master" */
export type Custom_Other_Master_Obj_Rel_Insert_Input = {
  data: Custom_Other_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Other_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_other_master" */
export type Custom_Other_Master_On_Conflict = {
  constraint: Custom_Other_Master_Constraint;
  update_columns?: Array<Custom_Other_Master_Update_Column>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_other_master". */
export type Custom_Other_Master_Order_By = {
  custom_other_id?: InputMaybe<Order_By>;
  custom_other_master_other_stocks?: InputMaybe<Other_Stocks_Order_By>;
  custom_other_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_other_master_users?: InputMaybe<Users_Order_By>;
  custom_other_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_other_master */
export type Custom_Other_Master_Pk_Columns_Input = {
  custom_other_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_other_master" */
export enum Custom_Other_Master_Select_Column {
  /** column name */
  CustomOtherId = 'custom_other_id',
  /** column name */
  CustomOtherName = 'custom_other_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_other_master" */
export type Custom_Other_Master_Set_Input = {
  custom_other_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_other_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Other_Master_Stddev_Fields = {
  __typename?: 'custom_other_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Other_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_other_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Other_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_other_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_other_master" */
export type Custom_Other_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Other_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Other_Master_Stream_Cursor_Value_Input = {
  custom_other_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_other_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Other_Master_Sum_Fields = {
  __typename?: 'custom_other_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_other_master" */
export enum Custom_Other_Master_Update_Column {
  /** column name */
  CustomOtherId = 'custom_other_id',
  /** column name */
  CustomOtherName = 'custom_other_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Other_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Other_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Other_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Other_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Other_Master_Var_Pop_Fields = {
  __typename?: 'custom_other_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Other_Master_Var_Samp_Fields = {
  __typename?: 'custom_other_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Other_Master_Variance_Fields = {
  __typename?: 'custom_other_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される卵・乳・豆マスタデータ */
export type Custom_Protein_Source_Master = {
  __typename?: 'custom_protein_source_master';
  custom_protein_source_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_protein_source_master_protein_source_stocks?: Maybe<Protein_Source_Stocks>;
  /** An object relationship */
  custom_protein_source_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_protein_source_master_users?: Maybe<Users>;
  custom_protein_source_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Aggregate = {
  __typename?: 'custom_protein_source_master_aggregate';
  aggregate?: Maybe<Custom_Protein_Source_Master_Aggregate_Fields>;
  nodes: Array<Custom_Protein_Source_Master>;
};

/** aggregate fields of "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Aggregate_Fields = {
  __typename?: 'custom_protein_source_master_aggregate_fields';
  avg?: Maybe<Custom_Protein_Source_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Protein_Source_Master_Max_Fields>;
  min?: Maybe<Custom_Protein_Source_Master_Min_Fields>;
  stddev?: Maybe<Custom_Protein_Source_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Protein_Source_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Protein_Source_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Protein_Source_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Protein_Source_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Protein_Source_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Protein_Source_Master_Variance_Fields>;
};


/** aggregate fields of "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Protein_Source_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Protein_Source_Master_Avg_Fields = {
  __typename?: 'custom_protein_source_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_protein_source_master". All fields are combined with a logical 'AND'. */
export type Custom_Protein_Source_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Protein_Source_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Protein_Source_Master_Bool_Exp>>;
  custom_protein_source_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  custom_protein_source_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_protein_source_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_protein_source_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_protein_source_master" */
export enum Custom_Protein_Source_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomProteinSourceMasterImageUriKey = 'custom_protein_source_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_protein_source_id" */
  CustomProteinSourceMasterPkey = 'custom_protein_source_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Insert_Input = {
  custom_protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Obj_Rel_Insert_Input>;
  custom_protein_source_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_protein_source_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_protein_source_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Protein_Source_Master_Max_Fields = {
  __typename?: 'custom_protein_source_master_max_fields';
  custom_protein_source_id?: Maybe<Scalars['uuid']['output']>;
  custom_protein_source_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Protein_Source_Master_Min_Fields = {
  __typename?: 'custom_protein_source_master_min_fields';
  custom_protein_source_id?: Maybe<Scalars['uuid']['output']>;
  custom_protein_source_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Mutation_Response = {
  __typename?: 'custom_protein_source_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Protein_Source_Master>;
};

/** input type for inserting object relation for remote table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Obj_Rel_Insert_Input = {
  data: Custom_Protein_Source_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Protein_Source_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_On_Conflict = {
  constraint: Custom_Protein_Source_Master_Constraint;
  update_columns?: Array<Custom_Protein_Source_Master_Update_Column>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_protein_source_master". */
export type Custom_Protein_Source_Master_Order_By = {
  custom_protein_source_id?: InputMaybe<Order_By>;
  custom_protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Order_By>;
  custom_protein_source_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_protein_source_master_users?: InputMaybe<Users_Order_By>;
  custom_protein_source_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_protein_source_master */
export type Custom_Protein_Source_Master_Pk_Columns_Input = {
  custom_protein_source_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_protein_source_master" */
export enum Custom_Protein_Source_Master_Select_Column {
  /** column name */
  CustomProteinSourceId = 'custom_protein_source_id',
  /** column name */
  CustomProteinSourceName = 'custom_protein_source_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Set_Input = {
  custom_protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_protein_source_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Protein_Source_Master_Stddev_Fields = {
  __typename?: 'custom_protein_source_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Protein_Source_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_protein_source_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Protein_Source_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_protein_source_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_protein_source_master" */
export type Custom_Protein_Source_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Protein_Source_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Protein_Source_Master_Stream_Cursor_Value_Input = {
  custom_protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_protein_source_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Protein_Source_Master_Sum_Fields = {
  __typename?: 'custom_protein_source_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_protein_source_master" */
export enum Custom_Protein_Source_Master_Update_Column {
  /** column name */
  CustomProteinSourceId = 'custom_protein_source_id',
  /** column name */
  CustomProteinSourceName = 'custom_protein_source_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Protein_Source_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Protein_Source_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Protein_Source_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Protein_Source_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Protein_Source_Master_Var_Pop_Fields = {
  __typename?: 'custom_protein_source_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Protein_Source_Master_Var_Samp_Fields = {
  __typename?: 'custom_protein_source_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Protein_Source_Master_Variance_Fields = {
  __typename?: 'custom_protein_source_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される調味料マスタ */
export type Custom_Seasoning_Master = {
  __typename?: 'custom_seasoning_master';
  custom_seasoning_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_seasoning_master_seasoning_stocks?: Maybe<Seasoning_Stocks>;
  /** An object relationship */
  custom_seasoning_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_seasoning_master_users?: Maybe<Users>;
  custom_seasoning_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_seasoning_master" */
export type Custom_Seasoning_Master_Aggregate = {
  __typename?: 'custom_seasoning_master_aggregate';
  aggregate?: Maybe<Custom_Seasoning_Master_Aggregate_Fields>;
  nodes: Array<Custom_Seasoning_Master>;
};

/** aggregate fields of "custom_seasoning_master" */
export type Custom_Seasoning_Master_Aggregate_Fields = {
  __typename?: 'custom_seasoning_master_aggregate_fields';
  avg?: Maybe<Custom_Seasoning_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Seasoning_Master_Max_Fields>;
  min?: Maybe<Custom_Seasoning_Master_Min_Fields>;
  stddev?: Maybe<Custom_Seasoning_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Seasoning_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Seasoning_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Seasoning_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Seasoning_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Seasoning_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Seasoning_Master_Variance_Fields>;
};


/** aggregate fields of "custom_seasoning_master" */
export type Custom_Seasoning_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Seasoning_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Seasoning_Master_Avg_Fields = {
  __typename?: 'custom_seasoning_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_seasoning_master". All fields are combined with a logical 'AND'. */
export type Custom_Seasoning_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Seasoning_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Seasoning_Master_Bool_Exp>>;
  custom_seasoning_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  custom_seasoning_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_seasoning_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_seasoning_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_seasoning_master" */
export enum Custom_Seasoning_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomSeasoningMasterImageUriKey = 'custom_seasoning_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_seasoning_id" */
  CustomSeasoningMasterPkey = 'custom_seasoning_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Insert_Input = {
  custom_seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Obj_Rel_Insert_Input>;
  custom_seasoning_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_seasoning_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_seasoning_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Seasoning_Master_Max_Fields = {
  __typename?: 'custom_seasoning_master_max_fields';
  custom_seasoning_id?: Maybe<Scalars['uuid']['output']>;
  custom_seasoning_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Seasoning_Master_Min_Fields = {
  __typename?: 'custom_seasoning_master_min_fields';
  custom_seasoning_id?: Maybe<Scalars['uuid']['output']>;
  custom_seasoning_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Mutation_Response = {
  __typename?: 'custom_seasoning_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Seasoning_Master>;
};

/** input type for inserting object relation for remote table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Obj_Rel_Insert_Input = {
  data: Custom_Seasoning_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Seasoning_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_seasoning_master" */
export type Custom_Seasoning_Master_On_Conflict = {
  constraint: Custom_Seasoning_Master_Constraint;
  update_columns?: Array<Custom_Seasoning_Master_Update_Column>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_seasoning_master". */
export type Custom_Seasoning_Master_Order_By = {
  custom_seasoning_id?: InputMaybe<Order_By>;
  custom_seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Order_By>;
  custom_seasoning_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_seasoning_master_users?: InputMaybe<Users_Order_By>;
  custom_seasoning_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_seasoning_master */
export type Custom_Seasoning_Master_Pk_Columns_Input = {
  custom_seasoning_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_seasoning_master" */
export enum Custom_Seasoning_Master_Select_Column {
  /** column name */
  CustomSeasoningId = 'custom_seasoning_id',
  /** column name */
  CustomSeasoningName = 'custom_seasoning_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Set_Input = {
  custom_seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_seasoning_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Seasoning_Master_Stddev_Fields = {
  __typename?: 'custom_seasoning_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Seasoning_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_seasoning_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Seasoning_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_seasoning_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_seasoning_master" */
export type Custom_Seasoning_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Seasoning_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Seasoning_Master_Stream_Cursor_Value_Input = {
  custom_seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_seasoning_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Seasoning_Master_Sum_Fields = {
  __typename?: 'custom_seasoning_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_seasoning_master" */
export enum Custom_Seasoning_Master_Update_Column {
  /** column name */
  CustomSeasoningId = 'custom_seasoning_id',
  /** column name */
  CustomSeasoningName = 'custom_seasoning_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Seasoning_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Seasoning_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Seasoning_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Seasoning_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Seasoning_Master_Var_Pop_Fields = {
  __typename?: 'custom_seasoning_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Seasoning_Master_Var_Samp_Fields = {
  __typename?: 'custom_seasoning_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Seasoning_Master_Variance_Fields = {
  __typename?: 'custom_seasoning_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加されるスパイスマスタ */
export type Custom_Spice_Master = {
  __typename?: 'custom_spice_master';
  custom_spice_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_spice_master_spice_stocks?: Maybe<Spice_Stocks>;
  /** An object relationship */
  custom_spice_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_spice_master_users?: Maybe<Users>;
  custom_spice_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_spice_master" */
export type Custom_Spice_Master_Aggregate = {
  __typename?: 'custom_spice_master_aggregate';
  aggregate?: Maybe<Custom_Spice_Master_Aggregate_Fields>;
  nodes: Array<Custom_Spice_Master>;
};

/** aggregate fields of "custom_spice_master" */
export type Custom_Spice_Master_Aggregate_Fields = {
  __typename?: 'custom_spice_master_aggregate_fields';
  avg?: Maybe<Custom_Spice_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Spice_Master_Max_Fields>;
  min?: Maybe<Custom_Spice_Master_Min_Fields>;
  stddev?: Maybe<Custom_Spice_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Spice_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Spice_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Spice_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Spice_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Spice_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Spice_Master_Variance_Fields>;
};


/** aggregate fields of "custom_spice_master" */
export type Custom_Spice_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Spice_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Spice_Master_Avg_Fields = {
  __typename?: 'custom_spice_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_spice_master". All fields are combined with a logical 'AND'. */
export type Custom_Spice_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Spice_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Spice_Master_Bool_Exp>>;
  custom_spice_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Bool_Exp>;
  custom_spice_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_spice_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_spice_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_spice_master" */
export enum Custom_Spice_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomSpiceMasterImageUriKey = 'custom_spice_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_spice_id" */
  CustomSpiceMasterPkey = 'custom_spice_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_spice_master" */
export type Custom_Spice_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_spice_master" */
export type Custom_Spice_Master_Insert_Input = {
  custom_spice_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Obj_Rel_Insert_Input>;
  custom_spice_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_spice_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_spice_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Spice_Master_Max_Fields = {
  __typename?: 'custom_spice_master_max_fields';
  custom_spice_id?: Maybe<Scalars['uuid']['output']>;
  custom_spice_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Spice_Master_Min_Fields = {
  __typename?: 'custom_spice_master_min_fields';
  custom_spice_id?: Maybe<Scalars['uuid']['output']>;
  custom_spice_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_spice_master" */
export type Custom_Spice_Master_Mutation_Response = {
  __typename?: 'custom_spice_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Spice_Master>;
};

/** input type for inserting object relation for remote table "custom_spice_master" */
export type Custom_Spice_Master_Obj_Rel_Insert_Input = {
  data: Custom_Spice_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Spice_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_spice_master" */
export type Custom_Spice_Master_On_Conflict = {
  constraint: Custom_Spice_Master_Constraint;
  update_columns?: Array<Custom_Spice_Master_Update_Column>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_spice_master". */
export type Custom_Spice_Master_Order_By = {
  custom_spice_id?: InputMaybe<Order_By>;
  custom_spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Order_By>;
  custom_spice_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_spice_master_users?: InputMaybe<Users_Order_By>;
  custom_spice_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_spice_master */
export type Custom_Spice_Master_Pk_Columns_Input = {
  custom_spice_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_spice_master" */
export enum Custom_Spice_Master_Select_Column {
  /** column name */
  CustomSpiceId = 'custom_spice_id',
  /** column name */
  CustomSpiceName = 'custom_spice_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_spice_master" */
export type Custom_Spice_Master_Set_Input = {
  custom_spice_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_spice_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Spice_Master_Stddev_Fields = {
  __typename?: 'custom_spice_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Spice_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_spice_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Spice_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_spice_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_spice_master" */
export type Custom_Spice_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Spice_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Spice_Master_Stream_Cursor_Value_Input = {
  custom_spice_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_spice_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Spice_Master_Sum_Fields = {
  __typename?: 'custom_spice_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_spice_master" */
export enum Custom_Spice_Master_Update_Column {
  /** column name */
  CustomSpiceId = 'custom_spice_id',
  /** column name */
  CustomSpiceName = 'custom_spice_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Spice_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Spice_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Spice_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Spice_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Spice_Master_Var_Pop_Fields = {
  __typename?: 'custom_spice_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Spice_Master_Var_Samp_Fields = {
  __typename?: 'custom_spice_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Spice_Master_Variance_Fields = {
  __typename?: 'custom_spice_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される主食・粉マスタ */
export type Custom_Staple_Food_Master = {
  __typename?: 'custom_staple_food_master';
  custom_staple_food_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_staple_food_master_staple_food_stocks?: Maybe<Staple_Food_Stocks>;
  /** An object relationship */
  custom_staple_food_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_staple_food_master_users?: Maybe<Users>;
  custom_staple_food_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Aggregate = {
  __typename?: 'custom_staple_food_master_aggregate';
  aggregate?: Maybe<Custom_Staple_Food_Master_Aggregate_Fields>;
  nodes: Array<Custom_Staple_Food_Master>;
};

/** aggregate fields of "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Aggregate_Fields = {
  __typename?: 'custom_staple_food_master_aggregate_fields';
  avg?: Maybe<Custom_Staple_Food_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Staple_Food_Master_Max_Fields>;
  min?: Maybe<Custom_Staple_Food_Master_Min_Fields>;
  stddev?: Maybe<Custom_Staple_Food_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Staple_Food_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Staple_Food_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Staple_Food_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Staple_Food_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Staple_Food_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Staple_Food_Master_Variance_Fields>;
};


/** aggregate fields of "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Staple_Food_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Custom_Staple_Food_Master_Avg_Fields = {
  __typename?: 'custom_staple_food_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "custom_staple_food_master". All fields are combined with a logical 'AND'. */
export type Custom_Staple_Food_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Staple_Food_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Staple_Food_Master_Bool_Exp>>;
  custom_staple_food_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  custom_staple_food_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_staple_food_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_staple_food_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_staple_food_master" */
export enum Custom_Staple_Food_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomStapleFoodMasterImageUriKey = 'custom_staple_food_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_staple_food_id" */
  CustomStapleFoodMasterPkey = 'custom_staple_food_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Insert_Input = {
  custom_staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Obj_Rel_Insert_Input>;
  custom_staple_food_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_staple_food_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_staple_food_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Staple_Food_Master_Max_Fields = {
  __typename?: 'custom_staple_food_master_max_fields';
  custom_staple_food_id?: Maybe<Scalars['uuid']['output']>;
  custom_staple_food_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Custom_Staple_Food_Master_Min_Fields = {
  __typename?: 'custom_staple_food_master_min_fields';
  custom_staple_food_id?: Maybe<Scalars['uuid']['output']>;
  custom_staple_food_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Mutation_Response = {
  __typename?: 'custom_staple_food_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Staple_Food_Master>;
};

/** input type for inserting object relation for remote table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Obj_Rel_Insert_Input = {
  data: Custom_Staple_Food_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Staple_Food_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_On_Conflict = {
  constraint: Custom_Staple_Food_Master_Constraint;
  update_columns?: Array<Custom_Staple_Food_Master_Update_Column>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_staple_food_master". */
export type Custom_Staple_Food_Master_Order_By = {
  custom_staple_food_id?: InputMaybe<Order_By>;
  custom_staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Order_By>;
  custom_staple_food_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  custom_staple_food_master_users?: InputMaybe<Users_Order_By>;
  custom_staple_food_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_staple_food_master */
export type Custom_Staple_Food_Master_Pk_Columns_Input = {
  custom_staple_food_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_staple_food_master" */
export enum Custom_Staple_Food_Master_Select_Column {
  /** column name */
  CustomStapleFoodId = 'custom_staple_food_id',
  /** column name */
  CustomStapleFoodName = 'custom_staple_food_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Set_Input = {
  custom_staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_staple_food_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Staple_Food_Master_Stddev_Fields = {
  __typename?: 'custom_staple_food_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Custom_Staple_Food_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_staple_food_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Custom_Staple_Food_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_staple_food_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "custom_staple_food_master" */
export type Custom_Staple_Food_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Staple_Food_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Staple_Food_Master_Stream_Cursor_Value_Input = {
  custom_staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_staple_food_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Staple_Food_Master_Sum_Fields = {
  __typename?: 'custom_staple_food_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "custom_staple_food_master" */
export enum Custom_Staple_Food_Master_Update_Column {
  /** column name */
  CustomStapleFoodId = 'custom_staple_food_id',
  /** column name */
  CustomStapleFoodName = 'custom_staple_food_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Staple_Food_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Staple_Food_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Staple_Food_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Staple_Food_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Staple_Food_Master_Var_Pop_Fields = {
  __typename?: 'custom_staple_food_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Custom_Staple_Food_Master_Var_Samp_Fields = {
  __typename?: 'custom_staple_food_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Custom_Staple_Food_Master_Variance_Fields = {
  __typename?: 'custom_staple_food_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザごとに追加される野菜類マスタ */
export type Custom_Vegetable_Master = {
  __typename?: 'custom_vegetable_master';
  custom_vegetable_id: Scalars['uuid']['output'];
  /** An object relationship */
  custom_vegetable_master_uint_master?: Maybe<Unit_Master>;
  /** An object relationship */
  custom_vegetable_master_users?: Maybe<Users>;
  /** An object relationship */
  custom_vegetable_master_vegetable_stocks?: Maybe<Vegetable_Stocks>;
  custom_vegetable_name: Scalars['String']['output'];
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "custom_vegetable_master" */
export type Custom_Vegetable_Master_Aggregate = {
  __typename?: 'custom_vegetable_master_aggregate';
  aggregate?: Maybe<Custom_Vegetable_Master_Aggregate_Fields>;
  nodes: Array<Custom_Vegetable_Master>;
};

export type Custom_Vegetable_Master_Aggregate_Bool_Exp = {
  count?: InputMaybe<Custom_Vegetable_Master_Aggregate_Bool_Exp_Count>;
};

export type Custom_Vegetable_Master_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "custom_vegetable_master" */
export type Custom_Vegetable_Master_Aggregate_Fields = {
  __typename?: 'custom_vegetable_master_aggregate_fields';
  avg?: Maybe<Custom_Vegetable_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Custom_Vegetable_Master_Max_Fields>;
  min?: Maybe<Custom_Vegetable_Master_Min_Fields>;
  stddev?: Maybe<Custom_Vegetable_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Custom_Vegetable_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Custom_Vegetable_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Custom_Vegetable_Master_Sum_Fields>;
  var_pop?: Maybe<Custom_Vegetable_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Custom_Vegetable_Master_Var_Samp_Fields>;
  variance?: Maybe<Custom_Vegetable_Master_Variance_Fields>;
};


/** aggregate fields of "custom_vegetable_master" */
export type Custom_Vegetable_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Aggregate_Order_By = {
  avg?: InputMaybe<Custom_Vegetable_Master_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Custom_Vegetable_Master_Max_Order_By>;
  min?: InputMaybe<Custom_Vegetable_Master_Min_Order_By>;
  stddev?: InputMaybe<Custom_Vegetable_Master_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Custom_Vegetable_Master_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Custom_Vegetable_Master_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Custom_Vegetable_Master_Sum_Order_By>;
  var_pop?: InputMaybe<Custom_Vegetable_Master_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Custom_Vegetable_Master_Var_Samp_Order_By>;
  variance?: InputMaybe<Custom_Vegetable_Master_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Arr_Rel_Insert_Input = {
  data: Array<Custom_Vegetable_Master_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Vegetable_Master_On_Conflict>;
};

/** aggregate avg on columns */
export type Custom_Vegetable_Master_Avg_Fields = {
  __typename?: 'custom_vegetable_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Avg_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "custom_vegetable_master". All fields are combined with a logical 'AND'. */
export type Custom_Vegetable_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Custom_Vegetable_Master_Bool_Exp>>;
  _not?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Custom_Vegetable_Master_Bool_Exp>>;
  custom_vegetable_id?: InputMaybe<Uuid_Comparison_Exp>;
  custom_vegetable_master_uint_master?: InputMaybe<Unit_Master_Bool_Exp>;
  custom_vegetable_master_users?: InputMaybe<Users_Bool_Exp>;
  custom_vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  custom_vegetable_name?: InputMaybe<String_Comparison_Exp>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "custom_vegetable_master" */
export enum Custom_Vegetable_Master_Constraint {
  /** unique or primary key constraint on columns "image_uri" */
  CustomVegetableMasterImageUriKey = 'custom_vegetable_master_image_uri_key',
  /** unique or primary key constraint on columns "custom_vegetable_id" */
  CustomVegetableMasterPkey = 'custom_vegetable_master_pkey'
}

/** input type for incrementing numeric columns in table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Insert_Input = {
  custom_vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_vegetable_master_uint_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  custom_vegetable_master_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  custom_vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Obj_Rel_Insert_Input>;
  custom_vegetable_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Custom_Vegetable_Master_Max_Fields = {
  __typename?: 'custom_vegetable_master_max_fields';
  custom_vegetable_id?: Maybe<Scalars['uuid']['output']>;
  custom_vegetable_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Max_Order_By = {
  custom_vegetable_id?: InputMaybe<Order_By>;
  custom_vegetable_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Custom_Vegetable_Master_Min_Fields = {
  __typename?: 'custom_vegetable_master_min_fields';
  custom_vegetable_id?: Maybe<Scalars['uuid']['output']>;
  custom_vegetable_name?: Maybe<Scalars['String']['output']>;
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Min_Order_By = {
  custom_vegetable_id?: InputMaybe<Order_By>;
  custom_vegetable_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Mutation_Response = {
  __typename?: 'custom_vegetable_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Custom_Vegetable_Master>;
};

/** input type for inserting object relation for remote table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Obj_Rel_Insert_Input = {
  data: Custom_Vegetable_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Custom_Vegetable_Master_On_Conflict>;
};

/** on_conflict condition type for table "custom_vegetable_master" */
export type Custom_Vegetable_Master_On_Conflict = {
  constraint: Custom_Vegetable_Master_Constraint;
  update_columns?: Array<Custom_Vegetable_Master_Update_Column>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "custom_vegetable_master". */
export type Custom_Vegetable_Master_Order_By = {
  custom_vegetable_id?: InputMaybe<Order_By>;
  custom_vegetable_master_uint_master?: InputMaybe<Unit_Master_Order_By>;
  custom_vegetable_master_users?: InputMaybe<Users_Order_By>;
  custom_vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Order_By>;
  custom_vegetable_name?: InputMaybe<Order_By>;
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: custom_vegetable_master */
export type Custom_Vegetable_Master_Pk_Columns_Input = {
  custom_vegetable_id: Scalars['uuid']['input'];
};

/** select columns of table "custom_vegetable_master" */
export enum Custom_Vegetable_Master_Select_Column {
  /** column name */
  CustomVegetableId = 'custom_vegetable_id',
  /** column name */
  CustomVegetableName = 'custom_vegetable_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Set_Input = {
  custom_vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_vegetable_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Custom_Vegetable_Master_Stddev_Fields = {
  __typename?: 'custom_vegetable_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Stddev_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Custom_Vegetable_Master_Stddev_Pop_Fields = {
  __typename?: 'custom_vegetable_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Stddev_Pop_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Custom_Vegetable_Master_Stddev_Samp_Fields = {
  __typename?: 'custom_vegetable_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Stddev_Samp_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Custom_Vegetable_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Custom_Vegetable_Master_Stream_Cursor_Value_Input = {
  custom_vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  custom_vegetable_name?: InputMaybe<Scalars['String']['input']>;
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Custom_Vegetable_Master_Sum_Fields = {
  __typename?: 'custom_vegetable_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Sum_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** update columns of table "custom_vegetable_master" */
export enum Custom_Vegetable_Master_Update_Column {
  /** column name */
  CustomVegetableId = 'custom_vegetable_id',
  /** column name */
  CustomVegetableName = 'custom_vegetable_name',
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UserId = 'user_id'
}

export type Custom_Vegetable_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Custom_Vegetable_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Custom_Vegetable_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Custom_Vegetable_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Custom_Vegetable_Master_Var_Pop_Fields = {
  __typename?: 'custom_vegetable_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Var_Pop_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Custom_Vegetable_Master_Var_Samp_Fields = {
  __typename?: 'custom_vegetable_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Var_Samp_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Custom_Vegetable_Master_Variance_Fields = {
  __typename?: 'custom_vegetable_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "custom_vegetable_master" */
export type Custom_Vegetable_Master_Variance_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** デザートマスタデータ */
export type Dessert_Master = {
  __typename?: 'dessert_master';
  default_expiration_period: Scalars['Int']['output'];
  dessert_id: Scalars['uuid']['output'];
  /** An object relationship */
  dessert_master_dessert_stocks?: Maybe<Dessert_Stocks>;
  /** An object relationship */
  dessert_master_unit_master?: Maybe<Unit_Master>;
  dessert_name: Scalars['String']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "dessert_master" */
export type Dessert_Master_Aggregate = {
  __typename?: 'dessert_master_aggregate';
  aggregate?: Maybe<Dessert_Master_Aggregate_Fields>;
  nodes: Array<Dessert_Master>;
};

/** aggregate fields of "dessert_master" */
export type Dessert_Master_Aggregate_Fields = {
  __typename?: 'dessert_master_aggregate_fields';
  avg?: Maybe<Dessert_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dessert_Master_Max_Fields>;
  min?: Maybe<Dessert_Master_Min_Fields>;
  stddev?: Maybe<Dessert_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Dessert_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dessert_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Dessert_Master_Sum_Fields>;
  var_pop?: Maybe<Dessert_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Dessert_Master_Var_Samp_Fields>;
  variance?: Maybe<Dessert_Master_Variance_Fields>;
};


/** aggregate fields of "dessert_master" */
export type Dessert_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dessert_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dessert_Master_Avg_Fields = {
  __typename?: 'dessert_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dessert_master". All fields are combined with a logical 'AND'. */
export type Dessert_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Dessert_Master_Bool_Exp>>;
  _not?: InputMaybe<Dessert_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Dessert_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  dessert_id?: InputMaybe<Uuid_Comparison_Exp>;
  dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  dessert_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  dessert_name?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "dessert_master" */
export enum Dessert_Master_Constraint {
  /** unique or primary key constraint on columns "dessert_name" */
  DessertMasterDessertNameKey = 'dessert_master_dessert_name_key',
  /** unique or primary key constraint on columns "display_name" */
  DessertMasterDisplayNameKey = 'dessert_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  DessertMasterImageUriKey = 'dessert_master_image_uri_key',
  /** unique or primary key constraint on columns "dessert_id" */
  DessertMasterPkey = 'dessert_master_pkey'
}

/** input type for incrementing numeric columns in table "dessert_master" */
export type Dessert_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "dessert_master" */
export type Dessert_Master_Insert_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Obj_Rel_Insert_Input>;
  dessert_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  dessert_name?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Dessert_Master_Max_Fields = {
  __typename?: 'dessert_master_max_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  dessert_id?: Maybe<Scalars['uuid']['output']>;
  dessert_name?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Dessert_Master_Min_Fields = {
  __typename?: 'dessert_master_min_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  dessert_id?: Maybe<Scalars['uuid']['output']>;
  dessert_name?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "dessert_master" */
export type Dessert_Master_Mutation_Response = {
  __typename?: 'dessert_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Dessert_Master>;
};

/** input type for inserting object relation for remote table "dessert_master" */
export type Dessert_Master_Obj_Rel_Insert_Input = {
  data: Dessert_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Dessert_Master_On_Conflict>;
};

/** on_conflict condition type for table "dessert_master" */
export type Dessert_Master_On_Conflict = {
  constraint: Dessert_Master_Constraint;
  update_columns?: Array<Dessert_Master_Update_Column>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "dessert_master". */
export type Dessert_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  dessert_id?: InputMaybe<Order_By>;
  dessert_master_dessert_stocks?: InputMaybe<Dessert_Stocks_Order_By>;
  dessert_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  dessert_name?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dessert_master */
export type Dessert_Master_Pk_Columns_Input = {
  dessert_id: Scalars['uuid']['input'];
};

/** select columns of table "dessert_master" */
export enum Dessert_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DessertId = 'dessert_id',
  /** column name */
  DessertName = 'dessert_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "dessert_master" */
export type Dessert_Master_Set_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  dessert_name?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Dessert_Master_Stddev_Fields = {
  __typename?: 'dessert_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dessert_Master_Stddev_Pop_Fields = {
  __typename?: 'dessert_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dessert_Master_Stddev_Samp_Fields = {
  __typename?: 'dessert_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dessert_master" */
export type Dessert_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dessert_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dessert_Master_Stream_Cursor_Value_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  dessert_name?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Dessert_Master_Sum_Fields = {
  __typename?: 'dessert_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "dessert_master" */
export enum Dessert_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DessertId = 'dessert_id',
  /** column name */
  DessertName = 'dessert_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id'
}

export type Dessert_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Dessert_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Dessert_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Dessert_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Dessert_Master_Var_Pop_Fields = {
  __typename?: 'dessert_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dessert_Master_Var_Samp_Fields = {
  __typename?: 'dessert_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dessert_Master_Variance_Fields = {
  __typename?: 'dessert_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとのデザートストック */
export type Dessert_Stocks = {
  __typename?: 'dessert_stocks';
  dessert_id: Scalars['uuid']['output'];
  /** An object relationship */
  dessert_stocks_custom_dessert_master?: Maybe<Custom_Dessert_Master>;
  /** An object relationship */
  dessert_stocks_dessert_master?: Maybe<Dessert_Master>;
  /** An object relationship */
  dessert_stocks_users?: Maybe<Users>;
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "dessert_stocks" */
export type Dessert_Stocks_Aggregate = {
  __typename?: 'dessert_stocks_aggregate';
  aggregate?: Maybe<Dessert_Stocks_Aggregate_Fields>;
  nodes: Array<Dessert_Stocks>;
};

export type Dessert_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Dessert_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Dessert_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Dessert_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Dessert_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Dessert_Stocks_Select_Column_Dessert_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Dessert_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Dessert_Stocks_Select_Column_Dessert_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Dessert_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dessert_stocks" */
export type Dessert_Stocks_Aggregate_Fields = {
  __typename?: 'dessert_stocks_aggregate_fields';
  avg?: Maybe<Dessert_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dessert_Stocks_Max_Fields>;
  min?: Maybe<Dessert_Stocks_Min_Fields>;
  stddev?: Maybe<Dessert_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Dessert_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dessert_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Dessert_Stocks_Sum_Fields>;
  var_pop?: Maybe<Dessert_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Dessert_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Dessert_Stocks_Variance_Fields>;
};


/** aggregate fields of "dessert_stocks" */
export type Dessert_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dessert_stocks" */
export type Dessert_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Dessert_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dessert_Stocks_Max_Order_By>;
  min?: InputMaybe<Dessert_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Dessert_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dessert_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dessert_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dessert_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Dessert_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dessert_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Dessert_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dessert_stocks" */
export type Dessert_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Dessert_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Dessert_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Dessert_Stocks_Avg_Fields = {
  __typename?: 'dessert_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dessert_stocks". All fields are combined with a logical 'AND'. */
export type Dessert_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Dessert_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Dessert_Stocks_Bool_Exp>>;
  dessert_id?: InputMaybe<Uuid_Comparison_Exp>;
  dessert_stocks_custom_dessert_master?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
  dessert_stocks_dessert_master?: InputMaybe<Dessert_Master_Bool_Exp>;
  dessert_stocks_users?: InputMaybe<Users_Bool_Exp>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dessert_stocks" */
export enum Dessert_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  DessertStocksPkey = 'dessert_stocks_pkey'
}

/** input type for incrementing numeric columns in table "dessert_stocks" */
export type Dessert_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "dessert_stocks" */
export type Dessert_Stocks_Insert_Input = {
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  dessert_stocks_custom_dessert_master?: InputMaybe<Custom_Dessert_Master_Obj_Rel_Insert_Input>;
  dessert_stocks_dessert_master?: InputMaybe<Dessert_Master_Obj_Rel_Insert_Input>;
  dessert_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Dessert_Stocks_Max_Fields = {
  __typename?: 'dessert_stocks_max_fields';
  dessert_id?: Maybe<Scalars['uuid']['output']>;
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Max_Order_By = {
  dessert_id?: InputMaybe<Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dessert_Stocks_Min_Fields = {
  __typename?: 'dessert_stocks_min_fields';
  dessert_id?: Maybe<Scalars['uuid']['output']>;
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Min_Order_By = {
  dessert_id?: InputMaybe<Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "dessert_stocks" */
export type Dessert_Stocks_Mutation_Response = {
  __typename?: 'dessert_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Dessert_Stocks>;
};

/** input type for inserting object relation for remote table "dessert_stocks" */
export type Dessert_Stocks_Obj_Rel_Insert_Input = {
  data: Dessert_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Dessert_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "dessert_stocks" */
export type Dessert_Stocks_On_Conflict = {
  constraint: Dessert_Stocks_Constraint;
  update_columns?: Array<Dessert_Stocks_Update_Column>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "dessert_stocks". */
export type Dessert_Stocks_Order_By = {
  dessert_id?: InputMaybe<Order_By>;
  dessert_stocks_custom_dessert_master?: InputMaybe<Custom_Dessert_Master_Order_By>;
  dessert_stocks_dessert_master?: InputMaybe<Dessert_Master_Order_By>;
  dessert_stocks_users?: InputMaybe<Users_Order_By>;
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: dessert_stocks */
export type Dessert_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "dessert_stocks" */
export enum Dessert_Stocks_Select_Column {
  /** column name */
  DessertId = 'dessert_id',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "dessert_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "dessert_stocks" */
export enum Dessert_Stocks_Select_Column_Dessert_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "dessert_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "dessert_stocks" */
export enum Dessert_Stocks_Select_Column_Dessert_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "dessert_stocks" */
export type Dessert_Stocks_Set_Input = {
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Dessert_Stocks_Stddev_Fields = {
  __typename?: 'dessert_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dessert_Stocks_Stddev_Pop_Fields = {
  __typename?: 'dessert_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dessert_Stocks_Stddev_Samp_Fields = {
  __typename?: 'dessert_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dessert_stocks" */
export type Dessert_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dessert_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dessert_Stocks_Stream_Cursor_Value_Input = {
  dessert_id?: InputMaybe<Scalars['uuid']['input']>;
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Dessert_Stocks_Sum_Fields = {
  __typename?: 'dessert_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "dessert_stocks" */
export enum Dessert_Stocks_Update_Column {
  /** column name */
  DessertId = 'dessert_id',
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Dessert_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Dessert_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Dessert_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Dessert_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Dessert_Stocks_Var_Pop_Fields = {
  __typename?: 'dessert_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dessert_Stocks_Var_Samp_Fields = {
  __typename?: 'dessert_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dessert_Stocks_Variance_Fields = {
  __typename?: 'dessert_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dessert_stocks" */
export type Dessert_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** 魚類マスタデータ */
export type Fish_Master = {
  __typename?: 'fish_master';
  /** 賞味期限の基準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  fish_id: Scalars['uuid']['output'];
  /** An object relationship */
  fish_master_fish_stocks?: Maybe<Fish_Stocks>;
  /** An object relationship */
  fish_master_unit_master?: Maybe<Unit_Master>;
  /** 魚名（ひらがな） */
  fish_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "fish_master" */
export type Fish_Master_Aggregate = {
  __typename?: 'fish_master_aggregate';
  aggregate?: Maybe<Fish_Master_Aggregate_Fields>;
  nodes: Array<Fish_Master>;
};

/** aggregate fields of "fish_master" */
export type Fish_Master_Aggregate_Fields = {
  __typename?: 'fish_master_aggregate_fields';
  avg?: Maybe<Fish_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fish_Master_Max_Fields>;
  min?: Maybe<Fish_Master_Min_Fields>;
  stddev?: Maybe<Fish_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Fish_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fish_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Fish_Master_Sum_Fields>;
  var_pop?: Maybe<Fish_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Fish_Master_Var_Samp_Fields>;
  variance?: Maybe<Fish_Master_Variance_Fields>;
};


/** aggregate fields of "fish_master" */
export type Fish_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fish_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fish_Master_Avg_Fields = {
  __typename?: 'fish_master_avg_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fish_master". All fields are combined with a logical 'AND'. */
export type Fish_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Fish_Master_Bool_Exp>>;
  _not?: InputMaybe<Fish_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Fish_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  fish_id?: InputMaybe<Uuid_Comparison_Exp>;
  fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Bool_Exp>;
  fish_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  fish_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "fish_master" */
export enum Fish_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  FishMasterDisplayNameKey = 'fish_master_display_name_key',
  /** unique or primary key constraint on columns "fish_name" */
  FishMasterFishNameKey = 'fish_master_fish_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  FishMasterImageUriKey = 'fish_master_image_uri_key',
  /** unique or primary key constraint on columns "fish_id" */
  FishMasterPkey = 'fish_master_pkey'
}

/** input type for incrementing numeric columns in table "fish_master" */
export type Fish_Master_Inc_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "fish_master" */
export type Fish_Master_Insert_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Obj_Rel_Insert_Input>;
  fish_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  /** 魚名（ひらがな） */
  fish_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Fish_Master_Max_Fields = {
  __typename?: 'fish_master_max_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  fish_id?: Maybe<Scalars['uuid']['output']>;
  /** 魚名（ひらがな） */
  fish_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Fish_Master_Min_Fields = {
  __typename?: 'fish_master_min_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  fish_id?: Maybe<Scalars['uuid']['output']>;
  /** 魚名（ひらがな） */
  fish_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "fish_master" */
export type Fish_Master_Mutation_Response = {
  __typename?: 'fish_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fish_Master>;
};

/** input type for inserting object relation for remote table "fish_master" */
export type Fish_Master_Obj_Rel_Insert_Input = {
  data: Fish_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fish_Master_On_Conflict>;
};

/** on_conflict condition type for table "fish_master" */
export type Fish_Master_On_Conflict = {
  constraint: Fish_Master_Constraint;
  update_columns?: Array<Fish_Master_Update_Column>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "fish_master". */
export type Fish_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  fish_id?: InputMaybe<Order_By>;
  fish_master_fish_stocks?: InputMaybe<Fish_Stocks_Order_By>;
  fish_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  fish_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fish_master */
export type Fish_Master_Pk_Columns_Input = {
  fish_id: Scalars['uuid']['input'];
};

/** select columns of table "fish_master" */
export enum Fish_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FishId = 'fish_id',
  /** column name */
  FishName = 'fish_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "fish_master" */
export type Fish_Master_Set_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 魚名（ひらがな） */
  fish_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Fish_Master_Stddev_Fields = {
  __typename?: 'fish_master_stddev_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fish_Master_Stddev_Pop_Fields = {
  __typename?: 'fish_master_stddev_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fish_Master_Stddev_Samp_Fields = {
  __typename?: 'fish_master_stddev_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fish_master" */
export type Fish_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fish_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fish_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 魚名（ひらがな） */
  fish_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Fish_Master_Sum_Fields = {
  __typename?: 'fish_master_sum_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "fish_master" */
export enum Fish_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FishId = 'fish_id',
  /** column name */
  FishName = 'fish_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id'
}

export type Fish_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fish_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fish_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fish_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fish_Master_Var_Pop_Fields = {
  __typename?: 'fish_master_var_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fish_Master_Var_Samp_Fields = {
  __typename?: 'fish_master_var_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fish_Master_Variance_Fields = {
  __typename?: 'fish_master_variance_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの魚ストック */
export type Fish_Stocks = {
  __typename?: 'fish_stocks';
  expiration_date: Scalars['date']['output'];
  fish_id: Scalars['uuid']['output'];
  /** An object relationship */
  fish_stocks_custom_fish_master?: Maybe<Custom_Fish_Master>;
  /** An object relationship */
  fish_stocks_fish_master?: Maybe<Fish_Master>;
  /** An object relationship */
  fish_stocks_users?: Maybe<Users>;
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "fish_stocks" */
export type Fish_Stocks_Aggregate = {
  __typename?: 'fish_stocks_aggregate';
  aggregate?: Maybe<Fish_Stocks_Aggregate_Fields>;
  nodes: Array<Fish_Stocks>;
};

export type Fish_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Fish_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Fish_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Fish_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Fish_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Fish_Stocks_Select_Column_Fish_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Fish_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Fish_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Fish_Stocks_Select_Column_Fish_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Fish_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Fish_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Fish_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "fish_stocks" */
export type Fish_Stocks_Aggregate_Fields = {
  __typename?: 'fish_stocks_aggregate_fields';
  avg?: Maybe<Fish_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fish_Stocks_Max_Fields>;
  min?: Maybe<Fish_Stocks_Min_Fields>;
  stddev?: Maybe<Fish_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Fish_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fish_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Fish_Stocks_Sum_Fields>;
  var_pop?: Maybe<Fish_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Fish_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Fish_Stocks_Variance_Fields>;
};


/** aggregate fields of "fish_stocks" */
export type Fish_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fish_stocks" */
export type Fish_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Fish_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fish_Stocks_Max_Order_By>;
  min?: InputMaybe<Fish_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Fish_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fish_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fish_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fish_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Fish_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fish_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Fish_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fish_stocks" */
export type Fish_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Fish_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Fish_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Fish_Stocks_Avg_Fields = {
  __typename?: 'fish_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "fish_stocks" */
export type Fish_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fish_stocks". All fields are combined with a logical 'AND'. */
export type Fish_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Fish_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Fish_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Fish_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  fish_id?: InputMaybe<Uuid_Comparison_Exp>;
  fish_stocks_custom_fish_master?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
  fish_stocks_fish_master?: InputMaybe<Fish_Master_Bool_Exp>;
  fish_stocks_users?: InputMaybe<Users_Bool_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "fish_stocks" */
export enum Fish_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  FishStocksPkey = 'fish_stocks_pkey'
}

/** input type for incrementing numeric columns in table "fish_stocks" */
export type Fish_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "fish_stocks" */
export type Fish_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  fish_stocks_custom_fish_master?: InputMaybe<Custom_Fish_Master_Obj_Rel_Insert_Input>;
  fish_stocks_fish_master?: InputMaybe<Fish_Master_Obj_Rel_Insert_Input>;
  fish_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Fish_Stocks_Max_Fields = {
  __typename?: 'fish_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  fish_id?: Maybe<Scalars['uuid']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "fish_stocks" */
export type Fish_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  fish_id?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fish_Stocks_Min_Fields = {
  __typename?: 'fish_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  fish_id?: Maybe<Scalars['uuid']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "fish_stocks" */
export type Fish_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  fish_id?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fish_stocks" */
export type Fish_Stocks_Mutation_Response = {
  __typename?: 'fish_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fish_Stocks>;
};

/** input type for inserting object relation for remote table "fish_stocks" */
export type Fish_Stocks_Obj_Rel_Insert_Input = {
  data: Fish_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fish_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "fish_stocks" */
export type Fish_Stocks_On_Conflict = {
  constraint: Fish_Stocks_Constraint;
  update_columns?: Array<Fish_Stocks_Update_Column>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "fish_stocks". */
export type Fish_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  fish_id?: InputMaybe<Order_By>;
  fish_stocks_custom_fish_master?: InputMaybe<Custom_Fish_Master_Order_By>;
  fish_stocks_fish_master?: InputMaybe<Fish_Master_Order_By>;
  fish_stocks_users?: InputMaybe<Users_Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fish_stocks */
export type Fish_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "fish_stocks" */
export enum Fish_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  FishId = 'fish_id',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "fish_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "fish_stocks" */
export enum Fish_Stocks_Select_Column_Fish_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "fish_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "fish_stocks" */
export enum Fish_Stocks_Select_Column_Fish_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "fish_stocks" */
export type Fish_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Fish_Stocks_Stddev_Fields = {
  __typename?: 'fish_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "fish_stocks" */
export type Fish_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fish_Stocks_Stddev_Pop_Fields = {
  __typename?: 'fish_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "fish_stocks" */
export type Fish_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fish_Stocks_Stddev_Samp_Fields = {
  __typename?: 'fish_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "fish_stocks" */
export type Fish_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fish_stocks" */
export type Fish_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fish_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fish_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  fish_id?: InputMaybe<Scalars['uuid']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Fish_Stocks_Sum_Fields = {
  __typename?: 'fish_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "fish_stocks" */
export type Fish_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "fish_stocks" */
export enum Fish_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  FishId = 'fish_id',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Fish_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fish_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fish_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fish_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fish_Stocks_Var_Pop_Fields = {
  __typename?: 'fish_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "fish_stocks" */
export type Fish_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fish_Stocks_Var_Samp_Fields = {
  __typename?: 'fish_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "fish_stocks" */
export type Fish_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fish_Stocks_Variance_Fields = {
  __typename?: 'fish_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "fish_stocks" */
export type Fish_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** 材料テーブル。レシピとマスタデータを繋ぐマッピング */
export type Materials = {
  __typename?: 'materials';
  master_id: Scalars['uuid']['output'];
  material_id: Scalars['uuid']['output'];
  /** An object relationship */
  materials_recipes?: Maybe<Recipes>;
  recipe_id: Scalars['uuid']['output'];
};

/** aggregated selection of "materials" */
export type Materials_Aggregate = {
  __typename?: 'materials_aggregate';
  aggregate?: Maybe<Materials_Aggregate_Fields>;
  nodes: Array<Materials>;
};

export type Materials_Aggregate_Bool_Exp = {
  count?: InputMaybe<Materials_Aggregate_Bool_Exp_Count>;
};

export type Materials_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Materials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Materials_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "materials" */
export type Materials_Aggregate_Fields = {
  __typename?: 'materials_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Materials_Max_Fields>;
  min?: Maybe<Materials_Min_Fields>;
};


/** aggregate fields of "materials" */
export type Materials_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Materials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "materials" */
export type Materials_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Materials_Max_Order_By>;
  min?: InputMaybe<Materials_Min_Order_By>;
};

/** input type for inserting array relation for remote table "materials" */
export type Materials_Arr_Rel_Insert_Input = {
  data: Array<Materials_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Materials_On_Conflict>;
};

/** Boolean expression to filter rows from the table "materials". All fields are combined with a logical 'AND'. */
export type Materials_Bool_Exp = {
  _and?: InputMaybe<Array<Materials_Bool_Exp>>;
  _not?: InputMaybe<Materials_Bool_Exp>;
  _or?: InputMaybe<Array<Materials_Bool_Exp>>;
  master_id?: InputMaybe<Uuid_Comparison_Exp>;
  material_id?: InputMaybe<Uuid_Comparison_Exp>;
  materials_recipes?: InputMaybe<Recipes_Bool_Exp>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "materials" */
export enum Materials_Constraint {
  /** unique or primary key constraint on columns "material_id" */
  MaterialsPkey = 'materials_pkey'
}

/** input type for inserting data into table "materials" */
export type Materials_Insert_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  material_id?: InputMaybe<Scalars['uuid']['input']>;
  materials_recipes?: InputMaybe<Recipes_Obj_Rel_Insert_Input>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Materials_Max_Fields = {
  __typename?: 'materials_max_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  material_id?: Maybe<Scalars['uuid']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "materials" */
export type Materials_Max_Order_By = {
  master_id?: InputMaybe<Order_By>;
  material_id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Materials_Min_Fields = {
  __typename?: 'materials_min_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  material_id?: Maybe<Scalars['uuid']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "materials" */
export type Materials_Min_Order_By = {
  master_id?: InputMaybe<Order_By>;
  material_id?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "materials" */
export type Materials_Mutation_Response = {
  __typename?: 'materials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Materials>;
};

/** on_conflict condition type for table "materials" */
export type Materials_On_Conflict = {
  constraint: Materials_Constraint;
  update_columns?: Array<Materials_Update_Column>;
  where?: InputMaybe<Materials_Bool_Exp>;
};

/** Ordering options when selecting data from "materials". */
export type Materials_Order_By = {
  master_id?: InputMaybe<Order_By>;
  material_id?: InputMaybe<Order_By>;
  materials_recipes?: InputMaybe<Recipes_Order_By>;
  recipe_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: materials */
export type Materials_Pk_Columns_Input = {
  material_id: Scalars['uuid']['input'];
};

/** select columns of table "materials" */
export enum Materials_Select_Column {
  /** column name */
  MasterId = 'master_id',
  /** column name */
  MaterialId = 'material_id',
  /** column name */
  RecipeId = 'recipe_id'
}

/** input type for updating data in table "materials" */
export type Materials_Set_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  material_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "materials" */
export type Materials_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Materials_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Materials_Stream_Cursor_Value_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  material_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "materials" */
export enum Materials_Update_Column {
  /** column name */
  MasterId = 'master_id',
  /** column name */
  MaterialId = 'material_id',
  /** column name */
  RecipeId = 'recipe_id'
}

export type Materials_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Materials_Set_Input>;
  /** filter the rows which have to be updated */
  where: Materials_Bool_Exp;
};

/** 肉類のマスターデータ */
export type Meat_Master = {
  __typename?: 'meat_master';
  /** 賞味期限の標準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  meat_id: Scalars['uuid']['output'];
  /** An object relationship */
  meat_master_meat_stocks?: Maybe<Meat_Stocks>;
  /** An object relationship */
  meat_master_unit_master?: Maybe<Unit_Master>;
  /** 肉名（ひらがな） */
  meat_name: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "meat_master" */
export type Meat_Master_Aggregate = {
  __typename?: 'meat_master_aggregate';
  aggregate?: Maybe<Meat_Master_Aggregate_Fields>;
  nodes: Array<Meat_Master>;
};

/** aggregate fields of "meat_master" */
export type Meat_Master_Aggregate_Fields = {
  __typename?: 'meat_master_aggregate_fields';
  avg?: Maybe<Meat_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Meat_Master_Max_Fields>;
  min?: Maybe<Meat_Master_Min_Fields>;
  stddev?: Maybe<Meat_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Meat_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meat_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Meat_Master_Sum_Fields>;
  var_pop?: Maybe<Meat_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Meat_Master_Var_Samp_Fields>;
  variance?: Maybe<Meat_Master_Variance_Fields>;
};


/** aggregate fields of "meat_master" */
export type Meat_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meat_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Meat_Master_Avg_Fields = {
  __typename?: 'meat_master_avg_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "meat_master". All fields are combined with a logical 'AND'. */
export type Meat_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Meat_Master_Bool_Exp>>;
  _not?: InputMaybe<Meat_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Meat_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  meat_id?: InputMaybe<Uuid_Comparison_Exp>;
  meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Bool_Exp>;
  meat_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  meat_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "meat_master" */
export enum Meat_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  MeatMasterDisplayNameKey = 'meat_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  MeatMasterImageUriKey = 'meat_master_image_uri_key',
  /** unique or primary key constraint on columns "meat_name" */
  MeatMasterMeatNameKey = 'meat_master_meat_name_key',
  /** unique or primary key constraint on columns "meat_id" */
  MeatMasterPkey = 'meat_master_pkey'
}

/** input type for incrementing numeric columns in table "meat_master" */
export type Meat_Master_Inc_Input = {
  /** 賞味期限の標準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "meat_master" */
export type Meat_Master_Insert_Input = {
  /** 賞味期限の標準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Obj_Rel_Insert_Input>;
  meat_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  /** 肉名（ひらがな） */
  meat_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Meat_Master_Max_Fields = {
  __typename?: 'meat_master_max_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  meat_id?: Maybe<Scalars['uuid']['output']>;
  /** 肉名（ひらがな） */
  meat_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Meat_Master_Min_Fields = {
  __typename?: 'meat_master_min_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  meat_id?: Maybe<Scalars['uuid']['output']>;
  /** 肉名（ひらがな） */
  meat_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "meat_master" */
export type Meat_Master_Mutation_Response = {
  __typename?: 'meat_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meat_Master>;
};

/** input type for inserting object relation for remote table "meat_master" */
export type Meat_Master_Obj_Rel_Insert_Input = {
  data: Meat_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meat_Master_On_Conflict>;
};

/** on_conflict condition type for table "meat_master" */
export type Meat_Master_On_Conflict = {
  constraint: Meat_Master_Constraint;
  update_columns?: Array<Meat_Master_Update_Column>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "meat_master". */
export type Meat_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  meat_id?: InputMaybe<Order_By>;
  meat_master_meat_stocks?: InputMaybe<Meat_Stocks_Order_By>;
  meat_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  meat_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meat_master */
export type Meat_Master_Pk_Columns_Input = {
  meat_id: Scalars['uuid']['input'];
};

/** select columns of table "meat_master" */
export enum Meat_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  MeatId = 'meat_id',
  /** column name */
  MeatName = 'meat_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "meat_master" */
export type Meat_Master_Set_Input = {
  /** 賞味期限の標準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 肉名（ひらがな） */
  meat_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Meat_Master_Stddev_Fields = {
  __typename?: 'meat_master_stddev_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Meat_Master_Stddev_Pop_Fields = {
  __typename?: 'meat_master_stddev_pop_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Meat_Master_Stddev_Samp_Fields = {
  __typename?: 'meat_master_stddev_samp_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "meat_master" */
export type Meat_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meat_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meat_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の標準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 肉名（ひらがな） */
  meat_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Meat_Master_Sum_Fields = {
  __typename?: 'meat_master_sum_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "meat_master" */
export enum Meat_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  MeatId = 'meat_id',
  /** column name */
  MeatName = 'meat_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Meat_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Meat_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meat_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meat_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Meat_Master_Var_Pop_Fields = {
  __typename?: 'meat_master_var_pop_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Meat_Master_Var_Samp_Fields = {
  __typename?: 'meat_master_var_samp_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Meat_Master_Variance_Fields = {
  __typename?: 'meat_master_variance_fields';
  /** 賞味期限の標準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの肉ストック */
export type Meat_Stocks = {
  __typename?: 'meat_stocks';
  /** 賞味期限日 */
  expiration_date: Scalars['date']['output'];
  /** 増減単位 */
  incremental_unit: Scalars['numeric']['output'];
  /** お気に入りフラグ */
  is_favorite: Scalars['Boolean']['output'];
  meat_id: Scalars['uuid']['output'];
  /** An object relationship */
  meat_stocks_custom_meat_master?: Maybe<Custom_Meat_Master>;
  /** An object relationship */
  meat_stocks_meat_master?: Maybe<Meat_Master>;
  /** An object relationship */
  meat_stocks_users?: Maybe<Users>;
  /** メモ */
  memo: Scalars['String']['output'];
  /** 在庫数 */
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  /** ユーザーID */
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "meat_stocks" */
export type Meat_Stocks_Aggregate = {
  __typename?: 'meat_stocks_aggregate';
  aggregate?: Maybe<Meat_Stocks_Aggregate_Fields>;
  nodes: Array<Meat_Stocks>;
};

export type Meat_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Meat_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Meat_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Meat_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Meat_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Meat_Stocks_Select_Column_Meat_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meat_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meat_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Meat_Stocks_Select_Column_Meat_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meat_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meat_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meat_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meat_stocks" */
export type Meat_Stocks_Aggregate_Fields = {
  __typename?: 'meat_stocks_aggregate_fields';
  avg?: Maybe<Meat_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Meat_Stocks_Max_Fields>;
  min?: Maybe<Meat_Stocks_Min_Fields>;
  stddev?: Maybe<Meat_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Meat_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meat_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Meat_Stocks_Sum_Fields>;
  var_pop?: Maybe<Meat_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Meat_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Meat_Stocks_Variance_Fields>;
};


/** aggregate fields of "meat_stocks" */
export type Meat_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meat_stocks" */
export type Meat_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Meat_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meat_Stocks_Max_Order_By>;
  min?: InputMaybe<Meat_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Meat_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Meat_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Meat_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Meat_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Meat_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Meat_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Meat_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meat_stocks" */
export type Meat_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Meat_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meat_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Meat_Stocks_Avg_Fields = {
  __typename?: 'meat_stocks_avg_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "meat_stocks" */
export type Meat_Stocks_Avg_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meat_stocks". All fields are combined with a logical 'AND'. */
export type Meat_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Meat_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Meat_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Meat_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  meat_id?: InputMaybe<Uuid_Comparison_Exp>;
  meat_stocks_custom_meat_master?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
  meat_stocks_meat_master?: InputMaybe<Meat_Master_Bool_Exp>;
  meat_stocks_users?: InputMaybe<Users_Bool_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "meat_stocks" */
export enum Meat_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  MeatStocksPkey = 'meat_stocks_pkey'
}

/** input type for incrementing numeric columns in table "meat_stocks" */
export type Meat_Stocks_Inc_Input = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "meat_stocks" */
export type Meat_Stocks_Insert_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  meat_stocks_custom_meat_master?: InputMaybe<Custom_Meat_Master_Obj_Rel_Insert_Input>;
  meat_stocks_meat_master?: InputMaybe<Meat_Master_Obj_Rel_Insert_Input>;
  meat_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Meat_Stocks_Max_Fields = {
  __typename?: 'meat_stocks_max_fields';
  /** 賞味期限日 */
  expiration_date?: Maybe<Scalars['date']['output']>;
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  meat_id?: Maybe<Scalars['uuid']['output']>;
  /** メモ */
  memo?: Maybe<Scalars['String']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーID */
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "meat_stocks" */
export type Meat_Stocks_Max_Order_By = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Order_By>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  meat_id?: InputMaybe<Order_By>;
  /** メモ */
  memo?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  /** ユーザーID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meat_Stocks_Min_Fields = {
  __typename?: 'meat_stocks_min_fields';
  /** 賞味期限日 */
  expiration_date?: Maybe<Scalars['date']['output']>;
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  meat_id?: Maybe<Scalars['uuid']['output']>;
  /** メモ */
  memo?: Maybe<Scalars['String']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーID */
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "meat_stocks" */
export type Meat_Stocks_Min_Order_By = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Order_By>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  meat_id?: InputMaybe<Order_By>;
  /** メモ */
  memo?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  /** ユーザーID */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meat_stocks" */
export type Meat_Stocks_Mutation_Response = {
  __typename?: 'meat_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meat_Stocks>;
};

/** input type for inserting object relation for remote table "meat_stocks" */
export type Meat_Stocks_Obj_Rel_Insert_Input = {
  data: Meat_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meat_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "meat_stocks" */
export type Meat_Stocks_On_Conflict = {
  constraint: Meat_Stocks_Constraint;
  update_columns?: Array<Meat_Stocks_Update_Column>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "meat_stocks". */
export type Meat_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  meat_id?: InputMaybe<Order_By>;
  meat_stocks_custom_meat_master?: InputMaybe<Custom_Meat_Master_Order_By>;
  meat_stocks_meat_master?: InputMaybe<Meat_Master_Order_By>;
  meat_stocks_users?: InputMaybe<Users_Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meat_stocks */
export type Meat_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "meat_stocks" */
export enum Meat_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  MeatId = 'meat_id',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "meat_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "meat_stocks" */
export enum Meat_Stocks_Select_Column_Meat_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "meat_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "meat_stocks" */
export enum Meat_Stocks_Select_Column_Meat_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "meat_stocks" */
export type Meat_Stocks_Set_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Meat_Stocks_Stddev_Fields = {
  __typename?: 'meat_stocks_stddev_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "meat_stocks" */
export type Meat_Stocks_Stddev_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meat_Stocks_Stddev_Pop_Fields = {
  __typename?: 'meat_stocks_stddev_pop_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "meat_stocks" */
export type Meat_Stocks_Stddev_Pop_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meat_Stocks_Stddev_Samp_Fields = {
  __typename?: 'meat_stocks_stddev_samp_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "meat_stocks" */
export type Meat_Stocks_Stddev_Samp_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "meat_stocks" */
export type Meat_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meat_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meat_Stocks_Stream_Cursor_Value_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  meat_id?: InputMaybe<Scalars['uuid']['input']>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Meat_Stocks_Sum_Fields = {
  __typename?: 'meat_stocks_sum_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "meat_stocks" */
export type Meat_Stocks_Sum_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "meat_stocks" */
export enum Meat_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  MeatId = 'meat_id',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Meat_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Meat_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meat_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meat_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Meat_Stocks_Var_Pop_Fields = {
  __typename?: 'meat_stocks_var_pop_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "meat_stocks" */
export type Meat_Stocks_Var_Pop_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meat_Stocks_Var_Samp_Fields = {
  __typename?: 'meat_stocks_var_samp_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "meat_stocks" */
export type Meat_Stocks_Var_Samp_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Meat_Stocks_Variance_Fields = {
  __typename?: 'meat_stocks_variance_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "meat_stocks" */
export type Meat_Stocks_Variance_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "custom_dessert_master" */
  delete_custom_dessert_master?: Maybe<Custom_Dessert_Master_Mutation_Response>;
  /** delete single row from the table: "custom_dessert_master" */
  delete_custom_dessert_master_by_pk?: Maybe<Custom_Dessert_Master>;
  /** delete data from the table: "custom_fish_master" */
  delete_custom_fish_master?: Maybe<Custom_Fish_Master_Mutation_Response>;
  /** delete single row from the table: "custom_fish_master" */
  delete_custom_fish_master_by_pk?: Maybe<Custom_Fish_Master>;
  /** delete data from the table: "custom_meat_master" */
  delete_custom_meat_master?: Maybe<Custom_Meat_Master_Mutation_Response>;
  /** delete single row from the table: "custom_meat_master" */
  delete_custom_meat_master_by_pk?: Maybe<Custom_Meat_Master>;
  /** delete data from the table: "custom_other_master" */
  delete_custom_other_master?: Maybe<Custom_Other_Master_Mutation_Response>;
  /** delete single row from the table: "custom_other_master" */
  delete_custom_other_master_by_pk?: Maybe<Custom_Other_Master>;
  /** delete data from the table: "custom_protein_source_master" */
  delete_custom_protein_source_master?: Maybe<Custom_Protein_Source_Master_Mutation_Response>;
  /** delete single row from the table: "custom_protein_source_master" */
  delete_custom_protein_source_master_by_pk?: Maybe<Custom_Protein_Source_Master>;
  /** delete data from the table: "custom_seasoning_master" */
  delete_custom_seasoning_master?: Maybe<Custom_Seasoning_Master_Mutation_Response>;
  /** delete single row from the table: "custom_seasoning_master" */
  delete_custom_seasoning_master_by_pk?: Maybe<Custom_Seasoning_Master>;
  /** delete data from the table: "custom_spice_master" */
  delete_custom_spice_master?: Maybe<Custom_Spice_Master_Mutation_Response>;
  /** delete single row from the table: "custom_spice_master" */
  delete_custom_spice_master_by_pk?: Maybe<Custom_Spice_Master>;
  /** delete data from the table: "custom_staple_food_master" */
  delete_custom_staple_food_master?: Maybe<Custom_Staple_Food_Master_Mutation_Response>;
  /** delete single row from the table: "custom_staple_food_master" */
  delete_custom_staple_food_master_by_pk?: Maybe<Custom_Staple_Food_Master>;
  /** delete data from the table: "custom_vegetable_master" */
  delete_custom_vegetable_master?: Maybe<Custom_Vegetable_Master_Mutation_Response>;
  /** delete single row from the table: "custom_vegetable_master" */
  delete_custom_vegetable_master_by_pk?: Maybe<Custom_Vegetable_Master>;
  /** delete data from the table: "dessert_master" */
  delete_dessert_master?: Maybe<Dessert_Master_Mutation_Response>;
  /** delete single row from the table: "dessert_master" */
  delete_dessert_master_by_pk?: Maybe<Dessert_Master>;
  /** delete data from the table: "dessert_stocks" */
  delete_dessert_stocks?: Maybe<Dessert_Stocks_Mutation_Response>;
  /** delete single row from the table: "dessert_stocks" */
  delete_dessert_stocks_by_pk?: Maybe<Dessert_Stocks>;
  /** delete data from the table: "fish_master" */
  delete_fish_master?: Maybe<Fish_Master_Mutation_Response>;
  /** delete single row from the table: "fish_master" */
  delete_fish_master_by_pk?: Maybe<Fish_Master>;
  /** delete data from the table: "fish_stocks" */
  delete_fish_stocks?: Maybe<Fish_Stocks_Mutation_Response>;
  /** delete single row from the table: "fish_stocks" */
  delete_fish_stocks_by_pk?: Maybe<Fish_Stocks>;
  /** delete data from the table: "materials" */
  delete_materials?: Maybe<Materials_Mutation_Response>;
  /** delete single row from the table: "materials" */
  delete_materials_by_pk?: Maybe<Materials>;
  /** delete data from the table: "meat_master" */
  delete_meat_master?: Maybe<Meat_Master_Mutation_Response>;
  /** delete single row from the table: "meat_master" */
  delete_meat_master_by_pk?: Maybe<Meat_Master>;
  /** delete data from the table: "meat_stocks" */
  delete_meat_stocks?: Maybe<Meat_Stocks_Mutation_Response>;
  /** delete single row from the table: "meat_stocks" */
  delete_meat_stocks_by_pk?: Maybe<Meat_Stocks>;
  /** delete data from the table: "other_master" */
  delete_other_master?: Maybe<Other_Master_Mutation_Response>;
  /** delete single row from the table: "other_master" */
  delete_other_master_by_pk?: Maybe<Other_Master>;
  /** delete data from the table: "other_stocks" */
  delete_other_stocks?: Maybe<Other_Stocks_Mutation_Response>;
  /** delete single row from the table: "other_stocks" */
  delete_other_stocks_by_pk?: Maybe<Other_Stocks>;
  /** delete data from the table: "protein_source_master" */
  delete_protein_source_master?: Maybe<Protein_Source_Master_Mutation_Response>;
  /** delete single row from the table: "protein_source_master" */
  delete_protein_source_master_by_pk?: Maybe<Protein_Source_Master>;
  /** delete data from the table: "protein_source_stocks" */
  delete_protein_source_stocks?: Maybe<Protein_Source_Stocks_Mutation_Response>;
  /** delete single row from the table: "protein_source_stocks" */
  delete_protein_source_stocks_by_pk?: Maybe<Protein_Source_Stocks>;
  /** delete data from the table: "recipe_materials" */
  delete_recipe_materials?: Maybe<Recipe_Materials_Mutation_Response>;
  /** delete single row from the table: "recipe_materials" */
  delete_recipe_materials_by_pk?: Maybe<Recipe_Materials>;
  /** delete data from the table: "recipe_steps" */
  delete_recipe_steps?: Maybe<Recipe_Steps_Mutation_Response>;
  /** delete single row from the table: "recipe_steps" */
  delete_recipe_steps_by_pk?: Maybe<Recipe_Steps>;
  /** delete data from the table: "recipes" */
  delete_recipes?: Maybe<Recipes_Mutation_Response>;
  /** delete single row from the table: "recipes" */
  delete_recipes_by_pk?: Maybe<Recipes>;
  /** delete data from the table: "seasoning_master" */
  delete_seasoning_master?: Maybe<Seasoning_Master_Mutation_Response>;
  /** delete single row from the table: "seasoning_master" */
  delete_seasoning_master_by_pk?: Maybe<Seasoning_Master>;
  /** delete data from the table: "seasoning_stocks" */
  delete_seasoning_stocks?: Maybe<Seasoning_Stocks_Mutation_Response>;
  /** delete single row from the table: "seasoning_stocks" */
  delete_seasoning_stocks_by_pk?: Maybe<Seasoning_Stocks>;
  /** delete data from the table: "shopping_memo" */
  delete_shopping_memo?: Maybe<Shopping_Memo_Mutation_Response>;
  /** delete single row from the table: "shopping_memo" */
  delete_shopping_memo_by_pk?: Maybe<Shopping_Memo>;
  /** delete data from the table: "spice_master" */
  delete_spice_master?: Maybe<Spice_Master_Mutation_Response>;
  /** delete single row from the table: "spice_master" */
  delete_spice_master_by_pk?: Maybe<Spice_Master>;
  /** delete data from the table: "spice_stocks" */
  delete_spice_stocks?: Maybe<Spice_Stocks_Mutation_Response>;
  /** delete single row from the table: "spice_stocks" */
  delete_spice_stocks_by_pk?: Maybe<Spice_Stocks>;
  /** delete data from the table: "staple_food_master" */
  delete_staple_food_master?: Maybe<Staple_Food_Master_Mutation_Response>;
  /** delete single row from the table: "staple_food_master" */
  delete_staple_food_master_by_pk?: Maybe<Staple_Food_Master>;
  /** delete data from the table: "staple_food_stocks" */
  delete_staple_food_stocks?: Maybe<Staple_Food_Stocks_Mutation_Response>;
  /** delete single row from the table: "staple_food_stocks" */
  delete_staple_food_stocks_by_pk?: Maybe<Staple_Food_Stocks>;
  /** delete data from the table: "unit_master" */
  delete_unit_master?: Maybe<Unit_Master_Mutation_Response>;
  /** delete single row from the table: "unit_master" */
  delete_unit_master_by_pk?: Maybe<Unit_Master>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "vegetable_master" */
  delete_vegetable_master?: Maybe<Vegetable_Master_Mutation_Response>;
  /** delete single row from the table: "vegetable_master" */
  delete_vegetable_master_by_pk?: Maybe<Vegetable_Master>;
  /** delete data from the table: "vegetable_stocks" */
  delete_vegetable_stocks?: Maybe<Vegetable_Stocks_Mutation_Response>;
  /** delete single row from the table: "vegetable_stocks" */
  delete_vegetable_stocks_by_pk?: Maybe<Vegetable_Stocks>;
  /** insert data into the table: "custom_dessert_master" */
  insert_custom_dessert_master?: Maybe<Custom_Dessert_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_dessert_master" */
  insert_custom_dessert_master_one?: Maybe<Custom_Dessert_Master>;
  /** insert data into the table: "custom_fish_master" */
  insert_custom_fish_master?: Maybe<Custom_Fish_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_fish_master" */
  insert_custom_fish_master_one?: Maybe<Custom_Fish_Master>;
  /** insert data into the table: "custom_meat_master" */
  insert_custom_meat_master?: Maybe<Custom_Meat_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_meat_master" */
  insert_custom_meat_master_one?: Maybe<Custom_Meat_Master>;
  /** insert data into the table: "custom_other_master" */
  insert_custom_other_master?: Maybe<Custom_Other_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_other_master" */
  insert_custom_other_master_one?: Maybe<Custom_Other_Master>;
  /** insert data into the table: "custom_protein_source_master" */
  insert_custom_protein_source_master?: Maybe<Custom_Protein_Source_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_protein_source_master" */
  insert_custom_protein_source_master_one?: Maybe<Custom_Protein_Source_Master>;
  /** insert data into the table: "custom_seasoning_master" */
  insert_custom_seasoning_master?: Maybe<Custom_Seasoning_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_seasoning_master" */
  insert_custom_seasoning_master_one?: Maybe<Custom_Seasoning_Master>;
  /** insert data into the table: "custom_spice_master" */
  insert_custom_spice_master?: Maybe<Custom_Spice_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_spice_master" */
  insert_custom_spice_master_one?: Maybe<Custom_Spice_Master>;
  /** insert data into the table: "custom_staple_food_master" */
  insert_custom_staple_food_master?: Maybe<Custom_Staple_Food_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_staple_food_master" */
  insert_custom_staple_food_master_one?: Maybe<Custom_Staple_Food_Master>;
  /** insert data into the table: "custom_vegetable_master" */
  insert_custom_vegetable_master?: Maybe<Custom_Vegetable_Master_Mutation_Response>;
  /** insert a single row into the table: "custom_vegetable_master" */
  insert_custom_vegetable_master_one?: Maybe<Custom_Vegetable_Master>;
  /** insert data into the table: "dessert_master" */
  insert_dessert_master?: Maybe<Dessert_Master_Mutation_Response>;
  /** insert a single row into the table: "dessert_master" */
  insert_dessert_master_one?: Maybe<Dessert_Master>;
  /** insert data into the table: "dessert_stocks" */
  insert_dessert_stocks?: Maybe<Dessert_Stocks_Mutation_Response>;
  /** insert a single row into the table: "dessert_stocks" */
  insert_dessert_stocks_one?: Maybe<Dessert_Stocks>;
  /** insert data into the table: "fish_master" */
  insert_fish_master?: Maybe<Fish_Master_Mutation_Response>;
  /** insert a single row into the table: "fish_master" */
  insert_fish_master_one?: Maybe<Fish_Master>;
  /** insert data into the table: "fish_stocks" */
  insert_fish_stocks?: Maybe<Fish_Stocks_Mutation_Response>;
  /** insert a single row into the table: "fish_stocks" */
  insert_fish_stocks_one?: Maybe<Fish_Stocks>;
  /** insert data into the table: "materials" */
  insert_materials?: Maybe<Materials_Mutation_Response>;
  /** insert a single row into the table: "materials" */
  insert_materials_one?: Maybe<Materials>;
  /** insert data into the table: "meat_master" */
  insert_meat_master?: Maybe<Meat_Master_Mutation_Response>;
  /** insert a single row into the table: "meat_master" */
  insert_meat_master_one?: Maybe<Meat_Master>;
  /** insert data into the table: "meat_stocks" */
  insert_meat_stocks?: Maybe<Meat_Stocks_Mutation_Response>;
  /** insert a single row into the table: "meat_stocks" */
  insert_meat_stocks_one?: Maybe<Meat_Stocks>;
  /** insert data into the table: "other_master" */
  insert_other_master?: Maybe<Other_Master_Mutation_Response>;
  /** insert a single row into the table: "other_master" */
  insert_other_master_one?: Maybe<Other_Master>;
  /** insert data into the table: "other_stocks" */
  insert_other_stocks?: Maybe<Other_Stocks_Mutation_Response>;
  /** insert a single row into the table: "other_stocks" */
  insert_other_stocks_one?: Maybe<Other_Stocks>;
  /** insert data into the table: "protein_source_master" */
  insert_protein_source_master?: Maybe<Protein_Source_Master_Mutation_Response>;
  /** insert a single row into the table: "protein_source_master" */
  insert_protein_source_master_one?: Maybe<Protein_Source_Master>;
  /** insert data into the table: "protein_source_stocks" */
  insert_protein_source_stocks?: Maybe<Protein_Source_Stocks_Mutation_Response>;
  /** insert a single row into the table: "protein_source_stocks" */
  insert_protein_source_stocks_one?: Maybe<Protein_Source_Stocks>;
  /** insert data into the table: "recipe_materials" */
  insert_recipe_materials?: Maybe<Recipe_Materials_Mutation_Response>;
  /** insert a single row into the table: "recipe_materials" */
  insert_recipe_materials_one?: Maybe<Recipe_Materials>;
  /** insert data into the table: "recipe_steps" */
  insert_recipe_steps?: Maybe<Recipe_Steps_Mutation_Response>;
  /** insert a single row into the table: "recipe_steps" */
  insert_recipe_steps_one?: Maybe<Recipe_Steps>;
  /** insert data into the table: "recipes" */
  insert_recipes?: Maybe<Recipes_Mutation_Response>;
  /** insert a single row into the table: "recipes" */
  insert_recipes_one?: Maybe<Recipes>;
  /** insert data into the table: "seasoning_master" */
  insert_seasoning_master?: Maybe<Seasoning_Master_Mutation_Response>;
  /** insert a single row into the table: "seasoning_master" */
  insert_seasoning_master_one?: Maybe<Seasoning_Master>;
  /** insert data into the table: "seasoning_stocks" */
  insert_seasoning_stocks?: Maybe<Seasoning_Stocks_Mutation_Response>;
  /** insert a single row into the table: "seasoning_stocks" */
  insert_seasoning_stocks_one?: Maybe<Seasoning_Stocks>;
  /** insert data into the table: "shopping_memo" */
  insert_shopping_memo?: Maybe<Shopping_Memo_Mutation_Response>;
  /** insert a single row into the table: "shopping_memo" */
  insert_shopping_memo_one?: Maybe<Shopping_Memo>;
  /** insert data into the table: "spice_master" */
  insert_spice_master?: Maybe<Spice_Master_Mutation_Response>;
  /** insert a single row into the table: "spice_master" */
  insert_spice_master_one?: Maybe<Spice_Master>;
  /** insert data into the table: "spice_stocks" */
  insert_spice_stocks?: Maybe<Spice_Stocks_Mutation_Response>;
  /** insert a single row into the table: "spice_stocks" */
  insert_spice_stocks_one?: Maybe<Spice_Stocks>;
  /** insert data into the table: "staple_food_master" */
  insert_staple_food_master?: Maybe<Staple_Food_Master_Mutation_Response>;
  /** insert a single row into the table: "staple_food_master" */
  insert_staple_food_master_one?: Maybe<Staple_Food_Master>;
  /** insert data into the table: "staple_food_stocks" */
  insert_staple_food_stocks?: Maybe<Staple_Food_Stocks_Mutation_Response>;
  /** insert a single row into the table: "staple_food_stocks" */
  insert_staple_food_stocks_one?: Maybe<Staple_Food_Stocks>;
  /** insert data into the table: "unit_master" */
  insert_unit_master?: Maybe<Unit_Master_Mutation_Response>;
  /** insert a single row into the table: "unit_master" */
  insert_unit_master_one?: Maybe<Unit_Master>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "vegetable_master" */
  insert_vegetable_master?: Maybe<Vegetable_Master_Mutation_Response>;
  /** insert a single row into the table: "vegetable_master" */
  insert_vegetable_master_one?: Maybe<Vegetable_Master>;
  /** insert data into the table: "vegetable_stocks" */
  insert_vegetable_stocks?: Maybe<Vegetable_Stocks_Mutation_Response>;
  /** insert a single row into the table: "vegetable_stocks" */
  insert_vegetable_stocks_one?: Maybe<Vegetable_Stocks>;
  /** update data of the table: "custom_dessert_master" */
  update_custom_dessert_master?: Maybe<Custom_Dessert_Master_Mutation_Response>;
  /** update single row of the table: "custom_dessert_master" */
  update_custom_dessert_master_by_pk?: Maybe<Custom_Dessert_Master>;
  /** update multiples rows of table: "custom_dessert_master" */
  update_custom_dessert_master_many?: Maybe<Array<Maybe<Custom_Dessert_Master_Mutation_Response>>>;
  /** update data of the table: "custom_fish_master" */
  update_custom_fish_master?: Maybe<Custom_Fish_Master_Mutation_Response>;
  /** update single row of the table: "custom_fish_master" */
  update_custom_fish_master_by_pk?: Maybe<Custom_Fish_Master>;
  /** update multiples rows of table: "custom_fish_master" */
  update_custom_fish_master_many?: Maybe<Array<Maybe<Custom_Fish_Master_Mutation_Response>>>;
  /** update data of the table: "custom_meat_master" */
  update_custom_meat_master?: Maybe<Custom_Meat_Master_Mutation_Response>;
  /** update single row of the table: "custom_meat_master" */
  update_custom_meat_master_by_pk?: Maybe<Custom_Meat_Master>;
  /** update multiples rows of table: "custom_meat_master" */
  update_custom_meat_master_many?: Maybe<Array<Maybe<Custom_Meat_Master_Mutation_Response>>>;
  /** update data of the table: "custom_other_master" */
  update_custom_other_master?: Maybe<Custom_Other_Master_Mutation_Response>;
  /** update single row of the table: "custom_other_master" */
  update_custom_other_master_by_pk?: Maybe<Custom_Other_Master>;
  /** update multiples rows of table: "custom_other_master" */
  update_custom_other_master_many?: Maybe<Array<Maybe<Custom_Other_Master_Mutation_Response>>>;
  /** update data of the table: "custom_protein_source_master" */
  update_custom_protein_source_master?: Maybe<Custom_Protein_Source_Master_Mutation_Response>;
  /** update single row of the table: "custom_protein_source_master" */
  update_custom_protein_source_master_by_pk?: Maybe<Custom_Protein_Source_Master>;
  /** update multiples rows of table: "custom_protein_source_master" */
  update_custom_protein_source_master_many?: Maybe<Array<Maybe<Custom_Protein_Source_Master_Mutation_Response>>>;
  /** update data of the table: "custom_seasoning_master" */
  update_custom_seasoning_master?: Maybe<Custom_Seasoning_Master_Mutation_Response>;
  /** update single row of the table: "custom_seasoning_master" */
  update_custom_seasoning_master_by_pk?: Maybe<Custom_Seasoning_Master>;
  /** update multiples rows of table: "custom_seasoning_master" */
  update_custom_seasoning_master_many?: Maybe<Array<Maybe<Custom_Seasoning_Master_Mutation_Response>>>;
  /** update data of the table: "custom_spice_master" */
  update_custom_spice_master?: Maybe<Custom_Spice_Master_Mutation_Response>;
  /** update single row of the table: "custom_spice_master" */
  update_custom_spice_master_by_pk?: Maybe<Custom_Spice_Master>;
  /** update multiples rows of table: "custom_spice_master" */
  update_custom_spice_master_many?: Maybe<Array<Maybe<Custom_Spice_Master_Mutation_Response>>>;
  /** update data of the table: "custom_staple_food_master" */
  update_custom_staple_food_master?: Maybe<Custom_Staple_Food_Master_Mutation_Response>;
  /** update single row of the table: "custom_staple_food_master" */
  update_custom_staple_food_master_by_pk?: Maybe<Custom_Staple_Food_Master>;
  /** update multiples rows of table: "custom_staple_food_master" */
  update_custom_staple_food_master_many?: Maybe<Array<Maybe<Custom_Staple_Food_Master_Mutation_Response>>>;
  /** update data of the table: "custom_vegetable_master" */
  update_custom_vegetable_master?: Maybe<Custom_Vegetable_Master_Mutation_Response>;
  /** update single row of the table: "custom_vegetable_master" */
  update_custom_vegetable_master_by_pk?: Maybe<Custom_Vegetable_Master>;
  /** update multiples rows of table: "custom_vegetable_master" */
  update_custom_vegetable_master_many?: Maybe<Array<Maybe<Custom_Vegetable_Master_Mutation_Response>>>;
  /** update data of the table: "dessert_master" */
  update_dessert_master?: Maybe<Dessert_Master_Mutation_Response>;
  /** update single row of the table: "dessert_master" */
  update_dessert_master_by_pk?: Maybe<Dessert_Master>;
  /** update multiples rows of table: "dessert_master" */
  update_dessert_master_many?: Maybe<Array<Maybe<Dessert_Master_Mutation_Response>>>;
  /** update data of the table: "dessert_stocks" */
  update_dessert_stocks?: Maybe<Dessert_Stocks_Mutation_Response>;
  /** update single row of the table: "dessert_stocks" */
  update_dessert_stocks_by_pk?: Maybe<Dessert_Stocks>;
  /** update multiples rows of table: "dessert_stocks" */
  update_dessert_stocks_many?: Maybe<Array<Maybe<Dessert_Stocks_Mutation_Response>>>;
  /** update data of the table: "fish_master" */
  update_fish_master?: Maybe<Fish_Master_Mutation_Response>;
  /** update single row of the table: "fish_master" */
  update_fish_master_by_pk?: Maybe<Fish_Master>;
  /** update multiples rows of table: "fish_master" */
  update_fish_master_many?: Maybe<Array<Maybe<Fish_Master_Mutation_Response>>>;
  /** update data of the table: "fish_stocks" */
  update_fish_stocks?: Maybe<Fish_Stocks_Mutation_Response>;
  /** update single row of the table: "fish_stocks" */
  update_fish_stocks_by_pk?: Maybe<Fish_Stocks>;
  /** update multiples rows of table: "fish_stocks" */
  update_fish_stocks_many?: Maybe<Array<Maybe<Fish_Stocks_Mutation_Response>>>;
  /** update data of the table: "materials" */
  update_materials?: Maybe<Materials_Mutation_Response>;
  /** update single row of the table: "materials" */
  update_materials_by_pk?: Maybe<Materials>;
  /** update multiples rows of table: "materials" */
  update_materials_many?: Maybe<Array<Maybe<Materials_Mutation_Response>>>;
  /** update data of the table: "meat_master" */
  update_meat_master?: Maybe<Meat_Master_Mutation_Response>;
  /** update single row of the table: "meat_master" */
  update_meat_master_by_pk?: Maybe<Meat_Master>;
  /** update multiples rows of table: "meat_master" */
  update_meat_master_many?: Maybe<Array<Maybe<Meat_Master_Mutation_Response>>>;
  /** update data of the table: "meat_stocks" */
  update_meat_stocks?: Maybe<Meat_Stocks_Mutation_Response>;
  /** update single row of the table: "meat_stocks" */
  update_meat_stocks_by_pk?: Maybe<Meat_Stocks>;
  /** update multiples rows of table: "meat_stocks" */
  update_meat_stocks_many?: Maybe<Array<Maybe<Meat_Stocks_Mutation_Response>>>;
  /** update data of the table: "other_master" */
  update_other_master?: Maybe<Other_Master_Mutation_Response>;
  /** update single row of the table: "other_master" */
  update_other_master_by_pk?: Maybe<Other_Master>;
  /** update multiples rows of table: "other_master" */
  update_other_master_many?: Maybe<Array<Maybe<Other_Master_Mutation_Response>>>;
  /** update data of the table: "other_stocks" */
  update_other_stocks?: Maybe<Other_Stocks_Mutation_Response>;
  /** update single row of the table: "other_stocks" */
  update_other_stocks_by_pk?: Maybe<Other_Stocks>;
  /** update multiples rows of table: "other_stocks" */
  update_other_stocks_many?: Maybe<Array<Maybe<Other_Stocks_Mutation_Response>>>;
  /** update data of the table: "protein_source_master" */
  update_protein_source_master?: Maybe<Protein_Source_Master_Mutation_Response>;
  /** update single row of the table: "protein_source_master" */
  update_protein_source_master_by_pk?: Maybe<Protein_Source_Master>;
  /** update multiples rows of table: "protein_source_master" */
  update_protein_source_master_many?: Maybe<Array<Maybe<Protein_Source_Master_Mutation_Response>>>;
  /** update data of the table: "protein_source_stocks" */
  update_protein_source_stocks?: Maybe<Protein_Source_Stocks_Mutation_Response>;
  /** update single row of the table: "protein_source_stocks" */
  update_protein_source_stocks_by_pk?: Maybe<Protein_Source_Stocks>;
  /** update multiples rows of table: "protein_source_stocks" */
  update_protein_source_stocks_many?: Maybe<Array<Maybe<Protein_Source_Stocks_Mutation_Response>>>;
  /** update data of the table: "recipe_materials" */
  update_recipe_materials?: Maybe<Recipe_Materials_Mutation_Response>;
  /** update single row of the table: "recipe_materials" */
  update_recipe_materials_by_pk?: Maybe<Recipe_Materials>;
  /** update multiples rows of table: "recipe_materials" */
  update_recipe_materials_many?: Maybe<Array<Maybe<Recipe_Materials_Mutation_Response>>>;
  /** update data of the table: "recipe_steps" */
  update_recipe_steps?: Maybe<Recipe_Steps_Mutation_Response>;
  /** update single row of the table: "recipe_steps" */
  update_recipe_steps_by_pk?: Maybe<Recipe_Steps>;
  /** update multiples rows of table: "recipe_steps" */
  update_recipe_steps_many?: Maybe<Array<Maybe<Recipe_Steps_Mutation_Response>>>;
  /** update data of the table: "recipes" */
  update_recipes?: Maybe<Recipes_Mutation_Response>;
  /** update single row of the table: "recipes" */
  update_recipes_by_pk?: Maybe<Recipes>;
  /** update multiples rows of table: "recipes" */
  update_recipes_many?: Maybe<Array<Maybe<Recipes_Mutation_Response>>>;
  /** update data of the table: "seasoning_master" */
  update_seasoning_master?: Maybe<Seasoning_Master_Mutation_Response>;
  /** update single row of the table: "seasoning_master" */
  update_seasoning_master_by_pk?: Maybe<Seasoning_Master>;
  /** update multiples rows of table: "seasoning_master" */
  update_seasoning_master_many?: Maybe<Array<Maybe<Seasoning_Master_Mutation_Response>>>;
  /** update data of the table: "seasoning_stocks" */
  update_seasoning_stocks?: Maybe<Seasoning_Stocks_Mutation_Response>;
  /** update single row of the table: "seasoning_stocks" */
  update_seasoning_stocks_by_pk?: Maybe<Seasoning_Stocks>;
  /** update multiples rows of table: "seasoning_stocks" */
  update_seasoning_stocks_many?: Maybe<Array<Maybe<Seasoning_Stocks_Mutation_Response>>>;
  /** update data of the table: "shopping_memo" */
  update_shopping_memo?: Maybe<Shopping_Memo_Mutation_Response>;
  /** update single row of the table: "shopping_memo" */
  update_shopping_memo_by_pk?: Maybe<Shopping_Memo>;
  /** update multiples rows of table: "shopping_memo" */
  update_shopping_memo_many?: Maybe<Array<Maybe<Shopping_Memo_Mutation_Response>>>;
  /** update data of the table: "spice_master" */
  update_spice_master?: Maybe<Spice_Master_Mutation_Response>;
  /** update single row of the table: "spice_master" */
  update_spice_master_by_pk?: Maybe<Spice_Master>;
  /** update multiples rows of table: "spice_master" */
  update_spice_master_many?: Maybe<Array<Maybe<Spice_Master_Mutation_Response>>>;
  /** update data of the table: "spice_stocks" */
  update_spice_stocks?: Maybe<Spice_Stocks_Mutation_Response>;
  /** update single row of the table: "spice_stocks" */
  update_spice_stocks_by_pk?: Maybe<Spice_Stocks>;
  /** update multiples rows of table: "spice_stocks" */
  update_spice_stocks_many?: Maybe<Array<Maybe<Spice_Stocks_Mutation_Response>>>;
  /** update data of the table: "staple_food_master" */
  update_staple_food_master?: Maybe<Staple_Food_Master_Mutation_Response>;
  /** update single row of the table: "staple_food_master" */
  update_staple_food_master_by_pk?: Maybe<Staple_Food_Master>;
  /** update multiples rows of table: "staple_food_master" */
  update_staple_food_master_many?: Maybe<Array<Maybe<Staple_Food_Master_Mutation_Response>>>;
  /** update data of the table: "staple_food_stocks" */
  update_staple_food_stocks?: Maybe<Staple_Food_Stocks_Mutation_Response>;
  /** update single row of the table: "staple_food_stocks" */
  update_staple_food_stocks_by_pk?: Maybe<Staple_Food_Stocks>;
  /** update multiples rows of table: "staple_food_stocks" */
  update_staple_food_stocks_many?: Maybe<Array<Maybe<Staple_Food_Stocks_Mutation_Response>>>;
  /** update data of the table: "unit_master" */
  update_unit_master?: Maybe<Unit_Master_Mutation_Response>;
  /** update single row of the table: "unit_master" */
  update_unit_master_by_pk?: Maybe<Unit_Master>;
  /** update multiples rows of table: "unit_master" */
  update_unit_master_many?: Maybe<Array<Maybe<Unit_Master_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "vegetable_master" */
  update_vegetable_master?: Maybe<Vegetable_Master_Mutation_Response>;
  /** update single row of the table: "vegetable_master" */
  update_vegetable_master_by_pk?: Maybe<Vegetable_Master>;
  /** update multiples rows of table: "vegetable_master" */
  update_vegetable_master_many?: Maybe<Array<Maybe<Vegetable_Master_Mutation_Response>>>;
  /** update data of the table: "vegetable_stocks" */
  update_vegetable_stocks?: Maybe<Vegetable_Stocks_Mutation_Response>;
  /** update single row of the table: "vegetable_stocks" */
  update_vegetable_stocks_by_pk?: Maybe<Vegetable_Stocks>;
  /** update multiples rows of table: "vegetable_stocks" */
  update_vegetable_stocks_many?: Maybe<Array<Maybe<Vegetable_Stocks_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Dessert_MasterArgs = {
  where: Custom_Dessert_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Dessert_Master_By_PkArgs = {
  custom_dessert_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Fish_MasterArgs = {
  where: Custom_Fish_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Fish_Master_By_PkArgs = {
  custom_fish_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Meat_MasterArgs = {
  where: Custom_Meat_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Meat_Master_By_PkArgs = {
  custom_meat_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Other_MasterArgs = {
  where: Custom_Other_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Other_Master_By_PkArgs = {
  custom_other_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Protein_Source_MasterArgs = {
  where: Custom_Protein_Source_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Protein_Source_Master_By_PkArgs = {
  custom_protein_source_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Seasoning_MasterArgs = {
  where: Custom_Seasoning_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Seasoning_Master_By_PkArgs = {
  custom_seasoning_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Spice_MasterArgs = {
  where: Custom_Spice_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Spice_Master_By_PkArgs = {
  custom_spice_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Staple_Food_MasterArgs = {
  where: Custom_Staple_Food_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Staple_Food_Master_By_PkArgs = {
  custom_staple_food_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Custom_Vegetable_MasterArgs = {
  where: Custom_Vegetable_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Custom_Vegetable_Master_By_PkArgs = {
  custom_vegetable_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Dessert_MasterArgs = {
  where: Dessert_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dessert_Master_By_PkArgs = {
  dessert_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Dessert_StocksArgs = {
  where: Dessert_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dessert_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fish_MasterArgs = {
  where: Fish_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fish_Master_By_PkArgs = {
  fish_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fish_StocksArgs = {
  where: Fish_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fish_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MaterialsArgs = {
  where: Materials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Materials_By_PkArgs = {
  material_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meat_MasterArgs = {
  where: Meat_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meat_Master_By_PkArgs = {
  meat_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meat_StocksArgs = {
  where: Meat_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meat_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Other_MasterArgs = {
  where: Other_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Other_Master_By_PkArgs = {
  other_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Other_StocksArgs = {
  where: Other_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Other_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Protein_Source_MasterArgs = {
  where: Protein_Source_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protein_Source_Master_By_PkArgs = {
  protein_source_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Protein_Source_StocksArgs = {
  where: Protein_Source_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protein_Source_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_MaterialsArgs = {
  where: Recipe_Materials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Materials_By_PkArgs = {
  recipe_material_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_StepsArgs = {
  where: Recipe_Steps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Steps_By_PkArgs = {
  recipe_step_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RecipesArgs = {
  where: Recipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipes_By_PkArgs = {
  recipe_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Seasoning_MasterArgs = {
  where: Seasoning_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seasoning_Master_By_PkArgs = {
  seasoning_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Seasoning_StocksArgs = {
  where: Seasoning_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seasoning_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Shopping_MemoArgs = {
  where: Shopping_Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shopping_Memo_By_PkArgs = {
  shopping_memo_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Spice_MasterArgs = {
  where: Spice_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Spice_Master_By_PkArgs = {
  spice_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Spice_StocksArgs = {
  where: Spice_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Spice_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Staple_Food_MasterArgs = {
  where: Staple_Food_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staple_Food_Master_By_PkArgs = {
  staple_food_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Staple_Food_StocksArgs = {
  where: Staple_Food_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staple_Food_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Unit_MasterArgs = {
  where: Unit_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Unit_Master_By_PkArgs = {
  unit_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Vegetable_MasterArgs = {
  where: Vegetable_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vegetable_Master_By_PkArgs = {
  vegetable_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Vegetable_StocksArgs = {
  where: Vegetable_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vegetable_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Custom_Dessert_MasterArgs = {
  objects: Array<Custom_Dessert_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Dessert_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Dessert_Master_OneArgs = {
  object: Custom_Dessert_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Dessert_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Fish_MasterArgs = {
  objects: Array<Custom_Fish_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Fish_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Fish_Master_OneArgs = {
  object: Custom_Fish_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Fish_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Meat_MasterArgs = {
  objects: Array<Custom_Meat_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Meat_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Meat_Master_OneArgs = {
  object: Custom_Meat_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Meat_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Other_MasterArgs = {
  objects: Array<Custom_Other_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Other_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Other_Master_OneArgs = {
  object: Custom_Other_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Other_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Protein_Source_MasterArgs = {
  objects: Array<Custom_Protein_Source_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Protein_Source_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Protein_Source_Master_OneArgs = {
  object: Custom_Protein_Source_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Protein_Source_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Seasoning_MasterArgs = {
  objects: Array<Custom_Seasoning_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Seasoning_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Seasoning_Master_OneArgs = {
  object: Custom_Seasoning_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Seasoning_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Spice_MasterArgs = {
  objects: Array<Custom_Spice_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Spice_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Spice_Master_OneArgs = {
  object: Custom_Spice_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Spice_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Staple_Food_MasterArgs = {
  objects: Array<Custom_Staple_Food_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Staple_Food_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Staple_Food_Master_OneArgs = {
  object: Custom_Staple_Food_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Staple_Food_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Vegetable_MasterArgs = {
  objects: Array<Custom_Vegetable_Master_Insert_Input>;
  on_conflict?: InputMaybe<Custom_Vegetable_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Custom_Vegetable_Master_OneArgs = {
  object: Custom_Vegetable_Master_Insert_Input;
  on_conflict?: InputMaybe<Custom_Vegetable_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dessert_MasterArgs = {
  objects: Array<Dessert_Master_Insert_Input>;
  on_conflict?: InputMaybe<Dessert_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dessert_Master_OneArgs = {
  object: Dessert_Master_Insert_Input;
  on_conflict?: InputMaybe<Dessert_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dessert_StocksArgs = {
  objects: Array<Dessert_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Dessert_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dessert_Stocks_OneArgs = {
  object: Dessert_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Dessert_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fish_MasterArgs = {
  objects: Array<Fish_Master_Insert_Input>;
  on_conflict?: InputMaybe<Fish_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fish_Master_OneArgs = {
  object: Fish_Master_Insert_Input;
  on_conflict?: InputMaybe<Fish_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fish_StocksArgs = {
  objects: Array<Fish_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Fish_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fish_Stocks_OneArgs = {
  object: Fish_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Fish_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MaterialsArgs = {
  objects: Array<Materials_Insert_Input>;
  on_conflict?: InputMaybe<Materials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Materials_OneArgs = {
  object: Materials_Insert_Input;
  on_conflict?: InputMaybe<Materials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meat_MasterArgs = {
  objects: Array<Meat_Master_Insert_Input>;
  on_conflict?: InputMaybe<Meat_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meat_Master_OneArgs = {
  object: Meat_Master_Insert_Input;
  on_conflict?: InputMaybe<Meat_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meat_StocksArgs = {
  objects: Array<Meat_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Meat_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meat_Stocks_OneArgs = {
  object: Meat_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Meat_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_MasterArgs = {
  objects: Array<Other_Master_Insert_Input>;
  on_conflict?: InputMaybe<Other_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_Master_OneArgs = {
  object: Other_Master_Insert_Input;
  on_conflict?: InputMaybe<Other_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_StocksArgs = {
  objects: Array<Other_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Other_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_Stocks_OneArgs = {
  object: Other_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Other_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protein_Source_MasterArgs = {
  objects: Array<Protein_Source_Master_Insert_Input>;
  on_conflict?: InputMaybe<Protein_Source_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protein_Source_Master_OneArgs = {
  object: Protein_Source_Master_Insert_Input;
  on_conflict?: InputMaybe<Protein_Source_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protein_Source_StocksArgs = {
  objects: Array<Protein_Source_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Protein_Source_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protein_Source_Stocks_OneArgs = {
  object: Protein_Source_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Protein_Source_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_MaterialsArgs = {
  objects: Array<Recipe_Materials_Insert_Input>;
  on_conflict?: InputMaybe<Recipe_Materials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_Materials_OneArgs = {
  object: Recipe_Materials_Insert_Input;
  on_conflict?: InputMaybe<Recipe_Materials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_StepsArgs = {
  objects: Array<Recipe_Steps_Insert_Input>;
  on_conflict?: InputMaybe<Recipe_Steps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_Steps_OneArgs = {
  object: Recipe_Steps_Insert_Input;
  on_conflict?: InputMaybe<Recipe_Steps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecipesArgs = {
  objects: Array<Recipes_Insert_Input>;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipes_OneArgs = {
  object: Recipes_Insert_Input;
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasoning_MasterArgs = {
  objects: Array<Seasoning_Master_Insert_Input>;
  on_conflict?: InputMaybe<Seasoning_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasoning_Master_OneArgs = {
  object: Seasoning_Master_Insert_Input;
  on_conflict?: InputMaybe<Seasoning_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasoning_StocksArgs = {
  objects: Array<Seasoning_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Seasoning_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasoning_Stocks_OneArgs = {
  object: Seasoning_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Seasoning_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shopping_MemoArgs = {
  objects: Array<Shopping_Memo_Insert_Input>;
  on_conflict?: InputMaybe<Shopping_Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shopping_Memo_OneArgs = {
  object: Shopping_Memo_Insert_Input;
  on_conflict?: InputMaybe<Shopping_Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spice_MasterArgs = {
  objects: Array<Spice_Master_Insert_Input>;
  on_conflict?: InputMaybe<Spice_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spice_Master_OneArgs = {
  object: Spice_Master_Insert_Input;
  on_conflict?: InputMaybe<Spice_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spice_StocksArgs = {
  objects: Array<Spice_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Spice_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spice_Stocks_OneArgs = {
  object: Spice_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Spice_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staple_Food_MasterArgs = {
  objects: Array<Staple_Food_Master_Insert_Input>;
  on_conflict?: InputMaybe<Staple_Food_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staple_Food_Master_OneArgs = {
  object: Staple_Food_Master_Insert_Input;
  on_conflict?: InputMaybe<Staple_Food_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staple_Food_StocksArgs = {
  objects: Array<Staple_Food_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Staple_Food_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staple_Food_Stocks_OneArgs = {
  object: Staple_Food_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Staple_Food_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_MasterArgs = {
  objects: Array<Unit_Master_Insert_Input>;
  on_conflict?: InputMaybe<Unit_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_Master_OneArgs = {
  object: Unit_Master_Insert_Input;
  on_conflict?: InputMaybe<Unit_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vegetable_MasterArgs = {
  objects: Array<Vegetable_Master_Insert_Input>;
  on_conflict?: InputMaybe<Vegetable_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vegetable_Master_OneArgs = {
  object: Vegetable_Master_Insert_Input;
  on_conflict?: InputMaybe<Vegetable_Master_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vegetable_StocksArgs = {
  objects: Array<Vegetable_Stocks_Insert_Input>;
  on_conflict?: InputMaybe<Vegetable_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vegetable_Stocks_OneArgs = {
  object: Vegetable_Stocks_Insert_Input;
  on_conflict?: InputMaybe<Vegetable_Stocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Dessert_MasterArgs = {
  _inc?: InputMaybe<Custom_Dessert_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Dessert_Master_Set_Input>;
  where: Custom_Dessert_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Dessert_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Dessert_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Dessert_Master_Set_Input>;
  pk_columns: Custom_Dessert_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Dessert_Master_ManyArgs = {
  updates: Array<Custom_Dessert_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Fish_MasterArgs = {
  _inc?: InputMaybe<Custom_Fish_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Fish_Master_Set_Input>;
  where: Custom_Fish_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Fish_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Fish_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Fish_Master_Set_Input>;
  pk_columns: Custom_Fish_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Fish_Master_ManyArgs = {
  updates: Array<Custom_Fish_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Meat_MasterArgs = {
  _inc?: InputMaybe<Custom_Meat_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Meat_Master_Set_Input>;
  where: Custom_Meat_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Meat_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Meat_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Meat_Master_Set_Input>;
  pk_columns: Custom_Meat_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Meat_Master_ManyArgs = {
  updates: Array<Custom_Meat_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Other_MasterArgs = {
  _inc?: InputMaybe<Custom_Other_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Other_Master_Set_Input>;
  where: Custom_Other_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Other_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Other_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Other_Master_Set_Input>;
  pk_columns: Custom_Other_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Other_Master_ManyArgs = {
  updates: Array<Custom_Other_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Protein_Source_MasterArgs = {
  _inc?: InputMaybe<Custom_Protein_Source_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Protein_Source_Master_Set_Input>;
  where: Custom_Protein_Source_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Protein_Source_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Protein_Source_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Protein_Source_Master_Set_Input>;
  pk_columns: Custom_Protein_Source_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Protein_Source_Master_ManyArgs = {
  updates: Array<Custom_Protein_Source_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Seasoning_MasterArgs = {
  _inc?: InputMaybe<Custom_Seasoning_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Seasoning_Master_Set_Input>;
  where: Custom_Seasoning_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Seasoning_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Seasoning_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Seasoning_Master_Set_Input>;
  pk_columns: Custom_Seasoning_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Seasoning_Master_ManyArgs = {
  updates: Array<Custom_Seasoning_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Spice_MasterArgs = {
  _inc?: InputMaybe<Custom_Spice_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Spice_Master_Set_Input>;
  where: Custom_Spice_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Spice_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Spice_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Spice_Master_Set_Input>;
  pk_columns: Custom_Spice_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Spice_Master_ManyArgs = {
  updates: Array<Custom_Spice_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Staple_Food_MasterArgs = {
  _inc?: InputMaybe<Custom_Staple_Food_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Staple_Food_Master_Set_Input>;
  where: Custom_Staple_Food_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Staple_Food_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Staple_Food_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Staple_Food_Master_Set_Input>;
  pk_columns: Custom_Staple_Food_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Staple_Food_Master_ManyArgs = {
  updates: Array<Custom_Staple_Food_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Vegetable_MasterArgs = {
  _inc?: InputMaybe<Custom_Vegetable_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Vegetable_Master_Set_Input>;
  where: Custom_Vegetable_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Vegetable_Master_By_PkArgs = {
  _inc?: InputMaybe<Custom_Vegetable_Master_Inc_Input>;
  _set?: InputMaybe<Custom_Vegetable_Master_Set_Input>;
  pk_columns: Custom_Vegetable_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Custom_Vegetable_Master_ManyArgs = {
  updates: Array<Custom_Vegetable_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_MasterArgs = {
  _inc?: InputMaybe<Dessert_Master_Inc_Input>;
  _set?: InputMaybe<Dessert_Master_Set_Input>;
  where: Dessert_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_Master_By_PkArgs = {
  _inc?: InputMaybe<Dessert_Master_Inc_Input>;
  _set?: InputMaybe<Dessert_Master_Set_Input>;
  pk_columns: Dessert_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_Master_ManyArgs = {
  updates: Array<Dessert_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_StocksArgs = {
  _inc?: InputMaybe<Dessert_Stocks_Inc_Input>;
  _set?: InputMaybe<Dessert_Stocks_Set_Input>;
  where: Dessert_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Dessert_Stocks_Inc_Input>;
  _set?: InputMaybe<Dessert_Stocks_Set_Input>;
  pk_columns: Dessert_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dessert_Stocks_ManyArgs = {
  updates: Array<Dessert_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_MasterArgs = {
  _inc?: InputMaybe<Fish_Master_Inc_Input>;
  _set?: InputMaybe<Fish_Master_Set_Input>;
  where: Fish_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_Master_By_PkArgs = {
  _inc?: InputMaybe<Fish_Master_Inc_Input>;
  _set?: InputMaybe<Fish_Master_Set_Input>;
  pk_columns: Fish_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_Master_ManyArgs = {
  updates: Array<Fish_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_StocksArgs = {
  _inc?: InputMaybe<Fish_Stocks_Inc_Input>;
  _set?: InputMaybe<Fish_Stocks_Set_Input>;
  where: Fish_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Fish_Stocks_Inc_Input>;
  _set?: InputMaybe<Fish_Stocks_Set_Input>;
  pk_columns: Fish_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fish_Stocks_ManyArgs = {
  updates: Array<Fish_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MaterialsArgs = {
  _set?: InputMaybe<Materials_Set_Input>;
  where: Materials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Materials_By_PkArgs = {
  _set?: InputMaybe<Materials_Set_Input>;
  pk_columns: Materials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Materials_ManyArgs = {
  updates: Array<Materials_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_MasterArgs = {
  _inc?: InputMaybe<Meat_Master_Inc_Input>;
  _set?: InputMaybe<Meat_Master_Set_Input>;
  where: Meat_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_Master_By_PkArgs = {
  _inc?: InputMaybe<Meat_Master_Inc_Input>;
  _set?: InputMaybe<Meat_Master_Set_Input>;
  pk_columns: Meat_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_Master_ManyArgs = {
  updates: Array<Meat_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_StocksArgs = {
  _inc?: InputMaybe<Meat_Stocks_Inc_Input>;
  _set?: InputMaybe<Meat_Stocks_Set_Input>;
  where: Meat_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Meat_Stocks_Inc_Input>;
  _set?: InputMaybe<Meat_Stocks_Set_Input>;
  pk_columns: Meat_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meat_Stocks_ManyArgs = {
  updates: Array<Meat_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Other_MasterArgs = {
  _inc?: InputMaybe<Other_Master_Inc_Input>;
  _set?: InputMaybe<Other_Master_Set_Input>;
  where: Other_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Other_Master_By_PkArgs = {
  _inc?: InputMaybe<Other_Master_Inc_Input>;
  _set?: InputMaybe<Other_Master_Set_Input>;
  pk_columns: Other_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Other_Master_ManyArgs = {
  updates: Array<Other_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Other_StocksArgs = {
  _inc?: InputMaybe<Other_Stocks_Inc_Input>;
  _set?: InputMaybe<Other_Stocks_Set_Input>;
  where: Other_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Other_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Other_Stocks_Inc_Input>;
  _set?: InputMaybe<Other_Stocks_Set_Input>;
  pk_columns: Other_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Other_Stocks_ManyArgs = {
  updates: Array<Other_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_MasterArgs = {
  _inc?: InputMaybe<Protein_Source_Master_Inc_Input>;
  _set?: InputMaybe<Protein_Source_Master_Set_Input>;
  where: Protein_Source_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_Master_By_PkArgs = {
  _inc?: InputMaybe<Protein_Source_Master_Inc_Input>;
  _set?: InputMaybe<Protein_Source_Master_Set_Input>;
  pk_columns: Protein_Source_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_Master_ManyArgs = {
  updates: Array<Protein_Source_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_StocksArgs = {
  _inc?: InputMaybe<Protein_Source_Stocks_Inc_Input>;
  _set?: InputMaybe<Protein_Source_Stocks_Set_Input>;
  where: Protein_Source_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Protein_Source_Stocks_Inc_Input>;
  _set?: InputMaybe<Protein_Source_Stocks_Set_Input>;
  pk_columns: Protein_Source_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Protein_Source_Stocks_ManyArgs = {
  updates: Array<Protein_Source_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_MaterialsArgs = {
  _inc?: InputMaybe<Recipe_Materials_Inc_Input>;
  _set?: InputMaybe<Recipe_Materials_Set_Input>;
  where: Recipe_Materials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Materials_By_PkArgs = {
  _inc?: InputMaybe<Recipe_Materials_Inc_Input>;
  _set?: InputMaybe<Recipe_Materials_Set_Input>;
  pk_columns: Recipe_Materials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Materials_ManyArgs = {
  updates: Array<Recipe_Materials_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_StepsArgs = {
  _set?: InputMaybe<Recipe_Steps_Set_Input>;
  where: Recipe_Steps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Steps_By_PkArgs = {
  _set?: InputMaybe<Recipe_Steps_Set_Input>;
  pk_columns: Recipe_Steps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Steps_ManyArgs = {
  updates: Array<Recipe_Steps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RecipesArgs = {
  _set?: InputMaybe<Recipes_Set_Input>;
  where: Recipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipes_By_PkArgs = {
  _set?: InputMaybe<Recipes_Set_Input>;
  pk_columns: Recipes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recipes_ManyArgs = {
  updates: Array<Recipes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_MasterArgs = {
  _inc?: InputMaybe<Seasoning_Master_Inc_Input>;
  _set?: InputMaybe<Seasoning_Master_Set_Input>;
  where: Seasoning_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_Master_By_PkArgs = {
  _inc?: InputMaybe<Seasoning_Master_Inc_Input>;
  _set?: InputMaybe<Seasoning_Master_Set_Input>;
  pk_columns: Seasoning_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_Master_ManyArgs = {
  updates: Array<Seasoning_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_StocksArgs = {
  _inc?: InputMaybe<Seasoning_Stocks_Inc_Input>;
  _set?: InputMaybe<Seasoning_Stocks_Set_Input>;
  where: Seasoning_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Seasoning_Stocks_Inc_Input>;
  _set?: InputMaybe<Seasoning_Stocks_Set_Input>;
  pk_columns: Seasoning_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Seasoning_Stocks_ManyArgs = {
  updates: Array<Seasoning_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Shopping_MemoArgs = {
  _inc?: InputMaybe<Shopping_Memo_Inc_Input>;
  _set?: InputMaybe<Shopping_Memo_Set_Input>;
  where: Shopping_Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shopping_Memo_By_PkArgs = {
  _inc?: InputMaybe<Shopping_Memo_Inc_Input>;
  _set?: InputMaybe<Shopping_Memo_Set_Input>;
  pk_columns: Shopping_Memo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shopping_Memo_ManyArgs = {
  updates: Array<Shopping_Memo_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_MasterArgs = {
  _inc?: InputMaybe<Spice_Master_Inc_Input>;
  _set?: InputMaybe<Spice_Master_Set_Input>;
  where: Spice_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_Master_By_PkArgs = {
  _inc?: InputMaybe<Spice_Master_Inc_Input>;
  _set?: InputMaybe<Spice_Master_Set_Input>;
  pk_columns: Spice_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_Master_ManyArgs = {
  updates: Array<Spice_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_StocksArgs = {
  _inc?: InputMaybe<Spice_Stocks_Inc_Input>;
  _set?: InputMaybe<Spice_Stocks_Set_Input>;
  where: Spice_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Spice_Stocks_Inc_Input>;
  _set?: InputMaybe<Spice_Stocks_Set_Input>;
  pk_columns: Spice_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Spice_Stocks_ManyArgs = {
  updates: Array<Spice_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_MasterArgs = {
  _inc?: InputMaybe<Staple_Food_Master_Inc_Input>;
  _set?: InputMaybe<Staple_Food_Master_Set_Input>;
  where: Staple_Food_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_Master_By_PkArgs = {
  _inc?: InputMaybe<Staple_Food_Master_Inc_Input>;
  _set?: InputMaybe<Staple_Food_Master_Set_Input>;
  pk_columns: Staple_Food_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_Master_ManyArgs = {
  updates: Array<Staple_Food_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_StocksArgs = {
  _inc?: InputMaybe<Staple_Food_Stocks_Inc_Input>;
  _set?: InputMaybe<Staple_Food_Stocks_Set_Input>;
  where: Staple_Food_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Staple_Food_Stocks_Inc_Input>;
  _set?: InputMaybe<Staple_Food_Stocks_Set_Input>;
  pk_columns: Staple_Food_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staple_Food_Stocks_ManyArgs = {
  updates: Array<Staple_Food_Stocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_MasterArgs = {
  _inc?: InputMaybe<Unit_Master_Inc_Input>;
  _set?: InputMaybe<Unit_Master_Set_Input>;
  where: Unit_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Master_By_PkArgs = {
  _inc?: InputMaybe<Unit_Master_Inc_Input>;
  _set?: InputMaybe<Unit_Master_Set_Input>;
  pk_columns: Unit_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Master_ManyArgs = {
  updates: Array<Unit_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_MasterArgs = {
  _inc?: InputMaybe<Vegetable_Master_Inc_Input>;
  _set?: InputMaybe<Vegetable_Master_Set_Input>;
  where: Vegetable_Master_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_Master_By_PkArgs = {
  _inc?: InputMaybe<Vegetable_Master_Inc_Input>;
  _set?: InputMaybe<Vegetable_Master_Set_Input>;
  pk_columns: Vegetable_Master_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_Master_ManyArgs = {
  updates: Array<Vegetable_Master_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_StocksArgs = {
  _inc?: InputMaybe<Vegetable_Stocks_Inc_Input>;
  _set?: InputMaybe<Vegetable_Stocks_Set_Input>;
  where: Vegetable_Stocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_Stocks_By_PkArgs = {
  _inc?: InputMaybe<Vegetable_Stocks_Inc_Input>;
  _set?: InputMaybe<Vegetable_Stocks_Set_Input>;
  pk_columns: Vegetable_Stocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vegetable_Stocks_ManyArgs = {
  updates: Array<Vegetable_Stocks_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** その他マスタデータ */
export type Other_Master = {
  __typename?: 'other_master';
  /** 賞味期限の基準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  other_id: Scalars['uuid']['output'];
  /** An object relationship */
  other_master_other_stocks?: Maybe<Other_Stocks>;
  /** An object relationship */
  other_master_unit_master?: Maybe<Unit_Master>;
  /** その他名（ひらがな） */
  other_name: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "other_master" */
export type Other_Master_Aggregate = {
  __typename?: 'other_master_aggregate';
  aggregate?: Maybe<Other_Master_Aggregate_Fields>;
  nodes: Array<Other_Master>;
};

/** aggregate fields of "other_master" */
export type Other_Master_Aggregate_Fields = {
  __typename?: 'other_master_aggregate_fields';
  avg?: Maybe<Other_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Other_Master_Max_Fields>;
  min?: Maybe<Other_Master_Min_Fields>;
  stddev?: Maybe<Other_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Other_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Other_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Other_Master_Sum_Fields>;
  var_pop?: Maybe<Other_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Other_Master_Var_Samp_Fields>;
  variance?: Maybe<Other_Master_Variance_Fields>;
};


/** aggregate fields of "other_master" */
export type Other_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Other_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Other_Master_Avg_Fields = {
  __typename?: 'other_master_avg_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "other_master". All fields are combined with a logical 'AND'. */
export type Other_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Other_Master_Bool_Exp>>;
  _not?: InputMaybe<Other_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Other_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  other_id?: InputMaybe<Uuid_Comparison_Exp>;
  other_master_other_stocks?: InputMaybe<Other_Stocks_Bool_Exp>;
  other_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  other_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "other_master" */
export enum Other_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  OtherMasterDisplayNameKey = 'other_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  OtherMasterImageUriKey = 'other_master_image_uri_key',
  /** unique or primary key constraint on columns "other_name" */
  OtherMasterOtherNameKey = 'other_master_other_name_key',
  /** unique or primary key constraint on columns "other_id" */
  OtherMasterPkey = 'other_master_pkey'
}

/** input type for incrementing numeric columns in table "other_master" */
export type Other_Master_Inc_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "other_master" */
export type Other_Master_Insert_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  other_master_other_stocks?: InputMaybe<Other_Stocks_Obj_Rel_Insert_Input>;
  other_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  /** その他名（ひらがな） */
  other_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Other_Master_Max_Fields = {
  __typename?: 'other_master_max_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  other_id?: Maybe<Scalars['uuid']['output']>;
  /** その他名（ひらがな） */
  other_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Other_Master_Min_Fields = {
  __typename?: 'other_master_min_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  other_id?: Maybe<Scalars['uuid']['output']>;
  /** その他名（ひらがな） */
  other_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "other_master" */
export type Other_Master_Mutation_Response = {
  __typename?: 'other_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Other_Master>;
};

/** input type for inserting object relation for remote table "other_master" */
export type Other_Master_Obj_Rel_Insert_Input = {
  data: Other_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Other_Master_On_Conflict>;
};

/** on_conflict condition type for table "other_master" */
export type Other_Master_On_Conflict = {
  constraint: Other_Master_Constraint;
  update_columns?: Array<Other_Master_Update_Column>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "other_master". */
export type Other_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  other_id?: InputMaybe<Order_By>;
  other_master_other_stocks?: InputMaybe<Other_Stocks_Order_By>;
  other_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  other_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: other_master */
export type Other_Master_Pk_Columns_Input = {
  other_id: Scalars['uuid']['input'];
};

/** select columns of table "other_master" */
export enum Other_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  OtherId = 'other_id',
  /** column name */
  OtherName = 'other_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "other_master" */
export type Other_Master_Set_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  /** その他名（ひらがな） */
  other_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Other_Master_Stddev_Fields = {
  __typename?: 'other_master_stddev_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Other_Master_Stddev_Pop_Fields = {
  __typename?: 'other_master_stddev_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Other_Master_Stddev_Samp_Fields = {
  __typename?: 'other_master_stddev_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "other_master" */
export type Other_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Other_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Other_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  /** その他名（ひらがな） */
  other_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Other_Master_Sum_Fields = {
  __typename?: 'other_master_sum_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "other_master" */
export enum Other_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  OtherId = 'other_id',
  /** column name */
  OtherName = 'other_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Other_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Other_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Other_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Other_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Other_Master_Var_Pop_Fields = {
  __typename?: 'other_master_var_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Other_Master_Var_Samp_Fields = {
  __typename?: 'other_master_var_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Other_Master_Variance_Fields = {
  __typename?: 'other_master_variance_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとのその他ストック */
export type Other_Stocks = {
  __typename?: 'other_stocks';
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  other_id: Scalars['uuid']['output'];
  /** An object relationship */
  other_stocks_custom_other_master?: Maybe<Custom_Other_Master>;
  /** An object relationship */
  other_stocks_other_master?: Maybe<Other_Master>;
  /** An object relationship */
  other_stocks_users?: Maybe<Users>;
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "other_stocks" */
export type Other_Stocks_Aggregate = {
  __typename?: 'other_stocks_aggregate';
  aggregate?: Maybe<Other_Stocks_Aggregate_Fields>;
  nodes: Array<Other_Stocks>;
};

export type Other_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Other_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Other_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Other_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Other_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Other_Stocks_Select_Column_Other_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Other_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Other_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Other_Stocks_Select_Column_Other_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Other_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Other_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Other_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "other_stocks" */
export type Other_Stocks_Aggregate_Fields = {
  __typename?: 'other_stocks_aggregate_fields';
  avg?: Maybe<Other_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Other_Stocks_Max_Fields>;
  min?: Maybe<Other_Stocks_Min_Fields>;
  stddev?: Maybe<Other_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Other_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Other_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Other_Stocks_Sum_Fields>;
  var_pop?: Maybe<Other_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Other_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Other_Stocks_Variance_Fields>;
};


/** aggregate fields of "other_stocks" */
export type Other_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "other_stocks" */
export type Other_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Other_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Other_Stocks_Max_Order_By>;
  min?: InputMaybe<Other_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Other_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Other_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Other_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Other_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Other_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Other_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Other_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "other_stocks" */
export type Other_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Other_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Other_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Other_Stocks_Avg_Fields = {
  __typename?: 'other_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "other_stocks" */
export type Other_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "other_stocks". All fields are combined with a logical 'AND'. */
export type Other_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Other_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Other_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Other_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  other_id?: InputMaybe<Uuid_Comparison_Exp>;
  other_stocks_custom_other_master?: InputMaybe<Custom_Other_Master_Bool_Exp>;
  other_stocks_other_master?: InputMaybe<Other_Master_Bool_Exp>;
  other_stocks_users?: InputMaybe<Users_Bool_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "other_stocks" */
export enum Other_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  OtherStocksPkey = 'other_stocks_pkey'
}

/** input type for incrementing numeric columns in table "other_stocks" */
export type Other_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "other_stocks" */
export type Other_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  other_stocks_custom_other_master?: InputMaybe<Custom_Other_Master_Obj_Rel_Insert_Input>;
  other_stocks_other_master?: InputMaybe<Other_Master_Obj_Rel_Insert_Input>;
  other_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Other_Stocks_Max_Fields = {
  __typename?: 'other_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  other_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "other_stocks" */
export type Other_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  other_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Other_Stocks_Min_Fields = {
  __typename?: 'other_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  other_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "other_stocks" */
export type Other_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  other_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "other_stocks" */
export type Other_Stocks_Mutation_Response = {
  __typename?: 'other_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Other_Stocks>;
};

/** input type for inserting object relation for remote table "other_stocks" */
export type Other_Stocks_Obj_Rel_Insert_Input = {
  data: Other_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Other_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "other_stocks" */
export type Other_Stocks_On_Conflict = {
  constraint: Other_Stocks_Constraint;
  update_columns?: Array<Other_Stocks_Update_Column>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "other_stocks". */
export type Other_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  other_id?: InputMaybe<Order_By>;
  other_stocks_custom_other_master?: InputMaybe<Custom_Other_Master_Order_By>;
  other_stocks_other_master?: InputMaybe<Other_Master_Order_By>;
  other_stocks_users?: InputMaybe<Users_Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: other_stocks */
export type Other_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "other_stocks" */
export enum Other_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  OtherId = 'other_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "other_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "other_stocks" */
export enum Other_Stocks_Select_Column_Other_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "other_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "other_stocks" */
export enum Other_Stocks_Select_Column_Other_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "other_stocks" */
export type Other_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Other_Stocks_Stddev_Fields = {
  __typename?: 'other_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "other_stocks" */
export type Other_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Other_Stocks_Stddev_Pop_Fields = {
  __typename?: 'other_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "other_stocks" */
export type Other_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Other_Stocks_Stddev_Samp_Fields = {
  __typename?: 'other_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "other_stocks" */
export type Other_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "other_stocks" */
export type Other_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Other_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Other_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  other_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Other_Stocks_Sum_Fields = {
  __typename?: 'other_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "other_stocks" */
export type Other_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "other_stocks" */
export enum Other_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  OtherId = 'other_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Other_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Other_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Other_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Other_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Other_Stocks_Var_Pop_Fields = {
  __typename?: 'other_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "other_stocks" */
export type Other_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Other_Stocks_Var_Samp_Fields = {
  __typename?: 'other_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "other_stocks" */
export type Other_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Other_Stocks_Variance_Fields = {
  __typename?: 'other_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "other_stocks" */
export type Other_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** 卵・乳・豆マスタデータ */
export type Protein_Source_Master = {
  __typename?: 'protein_source_master';
  /** 賞味期限の基準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  protein_source_id: Scalars['uuid']['output'];
  /** An object relationship */
  protein_source_master_protein_source_stocks?: Maybe<Protein_Source_Stocks>;
  /** An object relationship */
  protein_source_master_unit_master?: Maybe<Unit_Master>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "protein_source_master" */
export type Protein_Source_Master_Aggregate = {
  __typename?: 'protein_source_master_aggregate';
  aggregate?: Maybe<Protein_Source_Master_Aggregate_Fields>;
  nodes: Array<Protein_Source_Master>;
};

/** aggregate fields of "protein_source_master" */
export type Protein_Source_Master_Aggregate_Fields = {
  __typename?: 'protein_source_master_aggregate_fields';
  avg?: Maybe<Protein_Source_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Protein_Source_Master_Max_Fields>;
  min?: Maybe<Protein_Source_Master_Min_Fields>;
  stddev?: Maybe<Protein_Source_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Protein_Source_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protein_Source_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Protein_Source_Master_Sum_Fields>;
  var_pop?: Maybe<Protein_Source_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Protein_Source_Master_Var_Samp_Fields>;
  variance?: Maybe<Protein_Source_Master_Variance_Fields>;
};


/** aggregate fields of "protein_source_master" */
export type Protein_Source_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protein_Source_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Protein_Source_Master_Avg_Fields = {
  __typename?: 'protein_source_master_avg_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "protein_source_master". All fields are combined with a logical 'AND'. */
export type Protein_Source_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Protein_Source_Master_Bool_Exp>>;
  _not?: InputMaybe<Protein_Source_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Protein_Source_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  protein_source_id?: InputMaybe<Uuid_Comparison_Exp>;
  protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  protein_source_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  protein_source_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "protein_source_master" */
export enum Protein_Source_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  ProteinSourceMasterDisplayNameKey = 'protein_source_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  ProteinSourceMasterImageUriKey = 'protein_source_master_image_uri_key',
  /** unique or primary key constraint on columns "protein_source_id" */
  ProteinSourceMasterPkey = 'protein_source_master_pkey',
  /** unique or primary key constraint on columns "protein_source_name" */
  ProteinSourceMasterProteinSourceNameKey = 'protein_source_master_protein_source_name_key'
}

/** input type for incrementing numeric columns in table "protein_source_master" */
export type Protein_Source_Master_Inc_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "protein_source_master" */
export type Protein_Source_Master_Insert_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Obj_Rel_Insert_Input>;
  protein_source_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Protein_Source_Master_Max_Fields = {
  __typename?: 'protein_source_master_max_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  protein_source_id?: Maybe<Scalars['uuid']['output']>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Protein_Source_Master_Min_Fields = {
  __typename?: 'protein_source_master_min_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  protein_source_id?: Maybe<Scalars['uuid']['output']>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "protein_source_master" */
export type Protein_Source_Master_Mutation_Response = {
  __typename?: 'protein_source_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Protein_Source_Master>;
};

/** input type for inserting object relation for remote table "protein_source_master" */
export type Protein_Source_Master_Obj_Rel_Insert_Input = {
  data: Protein_Source_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Protein_Source_Master_On_Conflict>;
};

/** on_conflict condition type for table "protein_source_master" */
export type Protein_Source_Master_On_Conflict = {
  constraint: Protein_Source_Master_Constraint;
  update_columns?: Array<Protein_Source_Master_Update_Column>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "protein_source_master". */
export type Protein_Source_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  protein_source_id?: InputMaybe<Order_By>;
  protein_source_master_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Order_By>;
  protein_source_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  protein_source_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: protein_source_master */
export type Protein_Source_Master_Pk_Columns_Input = {
  protein_source_id: Scalars['uuid']['input'];
};

/** select columns of table "protein_source_master" */
export enum Protein_Source_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  ProteinSourceId = 'protein_source_id',
  /** column name */
  ProteinSourceName = 'protein_source_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "protein_source_master" */
export type Protein_Source_Master_Set_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Protein_Source_Master_Stddev_Fields = {
  __typename?: 'protein_source_master_stddev_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Protein_Source_Master_Stddev_Pop_Fields = {
  __typename?: 'protein_source_master_stddev_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Protein_Source_Master_Stddev_Samp_Fields = {
  __typename?: 'protein_source_master_stddev_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "protein_source_master" */
export type Protein_Source_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protein_Source_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Protein_Source_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 卵・乳・豆名（ひらがな） */
  protein_source_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Protein_Source_Master_Sum_Fields = {
  __typename?: 'protein_source_master_sum_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "protein_source_master" */
export enum Protein_Source_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  ProteinSourceId = 'protein_source_id',
  /** column name */
  ProteinSourceName = 'protein_source_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Protein_Source_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Protein_Source_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Protein_Source_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Protein_Source_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Protein_Source_Master_Var_Pop_Fields = {
  __typename?: 'protein_source_master_var_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Protein_Source_Master_Var_Samp_Fields = {
  __typename?: 'protein_source_master_var_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Protein_Source_Master_Variance_Fields = {
  __typename?: 'protein_source_master_variance_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの卵・乳・豆ストック */
export type Protein_Source_Stocks = {
  __typename?: 'protein_source_stocks';
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  protein_source_id: Scalars['uuid']['output'];
  /** An object relationship */
  protein_source_stocks_custom_protein_source_master?: Maybe<Custom_Protein_Source_Master>;
  /** An object relationship */
  protein_source_stocks_protein_source_master?: Maybe<Protein_Source_Master>;
  /** An object relationship */
  protein_source_stocks_users?: Maybe<Users>;
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "protein_source_stocks" */
export type Protein_Source_Stocks_Aggregate = {
  __typename?: 'protein_source_stocks_aggregate';
  aggregate?: Maybe<Protein_Source_Stocks_Aggregate_Fields>;
  nodes: Array<Protein_Source_Stocks>;
};

export type Protein_Source_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Protein_Source_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Protein_Source_Stocks_Select_Column_Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Protein_Source_Stocks_Select_Column_Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Protein_Source_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "protein_source_stocks" */
export type Protein_Source_Stocks_Aggregate_Fields = {
  __typename?: 'protein_source_stocks_aggregate_fields';
  avg?: Maybe<Protein_Source_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Protein_Source_Stocks_Max_Fields>;
  min?: Maybe<Protein_Source_Stocks_Min_Fields>;
  stddev?: Maybe<Protein_Source_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Protein_Source_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protein_Source_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Protein_Source_Stocks_Sum_Fields>;
  var_pop?: Maybe<Protein_Source_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Protein_Source_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Protein_Source_Stocks_Variance_Fields>;
};


/** aggregate fields of "protein_source_stocks" */
export type Protein_Source_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "protein_source_stocks" */
export type Protein_Source_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Protein_Source_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Protein_Source_Stocks_Max_Order_By>;
  min?: InputMaybe<Protein_Source_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Protein_Source_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Protein_Source_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Protein_Source_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Protein_Source_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Protein_Source_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Protein_Source_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Protein_Source_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "protein_source_stocks" */
export type Protein_Source_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Protein_Source_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Protein_Source_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Protein_Source_Stocks_Avg_Fields = {
  __typename?: 'protein_source_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "protein_source_stocks". All fields are combined with a logical 'AND'. */
export type Protein_Source_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Protein_Source_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Protein_Source_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  protein_source_id?: InputMaybe<Uuid_Comparison_Exp>;
  protein_source_stocks_custom_protein_source_master?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
  protein_source_stocks_protein_source_master?: InputMaybe<Protein_Source_Master_Bool_Exp>;
  protein_source_stocks_users?: InputMaybe<Users_Bool_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "protein_source_stocks" */
export enum Protein_Source_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  ProteinSourceStocksPkey = 'protein_source_stocks_pkey'
}

/** input type for incrementing numeric columns in table "protein_source_stocks" */
export type Protein_Source_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "protein_source_stocks" */
export type Protein_Source_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  protein_source_stocks_custom_protein_source_master?: InputMaybe<Custom_Protein_Source_Master_Obj_Rel_Insert_Input>;
  protein_source_stocks_protein_source_master?: InputMaybe<Protein_Source_Master_Obj_Rel_Insert_Input>;
  protein_source_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Protein_Source_Stocks_Max_Fields = {
  __typename?: 'protein_source_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  protein_source_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  protein_source_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Protein_Source_Stocks_Min_Fields = {
  __typename?: 'protein_source_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  protein_source_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  protein_source_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "protein_source_stocks" */
export type Protein_Source_Stocks_Mutation_Response = {
  __typename?: 'protein_source_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Protein_Source_Stocks>;
};

/** input type for inserting object relation for remote table "protein_source_stocks" */
export type Protein_Source_Stocks_Obj_Rel_Insert_Input = {
  data: Protein_Source_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Protein_Source_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "protein_source_stocks" */
export type Protein_Source_Stocks_On_Conflict = {
  constraint: Protein_Source_Stocks_Constraint;
  update_columns?: Array<Protein_Source_Stocks_Update_Column>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "protein_source_stocks". */
export type Protein_Source_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  protein_source_id?: InputMaybe<Order_By>;
  protein_source_stocks_custom_protein_source_master?: InputMaybe<Custom_Protein_Source_Master_Order_By>;
  protein_source_stocks_protein_source_master?: InputMaybe<Protein_Source_Master_Order_By>;
  protein_source_stocks_users?: InputMaybe<Users_Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: protein_source_stocks */
export type Protein_Source_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "protein_source_stocks" */
export enum Protein_Source_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  ProteinSourceId = 'protein_source_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "protein_source_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "protein_source_stocks" */
export enum Protein_Source_Stocks_Select_Column_Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "protein_source_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "protein_source_stocks" */
export enum Protein_Source_Stocks_Select_Column_Protein_Source_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "protein_source_stocks" */
export type Protein_Source_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Protein_Source_Stocks_Stddev_Fields = {
  __typename?: 'protein_source_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Protein_Source_Stocks_Stddev_Pop_Fields = {
  __typename?: 'protein_source_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Protein_Source_Stocks_Stddev_Samp_Fields = {
  __typename?: 'protein_source_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "protein_source_stocks" */
export type Protein_Source_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protein_Source_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Protein_Source_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  protein_source_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Protein_Source_Stocks_Sum_Fields = {
  __typename?: 'protein_source_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "protein_source_stocks" */
export enum Protein_Source_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  ProteinSourceId = 'protein_source_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Protein_Source_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Protein_Source_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Protein_Source_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Protein_Source_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Protein_Source_Stocks_Var_Pop_Fields = {
  __typename?: 'protein_source_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Protein_Source_Stocks_Var_Samp_Fields = {
  __typename?: 'protein_source_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Protein_Source_Stocks_Variance_Fields = {
  __typename?: 'protein_source_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "protein_source_stocks" */
export type Protein_Source_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "custom_dessert_master" */
  custom_dessert_master: Array<Custom_Dessert_Master>;
  /** fetch aggregated fields from the table: "custom_dessert_master" */
  custom_dessert_master_aggregate: Custom_Dessert_Master_Aggregate;
  /** fetch data from the table: "custom_dessert_master" using primary key columns */
  custom_dessert_master_by_pk?: Maybe<Custom_Dessert_Master>;
  /** fetch data from the table: "custom_fish_master" */
  custom_fish_master: Array<Custom_Fish_Master>;
  /** fetch aggregated fields from the table: "custom_fish_master" */
  custom_fish_master_aggregate: Custom_Fish_Master_Aggregate;
  /** fetch data from the table: "custom_fish_master" using primary key columns */
  custom_fish_master_by_pk?: Maybe<Custom_Fish_Master>;
  /** fetch data from the table: "custom_meat_master" */
  custom_meat_master: Array<Custom_Meat_Master>;
  /** fetch aggregated fields from the table: "custom_meat_master" */
  custom_meat_master_aggregate: Custom_Meat_Master_Aggregate;
  /** fetch data from the table: "custom_meat_master" using primary key columns */
  custom_meat_master_by_pk?: Maybe<Custom_Meat_Master>;
  /** fetch data from the table: "custom_other_master" */
  custom_other_master: Array<Custom_Other_Master>;
  /** fetch aggregated fields from the table: "custom_other_master" */
  custom_other_master_aggregate: Custom_Other_Master_Aggregate;
  /** fetch data from the table: "custom_other_master" using primary key columns */
  custom_other_master_by_pk?: Maybe<Custom_Other_Master>;
  /** fetch data from the table: "custom_protein_source_master" */
  custom_protein_source_master: Array<Custom_Protein_Source_Master>;
  /** fetch aggregated fields from the table: "custom_protein_source_master" */
  custom_protein_source_master_aggregate: Custom_Protein_Source_Master_Aggregate;
  /** fetch data from the table: "custom_protein_source_master" using primary key columns */
  custom_protein_source_master_by_pk?: Maybe<Custom_Protein_Source_Master>;
  /** fetch data from the table: "custom_seasoning_master" */
  custom_seasoning_master: Array<Custom_Seasoning_Master>;
  /** fetch aggregated fields from the table: "custom_seasoning_master" */
  custom_seasoning_master_aggregate: Custom_Seasoning_Master_Aggregate;
  /** fetch data from the table: "custom_seasoning_master" using primary key columns */
  custom_seasoning_master_by_pk?: Maybe<Custom_Seasoning_Master>;
  /** fetch data from the table: "custom_spice_master" */
  custom_spice_master: Array<Custom_Spice_Master>;
  /** fetch aggregated fields from the table: "custom_spice_master" */
  custom_spice_master_aggregate: Custom_Spice_Master_Aggregate;
  /** fetch data from the table: "custom_spice_master" using primary key columns */
  custom_spice_master_by_pk?: Maybe<Custom_Spice_Master>;
  /** fetch data from the table: "custom_staple_food_master" */
  custom_staple_food_master: Array<Custom_Staple_Food_Master>;
  /** fetch aggregated fields from the table: "custom_staple_food_master" */
  custom_staple_food_master_aggregate: Custom_Staple_Food_Master_Aggregate;
  /** fetch data from the table: "custom_staple_food_master" using primary key columns */
  custom_staple_food_master_by_pk?: Maybe<Custom_Staple_Food_Master>;
  /** fetch data from the table: "custom_vegetable_master" */
  custom_vegetable_master: Array<Custom_Vegetable_Master>;
  /** fetch aggregated fields from the table: "custom_vegetable_master" */
  custom_vegetable_master_aggregate: Custom_Vegetable_Master_Aggregate;
  /** fetch data from the table: "custom_vegetable_master" using primary key columns */
  custom_vegetable_master_by_pk?: Maybe<Custom_Vegetable_Master>;
  /** fetch data from the table: "dessert_master" */
  dessert_master: Array<Dessert_Master>;
  /** fetch aggregated fields from the table: "dessert_master" */
  dessert_master_aggregate: Dessert_Master_Aggregate;
  /** fetch data from the table: "dessert_master" using primary key columns */
  dessert_master_by_pk?: Maybe<Dessert_Master>;
  /** fetch data from the table: "dessert_stocks" */
  dessert_stocks: Array<Dessert_Stocks>;
  /** fetch aggregated fields from the table: "dessert_stocks" */
  dessert_stocks_aggregate: Dessert_Stocks_Aggregate;
  /** fetch data from the table: "dessert_stocks" using primary key columns */
  dessert_stocks_by_pk?: Maybe<Dessert_Stocks>;
  /** fetch data from the table: "fish_master" */
  fish_master: Array<Fish_Master>;
  /** fetch aggregated fields from the table: "fish_master" */
  fish_master_aggregate: Fish_Master_Aggregate;
  /** fetch data from the table: "fish_master" using primary key columns */
  fish_master_by_pk?: Maybe<Fish_Master>;
  /** fetch data from the table: "fish_stocks" */
  fish_stocks: Array<Fish_Stocks>;
  /** fetch aggregated fields from the table: "fish_stocks" */
  fish_stocks_aggregate: Fish_Stocks_Aggregate;
  /** fetch data from the table: "fish_stocks" using primary key columns */
  fish_stocks_by_pk?: Maybe<Fish_Stocks>;
  /** fetch data from the table: "materials" */
  materials: Array<Materials>;
  /** fetch aggregated fields from the table: "materials" */
  materials_aggregate: Materials_Aggregate;
  /** fetch data from the table: "materials" using primary key columns */
  materials_by_pk?: Maybe<Materials>;
  /** fetch data from the table: "meat_master" */
  meat_master: Array<Meat_Master>;
  /** fetch aggregated fields from the table: "meat_master" */
  meat_master_aggregate: Meat_Master_Aggregate;
  /** fetch data from the table: "meat_master" using primary key columns */
  meat_master_by_pk?: Maybe<Meat_Master>;
  /** fetch data from the table: "meat_stocks" */
  meat_stocks: Array<Meat_Stocks>;
  /** fetch aggregated fields from the table: "meat_stocks" */
  meat_stocks_aggregate: Meat_Stocks_Aggregate;
  /** fetch data from the table: "meat_stocks" using primary key columns */
  meat_stocks_by_pk?: Maybe<Meat_Stocks>;
  /** fetch data from the table: "other_master" */
  other_master: Array<Other_Master>;
  /** fetch aggregated fields from the table: "other_master" */
  other_master_aggregate: Other_Master_Aggregate;
  /** fetch data from the table: "other_master" using primary key columns */
  other_master_by_pk?: Maybe<Other_Master>;
  /** fetch data from the table: "other_stocks" */
  other_stocks: Array<Other_Stocks>;
  /** fetch aggregated fields from the table: "other_stocks" */
  other_stocks_aggregate: Other_Stocks_Aggregate;
  /** fetch data from the table: "other_stocks" using primary key columns */
  other_stocks_by_pk?: Maybe<Other_Stocks>;
  /** fetch data from the table: "protein_source_master" */
  protein_source_master: Array<Protein_Source_Master>;
  /** fetch aggregated fields from the table: "protein_source_master" */
  protein_source_master_aggregate: Protein_Source_Master_Aggregate;
  /** fetch data from the table: "protein_source_master" using primary key columns */
  protein_source_master_by_pk?: Maybe<Protein_Source_Master>;
  /** fetch data from the table: "protein_source_stocks" */
  protein_source_stocks: Array<Protein_Source_Stocks>;
  /** fetch aggregated fields from the table: "protein_source_stocks" */
  protein_source_stocks_aggregate: Protein_Source_Stocks_Aggregate;
  /** fetch data from the table: "protein_source_stocks" using primary key columns */
  protein_source_stocks_by_pk?: Maybe<Protein_Source_Stocks>;
  /** fetch data from the table: "recipe_materials" */
  recipe_materials: Array<Recipe_Materials>;
  /** fetch aggregated fields from the table: "recipe_materials" */
  recipe_materials_aggregate: Recipe_Materials_Aggregate;
  /** fetch data from the table: "recipe_materials" using primary key columns */
  recipe_materials_by_pk?: Maybe<Recipe_Materials>;
  /** fetch data from the table: "recipe_steps" */
  recipe_steps: Array<Recipe_Steps>;
  /** fetch aggregated fields from the table: "recipe_steps" */
  recipe_steps_aggregate: Recipe_Steps_Aggregate;
  /** fetch data from the table: "recipe_steps" using primary key columns */
  recipe_steps_by_pk?: Maybe<Recipe_Steps>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk?: Maybe<Recipes>;
  /** fetch data from the table: "seasoning_master" */
  seasoning_master: Array<Seasoning_Master>;
  /** fetch aggregated fields from the table: "seasoning_master" */
  seasoning_master_aggregate: Seasoning_Master_Aggregate;
  /** fetch data from the table: "seasoning_master" using primary key columns */
  seasoning_master_by_pk?: Maybe<Seasoning_Master>;
  /** fetch data from the table: "seasoning_stocks" */
  seasoning_stocks: Array<Seasoning_Stocks>;
  /** fetch aggregated fields from the table: "seasoning_stocks" */
  seasoning_stocks_aggregate: Seasoning_Stocks_Aggregate;
  /** fetch data from the table: "seasoning_stocks" using primary key columns */
  seasoning_stocks_by_pk?: Maybe<Seasoning_Stocks>;
  /** fetch data from the table: "shopping_memo" */
  shopping_memo: Array<Shopping_Memo>;
  /** fetch aggregated fields from the table: "shopping_memo" */
  shopping_memo_aggregate: Shopping_Memo_Aggregate;
  /** fetch data from the table: "shopping_memo" using primary key columns */
  shopping_memo_by_pk?: Maybe<Shopping_Memo>;
  /** fetch data from the table: "spice_master" */
  spice_master: Array<Spice_Master>;
  /** fetch aggregated fields from the table: "spice_master" */
  spice_master_aggregate: Spice_Master_Aggregate;
  /** fetch data from the table: "spice_master" using primary key columns */
  spice_master_by_pk?: Maybe<Spice_Master>;
  /** fetch data from the table: "spice_stocks" */
  spice_stocks: Array<Spice_Stocks>;
  /** fetch aggregated fields from the table: "spice_stocks" */
  spice_stocks_aggregate: Spice_Stocks_Aggregate;
  /** fetch data from the table: "spice_stocks" using primary key columns */
  spice_stocks_by_pk?: Maybe<Spice_Stocks>;
  /** fetch data from the table: "staple_food_master" */
  staple_food_master: Array<Staple_Food_Master>;
  /** fetch aggregated fields from the table: "staple_food_master" */
  staple_food_master_aggregate: Staple_Food_Master_Aggregate;
  /** fetch data from the table: "staple_food_master" using primary key columns */
  staple_food_master_by_pk?: Maybe<Staple_Food_Master>;
  /** fetch data from the table: "staple_food_stocks" */
  staple_food_stocks: Array<Staple_Food_Stocks>;
  /** fetch aggregated fields from the table: "staple_food_stocks" */
  staple_food_stocks_aggregate: Staple_Food_Stocks_Aggregate;
  /** fetch data from the table: "staple_food_stocks" using primary key columns */
  staple_food_stocks_by_pk?: Maybe<Staple_Food_Stocks>;
  /** fetch data from the table: "unit_master" */
  unit_master: Array<Unit_Master>;
  /** fetch aggregated fields from the table: "unit_master" */
  unit_master_aggregate: Unit_Master_Aggregate;
  /** fetch data from the table: "unit_master" using primary key columns */
  unit_master_by_pk?: Maybe<Unit_Master>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "vegetable_master" */
  vegetable_master: Array<Vegetable_Master>;
  /** fetch aggregated fields from the table: "vegetable_master" */
  vegetable_master_aggregate: Vegetable_Master_Aggregate;
  /** fetch data from the table: "vegetable_master" using primary key columns */
  vegetable_master_by_pk?: Maybe<Vegetable_Master>;
  /** fetch data from the table: "vegetable_stocks" */
  vegetable_stocks: Array<Vegetable_Stocks>;
  /** fetch aggregated fields from the table: "vegetable_stocks" */
  vegetable_stocks_aggregate: Vegetable_Stocks_Aggregate;
  /** fetch data from the table: "vegetable_stocks" using primary key columns */
  vegetable_stocks_by_pk?: Maybe<Vegetable_Stocks>;
};


export type Query_RootCustom_Dessert_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Dessert_Master_Order_By>>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};


export type Query_RootCustom_Dessert_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Dessert_Master_Order_By>>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};


export type Query_RootCustom_Dessert_Master_By_PkArgs = {
  custom_dessert_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Fish_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fish_Master_Order_By>>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};


export type Query_RootCustom_Fish_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fish_Master_Order_By>>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};


export type Query_RootCustom_Fish_Master_By_PkArgs = {
  custom_fish_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Meat_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


export type Query_RootCustom_Meat_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


export type Query_RootCustom_Meat_Master_By_PkArgs = {
  custom_meat_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Other_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Other_Master_Order_By>>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};


export type Query_RootCustom_Other_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Other_Master_Order_By>>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};


export type Query_RootCustom_Other_Master_By_PkArgs = {
  custom_other_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Protein_Source_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};


export type Query_RootCustom_Protein_Source_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};


export type Query_RootCustom_Protein_Source_Master_By_PkArgs = {
  custom_protein_source_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Seasoning_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Seasoning_Master_Order_By>>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};


export type Query_RootCustom_Seasoning_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Seasoning_Master_Order_By>>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};


export type Query_RootCustom_Seasoning_Master_By_PkArgs = {
  custom_seasoning_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Spice_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Spice_Master_Order_By>>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};


export type Query_RootCustom_Spice_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Spice_Master_Order_By>>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};


export type Query_RootCustom_Spice_Master_By_PkArgs = {
  custom_spice_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Staple_Food_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};


export type Query_RootCustom_Staple_Food_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};


export type Query_RootCustom_Staple_Food_Master_By_PkArgs = {
  custom_staple_food_id: Scalars['uuid']['input'];
};


export type Query_RootCustom_Vegetable_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


export type Query_RootCustom_Vegetable_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


export type Query_RootCustom_Vegetable_Master_By_PkArgs = {
  custom_vegetable_id: Scalars['uuid']['input'];
};


export type Query_RootDessert_MasterArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Master_Order_By>>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};


export type Query_RootDessert_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Master_Order_By>>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};


export type Query_RootDessert_Master_By_PkArgs = {
  dessert_id: Scalars['uuid']['input'];
};


export type Query_RootDessert_StocksArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


export type Query_RootDessert_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


export type Query_RootDessert_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootFish_MasterArgs = {
  distinct_on?: InputMaybe<Array<Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Master_Order_By>>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};


export type Query_RootFish_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Master_Order_By>>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};


export type Query_RootFish_Master_By_PkArgs = {
  fish_id: Scalars['uuid']['input'];
};


export type Query_RootFish_StocksArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


export type Query_RootFish_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


export type Query_RootFish_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootMaterialsArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


export type Query_RootMaterials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


export type Query_RootMaterials_By_PkArgs = {
  material_id: Scalars['uuid']['input'];
};


export type Query_RootMeat_MasterArgs = {
  distinct_on?: InputMaybe<Array<Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Master_Order_By>>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};


export type Query_RootMeat_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Master_Order_By>>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};


export type Query_RootMeat_Master_By_PkArgs = {
  meat_id: Scalars['uuid']['input'];
};


export type Query_RootMeat_StocksArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


export type Query_RootMeat_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


export type Query_RootMeat_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootOther_MasterArgs = {
  distinct_on?: InputMaybe<Array<Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Master_Order_By>>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};


export type Query_RootOther_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Master_Order_By>>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};


export type Query_RootOther_Master_By_PkArgs = {
  other_id: Scalars['uuid']['input'];
};


export type Query_RootOther_StocksArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


export type Query_RootOther_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


export type Query_RootOther_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootProtein_Source_MasterArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};


export type Query_RootProtein_Source_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};


export type Query_RootProtein_Source_Master_By_PkArgs = {
  protein_source_id: Scalars['uuid']['input'];
};


export type Query_RootProtein_Source_StocksArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


export type Query_RootProtein_Source_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


export type Query_RootProtein_Source_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootRecipe_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


export type Query_RootRecipe_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


export type Query_RootRecipe_Materials_By_PkArgs = {
  recipe_material_id: Scalars['uuid']['input'];
};


export type Query_RootRecipe_StepsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


export type Query_RootRecipe_Steps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


export type Query_RootRecipe_Steps_By_PkArgs = {
  recipe_step_id: Scalars['uuid']['input'];
};


export type Query_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Query_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Query_RootRecipes_By_PkArgs = {
  recipe_id: Scalars['uuid']['input'];
};


export type Query_RootSeasoning_MasterArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Master_Order_By>>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};


export type Query_RootSeasoning_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Master_Order_By>>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};


export type Query_RootSeasoning_Master_By_PkArgs = {
  seasoning_id: Scalars['uuid']['input'];
};


export type Query_RootSeasoning_StocksArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


export type Query_RootSeasoning_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


export type Query_RootSeasoning_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootShopping_MemoArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


export type Query_RootShopping_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


export type Query_RootShopping_Memo_By_PkArgs = {
  shopping_memo_id: Scalars['uuid']['input'];
};


export type Query_RootSpice_MasterArgs = {
  distinct_on?: InputMaybe<Array<Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Master_Order_By>>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};


export type Query_RootSpice_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Master_Order_By>>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};


export type Query_RootSpice_Master_By_PkArgs = {
  spice_id: Scalars['uuid']['input'];
};


export type Query_RootSpice_StocksArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


export type Query_RootSpice_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


export type Query_RootSpice_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootStaple_Food_MasterArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};


export type Query_RootStaple_Food_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};


export type Query_RootStaple_Food_Master_By_PkArgs = {
  staple_food_id: Scalars['uuid']['input'];
};


export type Query_RootStaple_Food_StocksArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


export type Query_RootStaple_Food_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


export type Query_RootStaple_Food_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Query_RootUnit_MasterArgs = {
  distinct_on?: InputMaybe<Array<Unit_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Master_Order_By>>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};


export type Query_RootUnit_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unit_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Master_Order_By>>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};


export type Query_RootUnit_Master_By_PkArgs = {
  unit_id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootVegetable_MasterArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Master_Order_By>>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};


export type Query_RootVegetable_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Master_Order_By>>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};


export type Query_RootVegetable_Master_By_PkArgs = {
  vegetable_id: Scalars['uuid']['input'];
};


export type Query_RootVegetable_StocksArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};


export type Query_RootVegetable_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};


export type Query_RootVegetable_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};

/** レシピの材料 */
export type Recipe_Materials = {
  __typename?: 'recipe_materials';
  master_id: Scalars['uuid']['output'];
  quantity: Scalars['numeric']['output'];
  recipe_id: Scalars['uuid']['output'];
  recipe_material_id: Scalars['uuid']['output'];
  /** An object relationship */
  recipe_materials_recipes?: Maybe<Recipes>;
};

/** aggregated selection of "recipe_materials" */
export type Recipe_Materials_Aggregate = {
  __typename?: 'recipe_materials_aggregate';
  aggregate?: Maybe<Recipe_Materials_Aggregate_Fields>;
  nodes: Array<Recipe_Materials>;
};

export type Recipe_Materials_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recipe_Materials_Aggregate_Bool_Exp_Count>;
};

export type Recipe_Materials_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recipe_Materials_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recipe_materials" */
export type Recipe_Materials_Aggregate_Fields = {
  __typename?: 'recipe_materials_aggregate_fields';
  avg?: Maybe<Recipe_Materials_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Recipe_Materials_Max_Fields>;
  min?: Maybe<Recipe_Materials_Min_Fields>;
  stddev?: Maybe<Recipe_Materials_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Materials_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Materials_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Materials_Sum_Fields>;
  var_pop?: Maybe<Recipe_Materials_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Materials_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Materials_Variance_Fields>;
};


/** aggregate fields of "recipe_materials" */
export type Recipe_Materials_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recipe_materials" */
export type Recipe_Materials_Aggregate_Order_By = {
  avg?: InputMaybe<Recipe_Materials_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recipe_Materials_Max_Order_By>;
  min?: InputMaybe<Recipe_Materials_Min_Order_By>;
  stddev?: InputMaybe<Recipe_Materials_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recipe_Materials_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recipe_Materials_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recipe_Materials_Sum_Order_By>;
  var_pop?: InputMaybe<Recipe_Materials_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recipe_Materials_Var_Samp_Order_By>;
  variance?: InputMaybe<Recipe_Materials_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_materials" */
export type Recipe_Materials_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Materials_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipe_Materials_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Materials_Avg_Fields = {
  __typename?: 'recipe_materials_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "recipe_materials" */
export type Recipe_Materials_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_materials". All fields are combined with a logical 'AND'. */
export type Recipe_Materials_Bool_Exp = {
  _and?: InputMaybe<Array<Recipe_Materials_Bool_Exp>>;
  _not?: InputMaybe<Recipe_Materials_Bool_Exp>;
  _or?: InputMaybe<Array<Recipe_Materials_Bool_Exp>>;
  master_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
  recipe_material_id?: InputMaybe<Uuid_Comparison_Exp>;
  recipe_materials_recipes?: InputMaybe<Recipes_Bool_Exp>;
};

/** unique or primary key constraints on table "recipe_materials" */
export enum Recipe_Materials_Constraint {
  /** unique or primary key constraint on columns "recipe_material_id" */
  RecipeMaterialsPkey = 'recipe_materials_pkey'
}

/** input type for incrementing numeric columns in table "recipe_materials" */
export type Recipe_Materials_Inc_Input = {
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "recipe_materials" */
export type Recipe_Materials_Insert_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_material_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_materials_recipes?: InputMaybe<Recipes_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipe_Materials_Max_Fields = {
  __typename?: 'recipe_materials_max_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_material_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "recipe_materials" */
export type Recipe_Materials_Max_Order_By = {
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_material_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Materials_Min_Fields = {
  __typename?: 'recipe_materials_min_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_material_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "recipe_materials" */
export type Recipe_Materials_Min_Order_By = {
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_material_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recipe_materials" */
export type Recipe_Materials_Mutation_Response = {
  __typename?: 'recipe_materials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipe_Materials>;
};

/** on_conflict condition type for table "recipe_materials" */
export type Recipe_Materials_On_Conflict = {
  constraint: Recipe_Materials_Constraint;
  update_columns?: Array<Recipe_Materials_Update_Column>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};

/** Ordering options when selecting data from "recipe_materials". */
export type Recipe_Materials_Order_By = {
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_material_id?: InputMaybe<Order_By>;
  recipe_materials_recipes?: InputMaybe<Recipes_Order_By>;
};

/** primary key columns input for table: recipe_materials */
export type Recipe_Materials_Pk_Columns_Input = {
  recipe_material_id: Scalars['uuid']['input'];
};

/** select columns of table "recipe_materials" */
export enum Recipe_Materials_Select_Column {
  /** column name */
  MasterId = 'master_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeMaterialId = 'recipe_material_id'
}

/** input type for updating data in table "recipe_materials" */
export type Recipe_Materials_Set_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_material_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Recipe_Materials_Stddev_Fields = {
  __typename?: 'recipe_materials_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "recipe_materials" */
export type Recipe_Materials_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Materials_Stddev_Pop_Fields = {
  __typename?: 'recipe_materials_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "recipe_materials" */
export type Recipe_Materials_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Materials_Stddev_Samp_Fields = {
  __typename?: 'recipe_materials_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "recipe_materials" */
export type Recipe_Materials_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recipe_materials" */
export type Recipe_Materials_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipe_Materials_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipe_Materials_Stream_Cursor_Value_Input = {
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_material_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Recipe_Materials_Sum_Fields = {
  __typename?: 'recipe_materials_sum_fields';
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "recipe_materials" */
export type Recipe_Materials_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "recipe_materials" */
export enum Recipe_Materials_Update_Column {
  /** column name */
  MasterId = 'master_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeMaterialId = 'recipe_material_id'
}

export type Recipe_Materials_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recipe_Materials_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipe_Materials_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipe_Materials_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recipe_Materials_Var_Pop_Fields = {
  __typename?: 'recipe_materials_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "recipe_materials" */
export type Recipe_Materials_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Materials_Var_Samp_Fields = {
  __typename?: 'recipe_materials_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "recipe_materials" */
export type Recipe_Materials_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Materials_Variance_Fields = {
  __typename?: 'recipe_materials_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "recipe_materials" */
export type Recipe_Materials_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** レシピを作る工程を格納する */
export type Recipe_Steps = {
  __typename?: 'recipe_steps';
  description: Scalars['String']['output'];
  recipe_id: Scalars['uuid']['output'];
  recipe_step_id: Scalars['uuid']['output'];
  /** An object relationship */
  recipe_steps_recipe?: Maybe<Recipes>;
};

/** aggregated selection of "recipe_steps" */
export type Recipe_Steps_Aggregate = {
  __typename?: 'recipe_steps_aggregate';
  aggregate?: Maybe<Recipe_Steps_Aggregate_Fields>;
  nodes: Array<Recipe_Steps>;
};

export type Recipe_Steps_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recipe_Steps_Aggregate_Bool_Exp_Count>;
};

export type Recipe_Steps_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recipe_Steps_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recipe_steps" */
export type Recipe_Steps_Aggregate_Fields = {
  __typename?: 'recipe_steps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Recipe_Steps_Max_Fields>;
  min?: Maybe<Recipe_Steps_Min_Fields>;
};


/** aggregate fields of "recipe_steps" */
export type Recipe_Steps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recipe_steps" */
export type Recipe_Steps_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recipe_Steps_Max_Order_By>;
  min?: InputMaybe<Recipe_Steps_Min_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_steps" */
export type Recipe_Steps_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Steps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipe_Steps_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recipe_steps". All fields are combined with a logical 'AND'. */
export type Recipe_Steps_Bool_Exp = {
  _and?: InputMaybe<Array<Recipe_Steps_Bool_Exp>>;
  _not?: InputMaybe<Recipe_Steps_Bool_Exp>;
  _or?: InputMaybe<Array<Recipe_Steps_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
  recipe_step_id?: InputMaybe<Uuid_Comparison_Exp>;
  recipe_steps_recipe?: InputMaybe<Recipes_Bool_Exp>;
};

/** unique or primary key constraints on table "recipe_steps" */
export enum Recipe_Steps_Constraint {
  /** unique or primary key constraint on columns "recipe_step_id" */
  RecipeStepsPkey = 'recipe_steps_pkey'
}

/** input type for inserting data into table "recipe_steps" */
export type Recipe_Steps_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_step_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_steps_recipe?: InputMaybe<Recipes_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipe_Steps_Max_Fields = {
  __typename?: 'recipe_steps_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_step_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "recipe_steps" */
export type Recipe_Steps_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_step_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Steps_Min_Fields = {
  __typename?: 'recipe_steps_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_step_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "recipe_steps" */
export type Recipe_Steps_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_step_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recipe_steps" */
export type Recipe_Steps_Mutation_Response = {
  __typename?: 'recipe_steps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipe_Steps>;
};

/** on_conflict condition type for table "recipe_steps" */
export type Recipe_Steps_On_Conflict = {
  constraint: Recipe_Steps_Constraint;
  update_columns?: Array<Recipe_Steps_Update_Column>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};

/** Ordering options when selecting data from "recipe_steps". */
export type Recipe_Steps_Order_By = {
  description?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  recipe_step_id?: InputMaybe<Order_By>;
  recipe_steps_recipe?: InputMaybe<Recipes_Order_By>;
};

/** primary key columns input for table: recipe_steps */
export type Recipe_Steps_Pk_Columns_Input = {
  recipe_step_id: Scalars['uuid']['input'];
};

/** select columns of table "recipe_steps" */
export enum Recipe_Steps_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeStepId = 'recipe_step_id'
}

/** input type for updating data in table "recipe_steps" */
export type Recipe_Steps_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_step_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "recipe_steps" */
export type Recipe_Steps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipe_Steps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipe_Steps_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_step_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "recipe_steps" */
export enum Recipe_Steps_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeStepId = 'recipe_step_id'
}

export type Recipe_Steps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipe_Steps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipe_Steps_Bool_Exp;
};

/** ユーザーごとのレシピ */
export type Recipes = {
  __typename?: 'recipes';
  recipe_id: Scalars['uuid']['output'];
  recipe_image: Scalars['String']['output'];
  recipe_name: Scalars['String']['output'];
  /** An array relationship */
  recipes_materials: Array<Materials>;
  /** An aggregate relationship */
  recipes_materials_aggregate: Materials_Aggregate;
  /** An array relationship */
  recipes_recipe_materials: Array<Recipe_Materials>;
  /** An aggregate relationship */
  recipes_recipe_materials_aggregate: Recipe_Materials_Aggregate;
  /** An array relationship */
  recipes_recipe_steps: Array<Recipe_Steps>;
  /** An aggregate relationship */
  recipes_recipe_steps_aggregate: Recipe_Steps_Aggregate;
  /** An object relationship */
  recipes_users?: Maybe<Users>;
  user_id: Scalars['String']['output'];
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_Recipe_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_Recipe_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_Recipe_StepsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


/** ユーザーごとのレシピ */
export type RecipesRecipes_Recipe_Steps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};

/** aggregated selection of "recipes" */
export type Recipes_Aggregate = {
  __typename?: 'recipes_aggregate';
  aggregate?: Maybe<Recipes_Aggregate_Fields>;
  nodes: Array<Recipes>;
};

export type Recipes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recipes_Aggregate_Bool_Exp_Count>;
};

export type Recipes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recipes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recipes" */
export type Recipes_Aggregate_Fields = {
  __typename?: 'recipes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Recipes_Max_Fields>;
  min?: Maybe<Recipes_Min_Fields>;
};


/** aggregate fields of "recipes" */
export type Recipes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recipes" */
export type Recipes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recipes_Max_Order_By>;
  min?: InputMaybe<Recipes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "recipes" */
export type Recipes_Arr_Rel_Insert_Input = {
  data: Array<Recipes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recipes". All fields are combined with a logical 'AND'. */
export type Recipes_Bool_Exp = {
  _and?: InputMaybe<Array<Recipes_Bool_Exp>>;
  _not?: InputMaybe<Recipes_Bool_Exp>;
  _or?: InputMaybe<Array<Recipes_Bool_Exp>>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
  recipe_image?: InputMaybe<String_Comparison_Exp>;
  recipe_name?: InputMaybe<String_Comparison_Exp>;
  recipes_materials?: InputMaybe<Materials_Bool_Exp>;
  recipes_materials_aggregate?: InputMaybe<Materials_Aggregate_Bool_Exp>;
  recipes_recipe_materials?: InputMaybe<Recipe_Materials_Bool_Exp>;
  recipes_recipe_materials_aggregate?: InputMaybe<Recipe_Materials_Aggregate_Bool_Exp>;
  recipes_recipe_steps?: InputMaybe<Recipe_Steps_Bool_Exp>;
  recipes_recipe_steps_aggregate?: InputMaybe<Recipe_Steps_Aggregate_Bool_Exp>;
  recipes_users?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipes" */
export enum Recipes_Constraint {
  /** unique or primary key constraint on columns "recipe_id" */
  RecipesPkey = 'recipes_pkey',
  /** unique or primary key constraint on columns "recipe_image" */
  RecipesRecipeImageKey = 'recipes_recipe_image_key'
}

/** input type for inserting data into table "recipes" */
export type Recipes_Insert_Input = {
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_image?: InputMaybe<Scalars['String']['input']>;
  recipe_name?: InputMaybe<Scalars['String']['input']>;
  recipes_materials?: InputMaybe<Materials_Arr_Rel_Insert_Input>;
  recipes_recipe_materials?: InputMaybe<Recipe_Materials_Arr_Rel_Insert_Input>;
  recipes_recipe_steps?: InputMaybe<Recipe_Steps_Arr_Rel_Insert_Input>;
  recipes_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Recipes_Max_Fields = {
  __typename?: 'recipes_max_fields';
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_image?: Maybe<Scalars['String']['output']>;
  recipe_name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "recipes" */
export type Recipes_Max_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  recipe_image?: InputMaybe<Order_By>;
  recipe_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recipes_Min_Fields = {
  __typename?: 'recipes_min_fields';
  recipe_id?: Maybe<Scalars['uuid']['output']>;
  recipe_image?: Maybe<Scalars['String']['output']>;
  recipe_name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "recipes" */
export type Recipes_Min_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  recipe_image?: InputMaybe<Order_By>;
  recipe_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recipes" */
export type Recipes_Mutation_Response = {
  __typename?: 'recipes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipes>;
};

/** input type for inserting object relation for remote table "recipes" */
export type Recipes_Obj_Rel_Insert_Input = {
  data: Recipes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recipes_On_Conflict>;
};

/** on_conflict condition type for table "recipes" */
export type Recipes_On_Conflict = {
  constraint: Recipes_Constraint;
  update_columns?: Array<Recipes_Update_Column>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};

/** Ordering options when selecting data from "recipes". */
export type Recipes_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  recipe_image?: InputMaybe<Order_By>;
  recipe_name?: InputMaybe<Order_By>;
  recipes_materials_aggregate?: InputMaybe<Materials_Aggregate_Order_By>;
  recipes_recipe_materials_aggregate?: InputMaybe<Recipe_Materials_Aggregate_Order_By>;
  recipes_recipe_steps_aggregate?: InputMaybe<Recipe_Steps_Aggregate_Order_By>;
  recipes_users?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recipes */
export type Recipes_Pk_Columns_Input = {
  recipe_id: Scalars['uuid']['input'];
};

/** select columns of table "recipes" */
export enum Recipes_Select_Column {
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeImage = 'recipe_image',
  /** column name */
  RecipeName = 'recipe_name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "recipes" */
export type Recipes_Set_Input = {
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_image?: InputMaybe<Scalars['String']['input']>;
  recipe_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "recipes" */
export type Recipes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recipes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recipes_Stream_Cursor_Value_Input = {
  recipe_id?: InputMaybe<Scalars['uuid']['input']>;
  recipe_image?: InputMaybe<Scalars['String']['input']>;
  recipe_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "recipes" */
export enum Recipes_Update_Column {
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  RecipeImage = 'recipe_image',
  /** column name */
  RecipeName = 'recipe_name',
  /** column name */
  UserId = 'user_id'
}

export type Recipes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recipes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recipes_Bool_Exp;
};

/** 調味料マスタデータ */
export type Seasoning_Master = {
  __typename?: 'seasoning_master';
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  seasoning_id: Scalars['uuid']['output'];
  /** An object relationship */
  seasoning_master_seasoning_stocks?: Maybe<Seasoning_Stocks>;
  /** An object relationship */
  seasoning_master_unit_master?: Maybe<Unit_Master>;
  seasoning_name: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "seasoning_master" */
export type Seasoning_Master_Aggregate = {
  __typename?: 'seasoning_master_aggregate';
  aggregate?: Maybe<Seasoning_Master_Aggregate_Fields>;
  nodes: Array<Seasoning_Master>;
};

/** aggregate fields of "seasoning_master" */
export type Seasoning_Master_Aggregate_Fields = {
  __typename?: 'seasoning_master_aggregate_fields';
  avg?: Maybe<Seasoning_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Seasoning_Master_Max_Fields>;
  min?: Maybe<Seasoning_Master_Min_Fields>;
  stddev?: Maybe<Seasoning_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Seasoning_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seasoning_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Seasoning_Master_Sum_Fields>;
  var_pop?: Maybe<Seasoning_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Seasoning_Master_Var_Samp_Fields>;
  variance?: Maybe<Seasoning_Master_Variance_Fields>;
};


/** aggregate fields of "seasoning_master" */
export type Seasoning_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Seasoning_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Seasoning_Master_Avg_Fields = {
  __typename?: 'seasoning_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "seasoning_master". All fields are combined with a logical 'AND'. */
export type Seasoning_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Seasoning_Master_Bool_Exp>>;
  _not?: InputMaybe<Seasoning_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Seasoning_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  seasoning_id?: InputMaybe<Uuid_Comparison_Exp>;
  seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  seasoning_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  seasoning_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "seasoning_master" */
export enum Seasoning_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  SeasoningMasterDisplayNameKey = 'seasoning_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  SeasoningMasterImageUriKey = 'seasoning_master_image_uri_key',
  /** unique or primary key constraint on columns "seasoning_id" */
  SeasoningMasterPkey = 'seasoning_master_pkey',
  /** unique or primary key constraint on columns "seasoning_name" */
  SeasoningMasterSeasoningNameKey = 'seasoning_master_seasoning_name_key'
}

/** input type for incrementing numeric columns in table "seasoning_master" */
export type Seasoning_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "seasoning_master" */
export type Seasoning_Master_Insert_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Obj_Rel_Insert_Input>;
  seasoning_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  seasoning_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Seasoning_Master_Max_Fields = {
  __typename?: 'seasoning_master_max_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  seasoning_id?: Maybe<Scalars['uuid']['output']>;
  seasoning_name?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Seasoning_Master_Min_Fields = {
  __typename?: 'seasoning_master_min_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  seasoning_id?: Maybe<Scalars['uuid']['output']>;
  seasoning_name?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "seasoning_master" */
export type Seasoning_Master_Mutation_Response = {
  __typename?: 'seasoning_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Seasoning_Master>;
};

/** input type for inserting object relation for remote table "seasoning_master" */
export type Seasoning_Master_Obj_Rel_Insert_Input = {
  data: Seasoning_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Seasoning_Master_On_Conflict>;
};

/** on_conflict condition type for table "seasoning_master" */
export type Seasoning_Master_On_Conflict = {
  constraint: Seasoning_Master_Constraint;
  update_columns?: Array<Seasoning_Master_Update_Column>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "seasoning_master". */
export type Seasoning_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  seasoning_id?: InputMaybe<Order_By>;
  seasoning_master_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Order_By>;
  seasoning_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  seasoning_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: seasoning_master */
export type Seasoning_Master_Pk_Columns_Input = {
  seasoning_id: Scalars['uuid']['input'];
};

/** select columns of table "seasoning_master" */
export enum Seasoning_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  SeasoningId = 'seasoning_id',
  /** column name */
  SeasoningName = 'seasoning_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "seasoning_master" */
export type Seasoning_Master_Set_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  seasoning_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Seasoning_Master_Stddev_Fields = {
  __typename?: 'seasoning_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Seasoning_Master_Stddev_Pop_Fields = {
  __typename?: 'seasoning_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Seasoning_Master_Stddev_Samp_Fields = {
  __typename?: 'seasoning_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "seasoning_master" */
export type Seasoning_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Seasoning_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Seasoning_Master_Stream_Cursor_Value_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  seasoning_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Seasoning_Master_Sum_Fields = {
  __typename?: 'seasoning_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "seasoning_master" */
export enum Seasoning_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  SeasoningId = 'seasoning_id',
  /** column name */
  SeasoningName = 'seasoning_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Seasoning_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Seasoning_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Seasoning_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Seasoning_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Seasoning_Master_Var_Pop_Fields = {
  __typename?: 'seasoning_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Seasoning_Master_Var_Samp_Fields = {
  __typename?: 'seasoning_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Seasoning_Master_Variance_Fields = {
  __typename?: 'seasoning_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの調味料ストック */
export type Seasoning_Stocks = {
  __typename?: 'seasoning_stocks';
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  quantity: Scalars['numeric']['output'];
  seasoning_id: Scalars['uuid']['output'];
  /** An object relationship */
  seasoning_stocks_custom_seasoning_master?: Maybe<Custom_Seasoning_Master>;
  /** An object relationship */
  seasoning_stocks_seasoning_master?: Maybe<Seasoning_Master>;
  /** An object relationship */
  seasoning_stocks_users?: Maybe<Users>;
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "seasoning_stocks" */
export type Seasoning_Stocks_Aggregate = {
  __typename?: 'seasoning_stocks_aggregate';
  aggregate?: Maybe<Seasoning_Stocks_Aggregate_Fields>;
  nodes: Array<Seasoning_Stocks>;
};

export type Seasoning_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Seasoning_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Seasoning_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Seasoning_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Seasoning_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Seasoning_Stocks_Select_Column_Seasoning_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Seasoning_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Seasoning_Stocks_Select_Column_Seasoning_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Seasoning_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "seasoning_stocks" */
export type Seasoning_Stocks_Aggregate_Fields = {
  __typename?: 'seasoning_stocks_aggregate_fields';
  avg?: Maybe<Seasoning_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Seasoning_Stocks_Max_Fields>;
  min?: Maybe<Seasoning_Stocks_Min_Fields>;
  stddev?: Maybe<Seasoning_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Seasoning_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seasoning_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Seasoning_Stocks_Sum_Fields>;
  var_pop?: Maybe<Seasoning_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Seasoning_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Seasoning_Stocks_Variance_Fields>;
};


/** aggregate fields of "seasoning_stocks" */
export type Seasoning_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "seasoning_stocks" */
export type Seasoning_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Seasoning_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Seasoning_Stocks_Max_Order_By>;
  min?: InputMaybe<Seasoning_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Seasoning_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Seasoning_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Seasoning_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Seasoning_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Seasoning_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Seasoning_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Seasoning_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "seasoning_stocks" */
export type Seasoning_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Seasoning_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Seasoning_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Seasoning_Stocks_Avg_Fields = {
  __typename?: 'seasoning_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "seasoning_stocks". All fields are combined with a logical 'AND'. */
export type Seasoning_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Seasoning_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Seasoning_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  seasoning_id?: InputMaybe<Uuid_Comparison_Exp>;
  seasoning_stocks_custom_seasoning_master?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
  seasoning_stocks_seasoning_master?: InputMaybe<Seasoning_Master_Bool_Exp>;
  seasoning_stocks_users?: InputMaybe<Users_Bool_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "seasoning_stocks" */
export enum Seasoning_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  SeasoningStocksPkey = 'seasoning_stocks_pkey'
}

/** input type for incrementing numeric columns in table "seasoning_stocks" */
export type Seasoning_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "seasoning_stocks" */
export type Seasoning_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  seasoning_stocks_custom_seasoning_master?: InputMaybe<Custom_Seasoning_Master_Obj_Rel_Insert_Input>;
  seasoning_stocks_seasoning_master?: InputMaybe<Seasoning_Master_Obj_Rel_Insert_Input>;
  seasoning_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Seasoning_Stocks_Max_Fields = {
  __typename?: 'seasoning_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  seasoning_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  seasoning_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Seasoning_Stocks_Min_Fields = {
  __typename?: 'seasoning_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  seasoning_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  seasoning_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "seasoning_stocks" */
export type Seasoning_Stocks_Mutation_Response = {
  __typename?: 'seasoning_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Seasoning_Stocks>;
};

/** input type for inserting object relation for remote table "seasoning_stocks" */
export type Seasoning_Stocks_Obj_Rel_Insert_Input = {
  data: Seasoning_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Seasoning_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "seasoning_stocks" */
export type Seasoning_Stocks_On_Conflict = {
  constraint: Seasoning_Stocks_Constraint;
  update_columns?: Array<Seasoning_Stocks_Update_Column>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "seasoning_stocks". */
export type Seasoning_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  seasoning_id?: InputMaybe<Order_By>;
  seasoning_stocks_custom_seasoning_master?: InputMaybe<Custom_Seasoning_Master_Order_By>;
  seasoning_stocks_seasoning_master?: InputMaybe<Seasoning_Master_Order_By>;
  seasoning_stocks_users?: InputMaybe<Users_Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: seasoning_stocks */
export type Seasoning_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "seasoning_stocks" */
export enum Seasoning_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SeasoningId = 'seasoning_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "seasoning_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "seasoning_stocks" */
export enum Seasoning_Stocks_Select_Column_Seasoning_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "seasoning_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "seasoning_stocks" */
export enum Seasoning_Stocks_Select_Column_Seasoning_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "seasoning_stocks" */
export type Seasoning_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Seasoning_Stocks_Stddev_Fields = {
  __typename?: 'seasoning_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Seasoning_Stocks_Stddev_Pop_Fields = {
  __typename?: 'seasoning_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Seasoning_Stocks_Stddev_Samp_Fields = {
  __typename?: 'seasoning_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "seasoning_stocks" */
export type Seasoning_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Seasoning_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Seasoning_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  seasoning_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Seasoning_Stocks_Sum_Fields = {
  __typename?: 'seasoning_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "seasoning_stocks" */
export enum Seasoning_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SeasoningId = 'seasoning_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Seasoning_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Seasoning_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Seasoning_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Seasoning_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Seasoning_Stocks_Var_Pop_Fields = {
  __typename?: 'seasoning_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Seasoning_Stocks_Var_Samp_Fields = {
  __typename?: 'seasoning_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Seasoning_Stocks_Variance_Fields = {
  __typename?: 'seasoning_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "seasoning_stocks" */
export type Seasoning_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** ユーザーごとのショッピングメモ */
export type Shopping_Memo = {
  __typename?: 'shopping_memo';
  is_checked: Scalars['Boolean']['output'];
  master_id: Scalars['uuid']['output'];
  quantity: Scalars['Int']['output'];
  shopping_memo_id: Scalars['uuid']['output'];
  /** An object relationship */
  shopping_memo_users?: Maybe<Users>;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "shopping_memo" */
export type Shopping_Memo_Aggregate = {
  __typename?: 'shopping_memo_aggregate';
  aggregate?: Maybe<Shopping_Memo_Aggregate_Fields>;
  nodes: Array<Shopping_Memo>;
};

export type Shopping_Memo_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Shopping_Memo_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Shopping_Memo_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Shopping_Memo_Aggregate_Bool_Exp_Count>;
};

export type Shopping_Memo_Aggregate_Bool_Exp_Bool_And = {
  arguments: Shopping_Memo_Select_Column_Shopping_Memo_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shopping_Memo_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Shopping_Memo_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Shopping_Memo_Select_Column_Shopping_Memo_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shopping_Memo_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Shopping_Memo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shopping_Memo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "shopping_memo" */
export type Shopping_Memo_Aggregate_Fields = {
  __typename?: 'shopping_memo_aggregate_fields';
  avg?: Maybe<Shopping_Memo_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Shopping_Memo_Max_Fields>;
  min?: Maybe<Shopping_Memo_Min_Fields>;
  stddev?: Maybe<Shopping_Memo_Stddev_Fields>;
  stddev_pop?: Maybe<Shopping_Memo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shopping_Memo_Stddev_Samp_Fields>;
  sum?: Maybe<Shopping_Memo_Sum_Fields>;
  var_pop?: Maybe<Shopping_Memo_Var_Pop_Fields>;
  var_samp?: Maybe<Shopping_Memo_Var_Samp_Fields>;
  variance?: Maybe<Shopping_Memo_Variance_Fields>;
};


/** aggregate fields of "shopping_memo" */
export type Shopping_Memo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "shopping_memo" */
export type Shopping_Memo_Aggregate_Order_By = {
  avg?: InputMaybe<Shopping_Memo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Shopping_Memo_Max_Order_By>;
  min?: InputMaybe<Shopping_Memo_Min_Order_By>;
  stddev?: InputMaybe<Shopping_Memo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Shopping_Memo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Shopping_Memo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Shopping_Memo_Sum_Order_By>;
  var_pop?: InputMaybe<Shopping_Memo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Shopping_Memo_Var_Samp_Order_By>;
  variance?: InputMaybe<Shopping_Memo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shopping_memo" */
export type Shopping_Memo_Arr_Rel_Insert_Input = {
  data: Array<Shopping_Memo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Shopping_Memo_On_Conflict>;
};

/** aggregate avg on columns */
export type Shopping_Memo_Avg_Fields = {
  __typename?: 'shopping_memo_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "shopping_memo" */
export type Shopping_Memo_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shopping_memo". All fields are combined with a logical 'AND'. */
export type Shopping_Memo_Bool_Exp = {
  _and?: InputMaybe<Array<Shopping_Memo_Bool_Exp>>;
  _not?: InputMaybe<Shopping_Memo_Bool_Exp>;
  _or?: InputMaybe<Array<Shopping_Memo_Bool_Exp>>;
  is_checked?: InputMaybe<Boolean_Comparison_Exp>;
  master_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  shopping_memo_id?: InputMaybe<Uuid_Comparison_Exp>;
  shopping_memo_users?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shopping_memo" */
export enum Shopping_Memo_Constraint {
  /** unique or primary key constraint on columns "shopping_memo_id" */
  ShoppingMemoPkey = 'shopping_memo_pkey'
}

/** input type for incrementing numeric columns in table "shopping_memo" */
export type Shopping_Memo_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "shopping_memo" */
export type Shopping_Memo_Insert_Input = {
  is_checked?: InputMaybe<Scalars['Boolean']['input']>;
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shopping_memo_id?: InputMaybe<Scalars['uuid']['input']>;
  shopping_memo_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Shopping_Memo_Max_Fields = {
  __typename?: 'shopping_memo_max_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shopping_memo_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "shopping_memo" */
export type Shopping_Memo_Max_Order_By = {
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  shopping_memo_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Shopping_Memo_Min_Fields = {
  __typename?: 'shopping_memo_min_fields';
  master_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shopping_memo_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "shopping_memo" */
export type Shopping_Memo_Min_Order_By = {
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  shopping_memo_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "shopping_memo" */
export type Shopping_Memo_Mutation_Response = {
  __typename?: 'shopping_memo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Shopping_Memo>;
};

/** on_conflict condition type for table "shopping_memo" */
export type Shopping_Memo_On_Conflict = {
  constraint: Shopping_Memo_Constraint;
  update_columns?: Array<Shopping_Memo_Update_Column>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};

/** Ordering options when selecting data from "shopping_memo". */
export type Shopping_Memo_Order_By = {
  is_checked?: InputMaybe<Order_By>;
  master_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  shopping_memo_id?: InputMaybe<Order_By>;
  shopping_memo_users?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shopping_memo */
export type Shopping_Memo_Pk_Columns_Input = {
  shopping_memo_id: Scalars['uuid']['input'];
};

/** select columns of table "shopping_memo" */
export enum Shopping_Memo_Select_Column {
  /** column name */
  IsChecked = 'is_checked',
  /** column name */
  MasterId = 'master_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ShoppingMemoId = 'shopping_memo_id',
  /** column name */
  UserId = 'user_id'
}

/** select "shopping_memo_aggregate_bool_exp_bool_and_arguments_columns" columns of table "shopping_memo" */
export enum Shopping_Memo_Select_Column_Shopping_Memo_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsChecked = 'is_checked'
}

/** select "shopping_memo_aggregate_bool_exp_bool_or_arguments_columns" columns of table "shopping_memo" */
export enum Shopping_Memo_Select_Column_Shopping_Memo_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsChecked = 'is_checked'
}

/** input type for updating data in table "shopping_memo" */
export type Shopping_Memo_Set_Input = {
  is_checked?: InputMaybe<Scalars['Boolean']['input']>;
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shopping_memo_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Shopping_Memo_Stddev_Fields = {
  __typename?: 'shopping_memo_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "shopping_memo" */
export type Shopping_Memo_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shopping_Memo_Stddev_Pop_Fields = {
  __typename?: 'shopping_memo_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "shopping_memo" */
export type Shopping_Memo_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shopping_Memo_Stddev_Samp_Fields = {
  __typename?: 'shopping_memo_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "shopping_memo" */
export type Shopping_Memo_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "shopping_memo" */
export type Shopping_Memo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Shopping_Memo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Shopping_Memo_Stream_Cursor_Value_Input = {
  is_checked?: InputMaybe<Scalars['Boolean']['input']>;
  master_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shopping_memo_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Shopping_Memo_Sum_Fields = {
  __typename?: 'shopping_memo_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "shopping_memo" */
export type Shopping_Memo_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "shopping_memo" */
export enum Shopping_Memo_Update_Column {
  /** column name */
  IsChecked = 'is_checked',
  /** column name */
  MasterId = 'master_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ShoppingMemoId = 'shopping_memo_id',
  /** column name */
  UserId = 'user_id'
}

export type Shopping_Memo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Shopping_Memo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Shopping_Memo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Shopping_Memo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Shopping_Memo_Var_Pop_Fields = {
  __typename?: 'shopping_memo_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "shopping_memo" */
export type Shopping_Memo_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shopping_Memo_Var_Samp_Fields = {
  __typename?: 'shopping_memo_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "shopping_memo" */
export type Shopping_Memo_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Shopping_Memo_Variance_Fields = {
  __typename?: 'shopping_memo_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "shopping_memo" */
export type Shopping_Memo_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** スパイスマスタデータ */
export type Spice_Master = {
  __typename?: 'spice_master';
  default_expiration_period: Scalars['Int']['output'];
  display_name: Scalars['String']['output'];
  image_uri: Scalars['String']['output'];
  spice_id: Scalars['uuid']['output'];
  /** An object relationship */
  spice_master_spice_stocks?: Maybe<Spice_Stocks>;
  /** An object relationship */
  spice_master_unit_master?: Maybe<Unit_Master>;
  spice_name: Scalars['String']['output'];
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "spice_master" */
export type Spice_Master_Aggregate = {
  __typename?: 'spice_master_aggregate';
  aggregate?: Maybe<Spice_Master_Aggregate_Fields>;
  nodes: Array<Spice_Master>;
};

/** aggregate fields of "spice_master" */
export type Spice_Master_Aggregate_Fields = {
  __typename?: 'spice_master_aggregate_fields';
  avg?: Maybe<Spice_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Spice_Master_Max_Fields>;
  min?: Maybe<Spice_Master_Min_Fields>;
  stddev?: Maybe<Spice_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Spice_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Spice_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Spice_Master_Sum_Fields>;
  var_pop?: Maybe<Spice_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Spice_Master_Var_Samp_Fields>;
  variance?: Maybe<Spice_Master_Variance_Fields>;
};


/** aggregate fields of "spice_master" */
export type Spice_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Spice_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Spice_Master_Avg_Fields = {
  __typename?: 'spice_master_avg_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "spice_master". All fields are combined with a logical 'AND'. */
export type Spice_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Spice_Master_Bool_Exp>>;
  _not?: InputMaybe<Spice_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Spice_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  spice_id?: InputMaybe<Uuid_Comparison_Exp>;
  spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Bool_Exp>;
  spice_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  spice_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "spice_master" */
export enum Spice_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  SpiceMasterDisplayNameKey = 'spice_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  SpiceMasterImageUriKey = 'spice_master_image_uri_key',
  /** unique or primary key constraint on columns "spice_id" */
  SpiceMasterPkey = 'spice_master_pkey',
  /** unique or primary key constraint on columns "spice_name" */
  SpiceMasterSpiceNameKey = 'spice_master_spice_name_key'
}

/** input type for incrementing numeric columns in table "spice_master" */
export type Spice_Master_Inc_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "spice_master" */
export type Spice_Master_Insert_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Obj_Rel_Insert_Input>;
  spice_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  spice_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Spice_Master_Max_Fields = {
  __typename?: 'spice_master_max_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  spice_id?: Maybe<Scalars['uuid']['output']>;
  spice_name?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Spice_Master_Min_Fields = {
  __typename?: 'spice_master_min_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  image_uri?: Maybe<Scalars['String']['output']>;
  spice_id?: Maybe<Scalars['uuid']['output']>;
  spice_name?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "spice_master" */
export type Spice_Master_Mutation_Response = {
  __typename?: 'spice_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Spice_Master>;
};

/** input type for inserting object relation for remote table "spice_master" */
export type Spice_Master_Obj_Rel_Insert_Input = {
  data: Spice_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Spice_Master_On_Conflict>;
};

/** on_conflict condition type for table "spice_master" */
export type Spice_Master_On_Conflict = {
  constraint: Spice_Master_Constraint;
  update_columns?: Array<Spice_Master_Update_Column>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "spice_master". */
export type Spice_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  spice_id?: InputMaybe<Order_By>;
  spice_master_spice_stocks?: InputMaybe<Spice_Stocks_Order_By>;
  spice_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  spice_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: spice_master */
export type Spice_Master_Pk_Columns_Input = {
  spice_id: Scalars['uuid']['input'];
};

/** select columns of table "spice_master" */
export enum Spice_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  SpiceId = 'spice_id',
  /** column name */
  SpiceName = 'spice_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "spice_master" */
export type Spice_Master_Set_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  spice_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Spice_Master_Stddev_Fields = {
  __typename?: 'spice_master_stddev_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Spice_Master_Stddev_Pop_Fields = {
  __typename?: 'spice_master_stddev_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Spice_Master_Stddev_Samp_Fields = {
  __typename?: 'spice_master_stddev_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "spice_master" */
export type Spice_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Spice_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Spice_Master_Stream_Cursor_Value_Input = {
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  image_uri?: InputMaybe<Scalars['String']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  spice_name?: InputMaybe<Scalars['String']['input']>;
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Spice_Master_Sum_Fields = {
  __typename?: 'spice_master_sum_fields';
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "spice_master" */
export enum Spice_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  SpiceId = 'spice_id',
  /** column name */
  SpiceName = 'spice_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Spice_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Spice_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Spice_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Spice_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Spice_Master_Var_Pop_Fields = {
  __typename?: 'spice_master_var_pop_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Spice_Master_Var_Samp_Fields = {
  __typename?: 'spice_master_var_samp_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Spice_Master_Variance_Fields = {
  __typename?: 'spice_master_variance_fields';
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとのスパイスストック */
export type Spice_Stocks = {
  __typename?: 'spice_stocks';
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  quantity: Scalars['numeric']['output'];
  spice_id: Scalars['uuid']['output'];
  /** An object relationship */
  spice_stocks_custom_spice_master?: Maybe<Custom_Spice_Master>;
  /** An object relationship */
  spice_stocks_spice_master?: Maybe<Spice_Master>;
  /** An object relationship */
  spice_stocks_users?: Maybe<Users>;
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "spice_stocks" */
export type Spice_Stocks_Aggregate = {
  __typename?: 'spice_stocks_aggregate';
  aggregate?: Maybe<Spice_Stocks_Aggregate_Fields>;
  nodes: Array<Spice_Stocks>;
};

export type Spice_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Spice_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Spice_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Spice_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Spice_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Spice_Stocks_Select_Column_Spice_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Spice_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Spice_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Spice_Stocks_Select_Column_Spice_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Spice_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Spice_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Spice_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "spice_stocks" */
export type Spice_Stocks_Aggregate_Fields = {
  __typename?: 'spice_stocks_aggregate_fields';
  avg?: Maybe<Spice_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Spice_Stocks_Max_Fields>;
  min?: Maybe<Spice_Stocks_Min_Fields>;
  stddev?: Maybe<Spice_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Spice_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Spice_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Spice_Stocks_Sum_Fields>;
  var_pop?: Maybe<Spice_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Spice_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Spice_Stocks_Variance_Fields>;
};


/** aggregate fields of "spice_stocks" */
export type Spice_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "spice_stocks" */
export type Spice_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Spice_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Spice_Stocks_Max_Order_By>;
  min?: InputMaybe<Spice_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Spice_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Spice_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Spice_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Spice_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Spice_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Spice_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Spice_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "spice_stocks" */
export type Spice_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Spice_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Spice_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Spice_Stocks_Avg_Fields = {
  __typename?: 'spice_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "spice_stocks" */
export type Spice_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "spice_stocks". All fields are combined with a logical 'AND'. */
export type Spice_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Spice_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Spice_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Spice_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  spice_id?: InputMaybe<Uuid_Comparison_Exp>;
  spice_stocks_custom_spice_master?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
  spice_stocks_spice_master?: InputMaybe<Spice_Master_Bool_Exp>;
  spice_stocks_users?: InputMaybe<Users_Bool_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "spice_stocks" */
export enum Spice_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  SpiceStocksPkey = 'spice_stocks_pkey'
}

/** input type for incrementing numeric columns in table "spice_stocks" */
export type Spice_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "spice_stocks" */
export type Spice_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  spice_stocks_custom_spice_master?: InputMaybe<Custom_Spice_Master_Obj_Rel_Insert_Input>;
  spice_stocks_spice_master?: InputMaybe<Spice_Master_Obj_Rel_Insert_Input>;
  spice_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Spice_Stocks_Max_Fields = {
  __typename?: 'spice_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  spice_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "spice_stocks" */
export type Spice_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  spice_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Spice_Stocks_Min_Fields = {
  __typename?: 'spice_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  spice_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "spice_stocks" */
export type Spice_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  spice_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "spice_stocks" */
export type Spice_Stocks_Mutation_Response = {
  __typename?: 'spice_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Spice_Stocks>;
};

/** input type for inserting object relation for remote table "spice_stocks" */
export type Spice_Stocks_Obj_Rel_Insert_Input = {
  data: Spice_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Spice_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "spice_stocks" */
export type Spice_Stocks_On_Conflict = {
  constraint: Spice_Stocks_Constraint;
  update_columns?: Array<Spice_Stocks_Update_Column>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "spice_stocks". */
export type Spice_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  spice_id?: InputMaybe<Order_By>;
  spice_stocks_custom_spice_master?: InputMaybe<Custom_Spice_Master_Order_By>;
  spice_stocks_spice_master?: InputMaybe<Spice_Master_Order_By>;
  spice_stocks_users?: InputMaybe<Users_Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: spice_stocks */
export type Spice_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "spice_stocks" */
export enum Spice_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SpiceId = 'spice_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "spice_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "spice_stocks" */
export enum Spice_Stocks_Select_Column_Spice_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "spice_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "spice_stocks" */
export enum Spice_Stocks_Select_Column_Spice_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "spice_stocks" */
export type Spice_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Spice_Stocks_Stddev_Fields = {
  __typename?: 'spice_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "spice_stocks" */
export type Spice_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Spice_Stocks_Stddev_Pop_Fields = {
  __typename?: 'spice_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "spice_stocks" */
export type Spice_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Spice_Stocks_Stddev_Samp_Fields = {
  __typename?: 'spice_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "spice_stocks" */
export type Spice_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "spice_stocks" */
export type Spice_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Spice_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Spice_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  spice_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Spice_Stocks_Sum_Fields = {
  __typename?: 'spice_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "spice_stocks" */
export type Spice_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "spice_stocks" */
export enum Spice_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SpiceId = 'spice_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Spice_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Spice_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Spice_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Spice_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Spice_Stocks_Var_Pop_Fields = {
  __typename?: 'spice_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "spice_stocks" */
export type Spice_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Spice_Stocks_Var_Samp_Fields = {
  __typename?: 'spice_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "spice_stocks" */
export type Spice_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Spice_Stocks_Variance_Fields = {
  __typename?: 'spice_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "spice_stocks" */
export type Spice_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** 主食・粉マスタデータ */
export type Staple_Food_Master = {
  __typename?: 'staple_food_master';
  /** 賞味期限の基準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  staple_food_id: Scalars['uuid']['output'];
  /** An object relationship */
  staple_food_master_staple_food_stocks?: Maybe<Staple_Food_Stocks>;
  /** An object relationship */
  staple_food_master_unit_master?: Maybe<Unit_Master>;
  /** 主食・粉名（ひらがな） */
  staple_food_name: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
};

/** aggregated selection of "staple_food_master" */
export type Staple_Food_Master_Aggregate = {
  __typename?: 'staple_food_master_aggregate';
  aggregate?: Maybe<Staple_Food_Master_Aggregate_Fields>;
  nodes: Array<Staple_Food_Master>;
};

/** aggregate fields of "staple_food_master" */
export type Staple_Food_Master_Aggregate_Fields = {
  __typename?: 'staple_food_master_aggregate_fields';
  avg?: Maybe<Staple_Food_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staple_Food_Master_Max_Fields>;
  min?: Maybe<Staple_Food_Master_Min_Fields>;
  stddev?: Maybe<Staple_Food_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Staple_Food_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staple_Food_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Staple_Food_Master_Sum_Fields>;
  var_pop?: Maybe<Staple_Food_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Staple_Food_Master_Var_Samp_Fields>;
  variance?: Maybe<Staple_Food_Master_Variance_Fields>;
};


/** aggregate fields of "staple_food_master" */
export type Staple_Food_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staple_Food_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Staple_Food_Master_Avg_Fields = {
  __typename?: 'staple_food_master_avg_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staple_food_master". All fields are combined with a logical 'AND'. */
export type Staple_Food_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Staple_Food_Master_Bool_Exp>>;
  _not?: InputMaybe<Staple_Food_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Staple_Food_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  staple_food_id?: InputMaybe<Uuid_Comparison_Exp>;
  staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  staple_food_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  staple_food_name?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "staple_food_master" */
export enum Staple_Food_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  StapleFoodMasterDisplayNameKey = 'staple_food_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  StapleFoodMasterImageUriKey = 'staple_food_master_image_uri_key',
  /** unique or primary key constraint on columns "staple_food_id" */
  StapleFoodMasterPkey = 'staple_food_master_pkey',
  /** unique or primary key constraint on columns "staple_food_name" */
  StapleFoodMasterStapleFoodNameKey = 'staple_food_master_staple_food_name_key'
}

/** input type for incrementing numeric columns in table "staple_food_master" */
export type Staple_Food_Master_Inc_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "staple_food_master" */
export type Staple_Food_Master_Insert_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Obj_Rel_Insert_Input>;
  staple_food_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  /** 主食・粉名（ひらがな） */
  staple_food_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Staple_Food_Master_Max_Fields = {
  __typename?: 'staple_food_master_max_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  staple_food_id?: Maybe<Scalars['uuid']['output']>;
  /** 主食・粉名（ひらがな） */
  staple_food_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Staple_Food_Master_Min_Fields = {
  __typename?: 'staple_food_master_min_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  staple_food_id?: Maybe<Scalars['uuid']['output']>;
  /** 主食・粉名（ひらがな） */
  staple_food_name?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "staple_food_master" */
export type Staple_Food_Master_Mutation_Response = {
  __typename?: 'staple_food_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staple_Food_Master>;
};

/** input type for inserting object relation for remote table "staple_food_master" */
export type Staple_Food_Master_Obj_Rel_Insert_Input = {
  data: Staple_Food_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Staple_Food_Master_On_Conflict>;
};

/** on_conflict condition type for table "staple_food_master" */
export type Staple_Food_Master_On_Conflict = {
  constraint: Staple_Food_Master_Constraint;
  update_columns?: Array<Staple_Food_Master_Update_Column>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "staple_food_master". */
export type Staple_Food_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  staple_food_id?: InputMaybe<Order_By>;
  staple_food_master_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Order_By>;
  staple_food_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  staple_food_name?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staple_food_master */
export type Staple_Food_Master_Pk_Columns_Input = {
  staple_food_id: Scalars['uuid']['input'];
};

/** select columns of table "staple_food_master" */
export enum Staple_Food_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  StapleFoodId = 'staple_food_id',
  /** column name */
  StapleFoodName = 'staple_food_name',
  /** column name */
  UnitId = 'unit_id'
}

/** input type for updating data in table "staple_food_master" */
export type Staple_Food_Master_Set_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 主食・粉名（ひらがな） */
  staple_food_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Staple_Food_Master_Stddev_Fields = {
  __typename?: 'staple_food_master_stddev_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staple_Food_Master_Stddev_Pop_Fields = {
  __typename?: 'staple_food_master_stddev_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staple_Food_Master_Stddev_Samp_Fields = {
  __typename?: 'staple_food_master_stddev_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staple_food_master" */
export type Staple_Food_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staple_Food_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staple_Food_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 主食・粉名（ひらがな） */
  staple_food_name?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Staple_Food_Master_Sum_Fields = {
  __typename?: 'staple_food_master_sum_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "staple_food_master" */
export enum Staple_Food_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  StapleFoodId = 'staple_food_id',
  /** column name */
  StapleFoodName = 'staple_food_name',
  /** column name */
  UnitId = 'unit_id'
}

export type Staple_Food_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staple_Food_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staple_Food_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staple_Food_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staple_Food_Master_Var_Pop_Fields = {
  __typename?: 'staple_food_master_var_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staple_Food_Master_Var_Samp_Fields = {
  __typename?: 'staple_food_master_var_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staple_Food_Master_Variance_Fields = {
  __typename?: 'staple_food_master_variance_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの主食・粉ストック */
export type Staple_Food_Stocks = {
  __typename?: 'staple_food_stocks';
  expiration_date: Scalars['date']['output'];
  incremental_unit: Scalars['numeric']['output'];
  is_favorite: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  quantity: Scalars['numeric']['output'];
  staple_food_id: Scalars['uuid']['output'];
  /** An object relationship */
  staple_food_stocks_custom_staple_food_master?: Maybe<Custom_Staple_Food_Master>;
  /** An object relationship */
  staple_food_stocks_staple_food_master?: Maybe<Staple_Food_Master>;
  /** An object relationship */
  staple_food_stocks_users?: Maybe<Users>;
  stock_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "staple_food_stocks" */
export type Staple_Food_Stocks_Aggregate = {
  __typename?: 'staple_food_stocks_aggregate';
  aggregate?: Maybe<Staple_Food_Stocks_Aggregate_Fields>;
  nodes: Array<Staple_Food_Stocks>;
};

export type Staple_Food_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Staple_Food_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Staple_Food_Stocks_Select_Column_Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Staple_Food_Stocks_Select_Column_Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Staple_Food_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "staple_food_stocks" */
export type Staple_Food_Stocks_Aggregate_Fields = {
  __typename?: 'staple_food_stocks_aggregate_fields';
  avg?: Maybe<Staple_Food_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staple_Food_Stocks_Max_Fields>;
  min?: Maybe<Staple_Food_Stocks_Min_Fields>;
  stddev?: Maybe<Staple_Food_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Staple_Food_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staple_Food_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Staple_Food_Stocks_Sum_Fields>;
  var_pop?: Maybe<Staple_Food_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Staple_Food_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Staple_Food_Stocks_Variance_Fields>;
};


/** aggregate fields of "staple_food_stocks" */
export type Staple_Food_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "staple_food_stocks" */
export type Staple_Food_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Staple_Food_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Staple_Food_Stocks_Max_Order_By>;
  min?: InputMaybe<Staple_Food_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Staple_Food_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Staple_Food_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Staple_Food_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Staple_Food_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Staple_Food_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Staple_Food_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Staple_Food_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "staple_food_stocks" */
export type Staple_Food_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Staple_Food_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Staple_Food_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Staple_Food_Stocks_Avg_Fields = {
  __typename?: 'staple_food_stocks_avg_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Avg_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "staple_food_stocks". All fields are combined with a logical 'AND'. */
export type Staple_Food_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Staple_Food_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Staple_Food_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  staple_food_id?: InputMaybe<Uuid_Comparison_Exp>;
  staple_food_stocks_custom_staple_food_master?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
  staple_food_stocks_staple_food_master?: InputMaybe<Staple_Food_Master_Bool_Exp>;
  staple_food_stocks_users?: InputMaybe<Users_Bool_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staple_food_stocks" */
export enum Staple_Food_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  StapleFoodStocksPkey = 'staple_food_stocks_pkey'
}

/** input type for incrementing numeric columns in table "staple_food_stocks" */
export type Staple_Food_Stocks_Inc_Input = {
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "staple_food_stocks" */
export type Staple_Food_Stocks_Insert_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  staple_food_stocks_custom_staple_food_master?: InputMaybe<Custom_Staple_Food_Master_Obj_Rel_Insert_Input>;
  staple_food_stocks_staple_food_master?: InputMaybe<Staple_Food_Master_Obj_Rel_Insert_Input>;
  staple_food_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staple_Food_Stocks_Max_Fields = {
  __typename?: 'staple_food_stocks_max_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  staple_food_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Max_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  staple_food_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Staple_Food_Stocks_Min_Fields = {
  __typename?: 'staple_food_stocks_min_fields';
  expiration_date?: Maybe<Scalars['date']['output']>;
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
  staple_food_id?: Maybe<Scalars['uuid']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Min_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  staple_food_id?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "staple_food_stocks" */
export type Staple_Food_Stocks_Mutation_Response = {
  __typename?: 'staple_food_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staple_Food_Stocks>;
};

/** input type for inserting object relation for remote table "staple_food_stocks" */
export type Staple_Food_Stocks_Obj_Rel_Insert_Input = {
  data: Staple_Food_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Staple_Food_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "staple_food_stocks" */
export type Staple_Food_Stocks_On_Conflict = {
  constraint: Staple_Food_Stocks_Constraint;
  update_columns?: Array<Staple_Food_Stocks_Update_Column>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "staple_food_stocks". */
export type Staple_Food_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  staple_food_id?: InputMaybe<Order_By>;
  staple_food_stocks_custom_staple_food_master?: InputMaybe<Custom_Staple_Food_Master_Order_By>;
  staple_food_stocks_staple_food_master?: InputMaybe<Staple_Food_Master_Order_By>;
  staple_food_stocks_users?: InputMaybe<Users_Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staple_food_stocks */
export type Staple_Food_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "staple_food_stocks" */
export enum Staple_Food_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StapleFoodId = 'staple_food_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

/** select "staple_food_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "staple_food_stocks" */
export enum Staple_Food_Stocks_Select_Column_Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "staple_food_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "staple_food_stocks" */
export enum Staple_Food_Stocks_Select_Column_Staple_Food_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "staple_food_stocks" */
export type Staple_Food_Stocks_Set_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staple_Food_Stocks_Stddev_Fields = {
  __typename?: 'staple_food_stocks_stddev_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Stddev_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Staple_Food_Stocks_Stddev_Pop_Fields = {
  __typename?: 'staple_food_stocks_stddev_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Stddev_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Staple_Food_Stocks_Stddev_Samp_Fields = {
  __typename?: 'staple_food_stocks_stddev_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Stddev_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "staple_food_stocks" */
export type Staple_Food_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staple_Food_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staple_Food_Stocks_Stream_Cursor_Value_Input = {
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  staple_food_id?: InputMaybe<Scalars['uuid']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staple_Food_Stocks_Sum_Fields = {
  __typename?: 'staple_food_stocks_sum_fields';
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Sum_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "staple_food_stocks" */
export enum Staple_Food_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StapleFoodId = 'staple_food_id',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id'
}

export type Staple_Food_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staple_Food_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staple_Food_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staple_Food_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staple_Food_Stocks_Var_Pop_Fields = {
  __typename?: 'staple_food_stocks_var_pop_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Var_Pop_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Staple_Food_Stocks_Var_Samp_Fields = {
  __typename?: 'staple_food_stocks_var_samp_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Var_Samp_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Staple_Food_Stocks_Variance_Fields = {
  __typename?: 'staple_food_stocks_variance_fields';
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "staple_food_stocks" */
export type Staple_Food_Stocks_Variance_Order_By = {
  incremental_unit?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "custom_dessert_master" */
  custom_dessert_master: Array<Custom_Dessert_Master>;
  /** fetch aggregated fields from the table: "custom_dessert_master" */
  custom_dessert_master_aggregate: Custom_Dessert_Master_Aggregate;
  /** fetch data from the table: "custom_dessert_master" using primary key columns */
  custom_dessert_master_by_pk?: Maybe<Custom_Dessert_Master>;
  /** fetch data from the table in a streaming manner: "custom_dessert_master" */
  custom_dessert_master_stream: Array<Custom_Dessert_Master>;
  /** fetch data from the table: "custom_fish_master" */
  custom_fish_master: Array<Custom_Fish_Master>;
  /** fetch aggregated fields from the table: "custom_fish_master" */
  custom_fish_master_aggregate: Custom_Fish_Master_Aggregate;
  /** fetch data from the table: "custom_fish_master" using primary key columns */
  custom_fish_master_by_pk?: Maybe<Custom_Fish_Master>;
  /** fetch data from the table in a streaming manner: "custom_fish_master" */
  custom_fish_master_stream: Array<Custom_Fish_Master>;
  /** fetch data from the table: "custom_meat_master" */
  custom_meat_master: Array<Custom_Meat_Master>;
  /** fetch aggregated fields from the table: "custom_meat_master" */
  custom_meat_master_aggregate: Custom_Meat_Master_Aggregate;
  /** fetch data from the table: "custom_meat_master" using primary key columns */
  custom_meat_master_by_pk?: Maybe<Custom_Meat_Master>;
  /** fetch data from the table in a streaming manner: "custom_meat_master" */
  custom_meat_master_stream: Array<Custom_Meat_Master>;
  /** fetch data from the table: "custom_other_master" */
  custom_other_master: Array<Custom_Other_Master>;
  /** fetch aggregated fields from the table: "custom_other_master" */
  custom_other_master_aggregate: Custom_Other_Master_Aggregate;
  /** fetch data from the table: "custom_other_master" using primary key columns */
  custom_other_master_by_pk?: Maybe<Custom_Other_Master>;
  /** fetch data from the table in a streaming manner: "custom_other_master" */
  custom_other_master_stream: Array<Custom_Other_Master>;
  /** fetch data from the table: "custom_protein_source_master" */
  custom_protein_source_master: Array<Custom_Protein_Source_Master>;
  /** fetch aggregated fields from the table: "custom_protein_source_master" */
  custom_protein_source_master_aggregate: Custom_Protein_Source_Master_Aggregate;
  /** fetch data from the table: "custom_protein_source_master" using primary key columns */
  custom_protein_source_master_by_pk?: Maybe<Custom_Protein_Source_Master>;
  /** fetch data from the table in a streaming manner: "custom_protein_source_master" */
  custom_protein_source_master_stream: Array<Custom_Protein_Source_Master>;
  /** fetch data from the table: "custom_seasoning_master" */
  custom_seasoning_master: Array<Custom_Seasoning_Master>;
  /** fetch aggregated fields from the table: "custom_seasoning_master" */
  custom_seasoning_master_aggregate: Custom_Seasoning_Master_Aggregate;
  /** fetch data from the table: "custom_seasoning_master" using primary key columns */
  custom_seasoning_master_by_pk?: Maybe<Custom_Seasoning_Master>;
  /** fetch data from the table in a streaming manner: "custom_seasoning_master" */
  custom_seasoning_master_stream: Array<Custom_Seasoning_Master>;
  /** fetch data from the table: "custom_spice_master" */
  custom_spice_master: Array<Custom_Spice_Master>;
  /** fetch aggregated fields from the table: "custom_spice_master" */
  custom_spice_master_aggregate: Custom_Spice_Master_Aggregate;
  /** fetch data from the table: "custom_spice_master" using primary key columns */
  custom_spice_master_by_pk?: Maybe<Custom_Spice_Master>;
  /** fetch data from the table in a streaming manner: "custom_spice_master" */
  custom_spice_master_stream: Array<Custom_Spice_Master>;
  /** fetch data from the table: "custom_staple_food_master" */
  custom_staple_food_master: Array<Custom_Staple_Food_Master>;
  /** fetch aggregated fields from the table: "custom_staple_food_master" */
  custom_staple_food_master_aggregate: Custom_Staple_Food_Master_Aggregate;
  /** fetch data from the table: "custom_staple_food_master" using primary key columns */
  custom_staple_food_master_by_pk?: Maybe<Custom_Staple_Food_Master>;
  /** fetch data from the table in a streaming manner: "custom_staple_food_master" */
  custom_staple_food_master_stream: Array<Custom_Staple_Food_Master>;
  /** fetch data from the table: "custom_vegetable_master" */
  custom_vegetable_master: Array<Custom_Vegetable_Master>;
  /** fetch aggregated fields from the table: "custom_vegetable_master" */
  custom_vegetable_master_aggregate: Custom_Vegetable_Master_Aggregate;
  /** fetch data from the table: "custom_vegetable_master" using primary key columns */
  custom_vegetable_master_by_pk?: Maybe<Custom_Vegetable_Master>;
  /** fetch data from the table in a streaming manner: "custom_vegetable_master" */
  custom_vegetable_master_stream: Array<Custom_Vegetable_Master>;
  /** fetch data from the table: "dessert_master" */
  dessert_master: Array<Dessert_Master>;
  /** fetch aggregated fields from the table: "dessert_master" */
  dessert_master_aggregate: Dessert_Master_Aggregate;
  /** fetch data from the table: "dessert_master" using primary key columns */
  dessert_master_by_pk?: Maybe<Dessert_Master>;
  /** fetch data from the table in a streaming manner: "dessert_master" */
  dessert_master_stream: Array<Dessert_Master>;
  /** fetch data from the table: "dessert_stocks" */
  dessert_stocks: Array<Dessert_Stocks>;
  /** fetch aggregated fields from the table: "dessert_stocks" */
  dessert_stocks_aggregate: Dessert_Stocks_Aggregate;
  /** fetch data from the table: "dessert_stocks" using primary key columns */
  dessert_stocks_by_pk?: Maybe<Dessert_Stocks>;
  /** fetch data from the table in a streaming manner: "dessert_stocks" */
  dessert_stocks_stream: Array<Dessert_Stocks>;
  /** fetch data from the table: "fish_master" */
  fish_master: Array<Fish_Master>;
  /** fetch aggregated fields from the table: "fish_master" */
  fish_master_aggregate: Fish_Master_Aggregate;
  /** fetch data from the table: "fish_master" using primary key columns */
  fish_master_by_pk?: Maybe<Fish_Master>;
  /** fetch data from the table in a streaming manner: "fish_master" */
  fish_master_stream: Array<Fish_Master>;
  /** fetch data from the table: "fish_stocks" */
  fish_stocks: Array<Fish_Stocks>;
  /** fetch aggregated fields from the table: "fish_stocks" */
  fish_stocks_aggregate: Fish_Stocks_Aggregate;
  /** fetch data from the table: "fish_stocks" using primary key columns */
  fish_stocks_by_pk?: Maybe<Fish_Stocks>;
  /** fetch data from the table in a streaming manner: "fish_stocks" */
  fish_stocks_stream: Array<Fish_Stocks>;
  /** fetch data from the table: "materials" */
  materials: Array<Materials>;
  /** fetch aggregated fields from the table: "materials" */
  materials_aggregate: Materials_Aggregate;
  /** fetch data from the table: "materials" using primary key columns */
  materials_by_pk?: Maybe<Materials>;
  /** fetch data from the table in a streaming manner: "materials" */
  materials_stream: Array<Materials>;
  /** fetch data from the table: "meat_master" */
  meat_master: Array<Meat_Master>;
  /** fetch aggregated fields from the table: "meat_master" */
  meat_master_aggregate: Meat_Master_Aggregate;
  /** fetch data from the table: "meat_master" using primary key columns */
  meat_master_by_pk?: Maybe<Meat_Master>;
  /** fetch data from the table in a streaming manner: "meat_master" */
  meat_master_stream: Array<Meat_Master>;
  /** fetch data from the table: "meat_stocks" */
  meat_stocks: Array<Meat_Stocks>;
  /** fetch aggregated fields from the table: "meat_stocks" */
  meat_stocks_aggregate: Meat_Stocks_Aggregate;
  /** fetch data from the table: "meat_stocks" using primary key columns */
  meat_stocks_by_pk?: Maybe<Meat_Stocks>;
  /** fetch data from the table in a streaming manner: "meat_stocks" */
  meat_stocks_stream: Array<Meat_Stocks>;
  /** fetch data from the table: "other_master" */
  other_master: Array<Other_Master>;
  /** fetch aggregated fields from the table: "other_master" */
  other_master_aggregate: Other_Master_Aggregate;
  /** fetch data from the table: "other_master" using primary key columns */
  other_master_by_pk?: Maybe<Other_Master>;
  /** fetch data from the table in a streaming manner: "other_master" */
  other_master_stream: Array<Other_Master>;
  /** fetch data from the table: "other_stocks" */
  other_stocks: Array<Other_Stocks>;
  /** fetch aggregated fields from the table: "other_stocks" */
  other_stocks_aggregate: Other_Stocks_Aggregate;
  /** fetch data from the table: "other_stocks" using primary key columns */
  other_stocks_by_pk?: Maybe<Other_Stocks>;
  /** fetch data from the table in a streaming manner: "other_stocks" */
  other_stocks_stream: Array<Other_Stocks>;
  /** fetch data from the table: "protein_source_master" */
  protein_source_master: Array<Protein_Source_Master>;
  /** fetch aggregated fields from the table: "protein_source_master" */
  protein_source_master_aggregate: Protein_Source_Master_Aggregate;
  /** fetch data from the table: "protein_source_master" using primary key columns */
  protein_source_master_by_pk?: Maybe<Protein_Source_Master>;
  /** fetch data from the table in a streaming manner: "protein_source_master" */
  protein_source_master_stream: Array<Protein_Source_Master>;
  /** fetch data from the table: "protein_source_stocks" */
  protein_source_stocks: Array<Protein_Source_Stocks>;
  /** fetch aggregated fields from the table: "protein_source_stocks" */
  protein_source_stocks_aggregate: Protein_Source_Stocks_Aggregate;
  /** fetch data from the table: "protein_source_stocks" using primary key columns */
  protein_source_stocks_by_pk?: Maybe<Protein_Source_Stocks>;
  /** fetch data from the table in a streaming manner: "protein_source_stocks" */
  protein_source_stocks_stream: Array<Protein_Source_Stocks>;
  /** fetch data from the table: "recipe_materials" */
  recipe_materials: Array<Recipe_Materials>;
  /** fetch aggregated fields from the table: "recipe_materials" */
  recipe_materials_aggregate: Recipe_Materials_Aggregate;
  /** fetch data from the table: "recipe_materials" using primary key columns */
  recipe_materials_by_pk?: Maybe<Recipe_Materials>;
  /** fetch data from the table in a streaming manner: "recipe_materials" */
  recipe_materials_stream: Array<Recipe_Materials>;
  /** fetch data from the table: "recipe_steps" */
  recipe_steps: Array<Recipe_Steps>;
  /** fetch aggregated fields from the table: "recipe_steps" */
  recipe_steps_aggregate: Recipe_Steps_Aggregate;
  /** fetch data from the table: "recipe_steps" using primary key columns */
  recipe_steps_by_pk?: Maybe<Recipe_Steps>;
  /** fetch data from the table in a streaming manner: "recipe_steps" */
  recipe_steps_stream: Array<Recipe_Steps>;
  /** fetch data from the table: "recipes" */
  recipes: Array<Recipes>;
  /** fetch aggregated fields from the table: "recipes" */
  recipes_aggregate: Recipes_Aggregate;
  /** fetch data from the table: "recipes" using primary key columns */
  recipes_by_pk?: Maybe<Recipes>;
  /** fetch data from the table in a streaming manner: "recipes" */
  recipes_stream: Array<Recipes>;
  /** fetch data from the table: "seasoning_master" */
  seasoning_master: Array<Seasoning_Master>;
  /** fetch aggregated fields from the table: "seasoning_master" */
  seasoning_master_aggregate: Seasoning_Master_Aggregate;
  /** fetch data from the table: "seasoning_master" using primary key columns */
  seasoning_master_by_pk?: Maybe<Seasoning_Master>;
  /** fetch data from the table in a streaming manner: "seasoning_master" */
  seasoning_master_stream: Array<Seasoning_Master>;
  /** fetch data from the table: "seasoning_stocks" */
  seasoning_stocks: Array<Seasoning_Stocks>;
  /** fetch aggregated fields from the table: "seasoning_stocks" */
  seasoning_stocks_aggregate: Seasoning_Stocks_Aggregate;
  /** fetch data from the table: "seasoning_stocks" using primary key columns */
  seasoning_stocks_by_pk?: Maybe<Seasoning_Stocks>;
  /** fetch data from the table in a streaming manner: "seasoning_stocks" */
  seasoning_stocks_stream: Array<Seasoning_Stocks>;
  /** fetch data from the table: "shopping_memo" */
  shopping_memo: Array<Shopping_Memo>;
  /** fetch aggregated fields from the table: "shopping_memo" */
  shopping_memo_aggregate: Shopping_Memo_Aggregate;
  /** fetch data from the table: "shopping_memo" using primary key columns */
  shopping_memo_by_pk?: Maybe<Shopping_Memo>;
  /** fetch data from the table in a streaming manner: "shopping_memo" */
  shopping_memo_stream: Array<Shopping_Memo>;
  /** fetch data from the table: "spice_master" */
  spice_master: Array<Spice_Master>;
  /** fetch aggregated fields from the table: "spice_master" */
  spice_master_aggregate: Spice_Master_Aggregate;
  /** fetch data from the table: "spice_master" using primary key columns */
  spice_master_by_pk?: Maybe<Spice_Master>;
  /** fetch data from the table in a streaming manner: "spice_master" */
  spice_master_stream: Array<Spice_Master>;
  /** fetch data from the table: "spice_stocks" */
  spice_stocks: Array<Spice_Stocks>;
  /** fetch aggregated fields from the table: "spice_stocks" */
  spice_stocks_aggregate: Spice_Stocks_Aggregate;
  /** fetch data from the table: "spice_stocks" using primary key columns */
  spice_stocks_by_pk?: Maybe<Spice_Stocks>;
  /** fetch data from the table in a streaming manner: "spice_stocks" */
  spice_stocks_stream: Array<Spice_Stocks>;
  /** fetch data from the table: "staple_food_master" */
  staple_food_master: Array<Staple_Food_Master>;
  /** fetch aggregated fields from the table: "staple_food_master" */
  staple_food_master_aggregate: Staple_Food_Master_Aggregate;
  /** fetch data from the table: "staple_food_master" using primary key columns */
  staple_food_master_by_pk?: Maybe<Staple_Food_Master>;
  /** fetch data from the table in a streaming manner: "staple_food_master" */
  staple_food_master_stream: Array<Staple_Food_Master>;
  /** fetch data from the table: "staple_food_stocks" */
  staple_food_stocks: Array<Staple_Food_Stocks>;
  /** fetch aggregated fields from the table: "staple_food_stocks" */
  staple_food_stocks_aggregate: Staple_Food_Stocks_Aggregate;
  /** fetch data from the table: "staple_food_stocks" using primary key columns */
  staple_food_stocks_by_pk?: Maybe<Staple_Food_Stocks>;
  /** fetch data from the table in a streaming manner: "staple_food_stocks" */
  staple_food_stocks_stream: Array<Staple_Food_Stocks>;
  /** fetch data from the table: "unit_master" */
  unit_master: Array<Unit_Master>;
  /** fetch aggregated fields from the table: "unit_master" */
  unit_master_aggregate: Unit_Master_Aggregate;
  /** fetch data from the table: "unit_master" using primary key columns */
  unit_master_by_pk?: Maybe<Unit_Master>;
  /** fetch data from the table in a streaming manner: "unit_master" */
  unit_master_stream: Array<Unit_Master>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "vegetable_master" */
  vegetable_master: Array<Vegetable_Master>;
  /** fetch aggregated fields from the table: "vegetable_master" */
  vegetable_master_aggregate: Vegetable_Master_Aggregate;
  /** fetch data from the table: "vegetable_master" using primary key columns */
  vegetable_master_by_pk?: Maybe<Vegetable_Master>;
  /** fetch data from the table in a streaming manner: "vegetable_master" */
  vegetable_master_stream: Array<Vegetable_Master>;
  /** fetch data from the table: "vegetable_stocks" */
  vegetable_stocks: Array<Vegetable_Stocks>;
  /** fetch aggregated fields from the table: "vegetable_stocks" */
  vegetable_stocks_aggregate: Vegetable_Stocks_Aggregate;
  /** fetch data from the table: "vegetable_stocks" using primary key columns */
  vegetable_stocks_by_pk?: Maybe<Vegetable_Stocks>;
  /** fetch data from the table in a streaming manner: "vegetable_stocks" */
  vegetable_stocks_stream: Array<Vegetable_Stocks>;
};


export type Subscription_RootCustom_Dessert_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Dessert_Master_Order_By>>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Dessert_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Dessert_Master_Order_By>>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Dessert_Master_By_PkArgs = {
  custom_dessert_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Dessert_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Dessert_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Dessert_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Fish_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fish_Master_Order_By>>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Fish_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Fish_Master_Order_By>>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Fish_Master_By_PkArgs = {
  custom_fish_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Fish_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Fish_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Fish_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Meat_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Meat_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Meat_Master_By_PkArgs = {
  custom_meat_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Meat_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Meat_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Other_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Other_Master_Order_By>>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Other_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Other_Master_Order_By>>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Other_Master_By_PkArgs = {
  custom_other_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Other_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Other_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Other_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Protein_Source_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Protein_Source_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Protein_Source_Master_By_PkArgs = {
  custom_protein_source_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Protein_Source_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Protein_Source_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Seasoning_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Seasoning_Master_Order_By>>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Seasoning_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Seasoning_Master_Order_By>>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Seasoning_Master_By_PkArgs = {
  custom_seasoning_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Seasoning_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Seasoning_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Spice_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Spice_Master_Order_By>>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Spice_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Spice_Master_Order_By>>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Spice_Master_By_PkArgs = {
  custom_spice_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Spice_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Spice_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Spice_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Staple_Food_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Staple_Food_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Staple_Food_Master_By_PkArgs = {
  custom_staple_food_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Staple_Food_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Staple_Food_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Vegetable_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Vegetable_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootCustom_Vegetable_Master_By_PkArgs = {
  custom_vegetable_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustom_Vegetable_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Custom_Vegetable_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootDessert_MasterArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Master_Order_By>>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};


export type Subscription_RootDessert_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Master_Order_By>>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};


export type Subscription_RootDessert_Master_By_PkArgs = {
  dessert_id: Scalars['uuid']['input'];
};


export type Subscription_RootDessert_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dessert_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Dessert_Master_Bool_Exp>;
};


export type Subscription_RootDessert_StocksArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


export type Subscription_RootDessert_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


export type Subscription_RootDessert_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootDessert_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dessert_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


export type Subscription_RootFish_MasterArgs = {
  distinct_on?: InputMaybe<Array<Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Master_Order_By>>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};


export type Subscription_RootFish_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fish_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Master_Order_By>>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};


export type Subscription_RootFish_Master_By_PkArgs = {
  fish_id: Scalars['uuid']['input'];
};


export type Subscription_RootFish_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fish_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Fish_Master_Bool_Exp>;
};


export type Subscription_RootFish_StocksArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


export type Subscription_RootFish_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


export type Subscription_RootFish_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootFish_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fish_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


export type Subscription_RootMaterialsArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


export type Subscription_RootMaterials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Materials_Order_By>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


export type Subscription_RootMaterials_By_PkArgs = {
  material_id: Scalars['uuid']['input'];
};


export type Subscription_RootMaterials_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Materials_Stream_Cursor_Input>>;
  where?: InputMaybe<Materials_Bool_Exp>;
};


export type Subscription_RootMeat_MasterArgs = {
  distinct_on?: InputMaybe<Array<Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Master_Order_By>>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};


export type Subscription_RootMeat_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Master_Order_By>>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};


export type Subscription_RootMeat_Master_By_PkArgs = {
  meat_id: Scalars['uuid']['input'];
};


export type Subscription_RootMeat_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meat_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Meat_Master_Bool_Exp>;
};


export type Subscription_RootMeat_StocksArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


export type Subscription_RootMeat_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


export type Subscription_RootMeat_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootMeat_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meat_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


export type Subscription_RootOther_MasterArgs = {
  distinct_on?: InputMaybe<Array<Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Master_Order_By>>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};


export type Subscription_RootOther_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Master_Order_By>>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};


export type Subscription_RootOther_Master_By_PkArgs = {
  other_id: Scalars['uuid']['input'];
};


export type Subscription_RootOther_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Other_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Other_Master_Bool_Exp>;
};


export type Subscription_RootOther_StocksArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


export type Subscription_RootOther_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


export type Subscription_RootOther_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootOther_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Other_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


export type Subscription_RootProtein_Source_MasterArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootProtein_Source_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Master_Order_By>>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootProtein_Source_Master_By_PkArgs = {
  protein_source_id: Scalars['uuid']['input'];
};


export type Subscription_RootProtein_Source_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Protein_Source_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Protein_Source_Master_Bool_Exp>;
};


export type Subscription_RootProtein_Source_StocksArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


export type Subscription_RootProtein_Source_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


export type Subscription_RootProtein_Source_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootProtein_Source_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Protein_Source_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


export type Subscription_RootRecipe_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


export type Subscription_RootRecipe_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Materials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Materials_Order_By>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


export type Subscription_RootRecipe_Materials_By_PkArgs = {
  recipe_material_id: Scalars['uuid']['input'];
};


export type Subscription_RootRecipe_Materials_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipe_Materials_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipe_Materials_Bool_Exp>;
};


export type Subscription_RootRecipe_StepsArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


export type Subscription_RootRecipe_Steps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Steps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipe_Steps_Order_By>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


export type Subscription_RootRecipe_Steps_By_PkArgs = {
  recipe_step_id: Scalars['uuid']['input'];
};


export type Subscription_RootRecipe_Steps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipe_Steps_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipe_Steps_Bool_Exp>;
};


export type Subscription_RootRecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Subscription_RootRecipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Subscription_RootRecipes_By_PkArgs = {
  recipe_id: Scalars['uuid']['input'];
};


export type Subscription_RootRecipes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recipes_Stream_Cursor_Input>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


export type Subscription_RootSeasoning_MasterArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Master_Order_By>>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootSeasoning_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Master_Order_By>>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootSeasoning_Master_By_PkArgs = {
  seasoning_id: Scalars['uuid']['input'];
};


export type Subscription_RootSeasoning_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Seasoning_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Seasoning_Master_Bool_Exp>;
};


export type Subscription_RootSeasoning_StocksArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


export type Subscription_RootSeasoning_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


export type Subscription_RootSeasoning_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootSeasoning_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Seasoning_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


export type Subscription_RootShopping_MemoArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


export type Subscription_RootShopping_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


export type Subscription_RootShopping_Memo_By_PkArgs = {
  shopping_memo_id: Scalars['uuid']['input'];
};


export type Subscription_RootShopping_Memo_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Shopping_Memo_Stream_Cursor_Input>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


export type Subscription_RootSpice_MasterArgs = {
  distinct_on?: InputMaybe<Array<Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Master_Order_By>>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};


export type Subscription_RootSpice_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spice_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Master_Order_By>>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};


export type Subscription_RootSpice_Master_By_PkArgs = {
  spice_id: Scalars['uuid']['input'];
};


export type Subscription_RootSpice_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Spice_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Spice_Master_Bool_Exp>;
};


export type Subscription_RootSpice_StocksArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


export type Subscription_RootSpice_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


export type Subscription_RootSpice_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootSpice_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Spice_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


export type Subscription_RootStaple_Food_MasterArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootStaple_Food_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Master_Order_By>>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootStaple_Food_Master_By_PkArgs = {
  staple_food_id: Scalars['uuid']['input'];
};


export type Subscription_RootStaple_Food_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staple_Food_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Staple_Food_Master_Bool_Exp>;
};


export type Subscription_RootStaple_Food_StocksArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


export type Subscription_RootStaple_Food_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


export type Subscription_RootStaple_Food_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootStaple_Food_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staple_Food_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


export type Subscription_RootUnit_MasterArgs = {
  distinct_on?: InputMaybe<Array<Unit_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Master_Order_By>>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};


export type Subscription_RootUnit_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Unit_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Unit_Master_Order_By>>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};


export type Subscription_RootUnit_Master_By_PkArgs = {
  unit_id: Scalars['Int']['input'];
};


export type Subscription_RootUnit_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Unit_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVegetable_MasterArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Master_Order_By>>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootVegetable_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Master_Order_By>>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootVegetable_Master_By_PkArgs = {
  vegetable_id: Scalars['uuid']['input'];
};


export type Subscription_RootVegetable_Master_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vegetable_Master_Stream_Cursor_Input>>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};


export type Subscription_RootVegetable_StocksArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};


export type Subscription_RootVegetable_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};


export type Subscription_RootVegetable_Stocks_By_PkArgs = {
  stock_id: Scalars['uuid']['input'];
};


export type Subscription_RootVegetable_Stocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vegetable_Stocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** 単位のマスタデータ */
export type Unit_Master = {
  __typename?: 'unit_master';
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
  /** An object relationship */
  unit_master_custom_meat_master?: Maybe<Custom_Meat_Master>;
  /** An object relationship */
  unit_master_custom_vegetable_master?: Maybe<Custom_Vegetable_Master>;
  /** An object relationship */
  unit_master_meat_master?: Maybe<Meat_Master>;
  /** An object relationship */
  unit_master_vegetable_master?: Maybe<Vegetable_Master>;
  /** 単位名 */
  unit_name: Scalars['String']['output'];
};

/** aggregated selection of "unit_master" */
export type Unit_Master_Aggregate = {
  __typename?: 'unit_master_aggregate';
  aggregate?: Maybe<Unit_Master_Aggregate_Fields>;
  nodes: Array<Unit_Master>;
};

/** aggregate fields of "unit_master" */
export type Unit_Master_Aggregate_Fields = {
  __typename?: 'unit_master_aggregate_fields';
  avg?: Maybe<Unit_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Unit_Master_Max_Fields>;
  min?: Maybe<Unit_Master_Min_Fields>;
  stddev?: Maybe<Unit_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Unit_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Unit_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Unit_Master_Sum_Fields>;
  var_pop?: Maybe<Unit_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Unit_Master_Var_Samp_Fields>;
  variance?: Maybe<Unit_Master_Variance_Fields>;
};


/** aggregate fields of "unit_master" */
export type Unit_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Unit_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Unit_Master_Avg_Fields = {
  __typename?: 'unit_master_avg_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "unit_master". All fields are combined with a logical 'AND'. */
export type Unit_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Unit_Master_Bool_Exp>>;
  _not?: InputMaybe<Unit_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Unit_Master_Bool_Exp>>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  unit_master_custom_meat_master?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
  unit_master_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
  unit_master_meat_master?: InputMaybe<Meat_Master_Bool_Exp>;
  unit_master_vegetable_master?: InputMaybe<Vegetable_Master_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit_master" */
export enum Unit_Master_Constraint {
  /** unique or primary key constraint on columns "unit_id" */
  UnitMasterPkey = 'unit_master_pkey'
}

/** input type for incrementing numeric columns in table "unit_master" */
export type Unit_Master_Inc_Input = {
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "unit_master" */
export type Unit_Master_Insert_Input = {
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  unit_master_custom_meat_master?: InputMaybe<Custom_Meat_Master_Obj_Rel_Insert_Input>;
  unit_master_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Obj_Rel_Insert_Input>;
  unit_master_meat_master?: InputMaybe<Meat_Master_Obj_Rel_Insert_Input>;
  unit_master_vegetable_master?: InputMaybe<Vegetable_Master_Obj_Rel_Insert_Input>;
  /** 単位名 */
  unit_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Unit_Master_Max_Fields = {
  __typename?: 'unit_master_max_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
  /** 単位名 */
  unit_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Unit_Master_Min_Fields = {
  __typename?: 'unit_master_min_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
  /** 単位名 */
  unit_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "unit_master" */
export type Unit_Master_Mutation_Response = {
  __typename?: 'unit_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Unit_Master>;
};

/** input type for inserting object relation for remote table "unit_master" */
export type Unit_Master_Obj_Rel_Insert_Input = {
  data: Unit_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Unit_Master_On_Conflict>;
};

/** on_conflict condition type for table "unit_master" */
export type Unit_Master_On_Conflict = {
  constraint: Unit_Master_Constraint;
  update_columns?: Array<Unit_Master_Update_Column>;
  where?: InputMaybe<Unit_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "unit_master". */
export type Unit_Master_Order_By = {
  unit_id?: InputMaybe<Order_By>;
  unit_master_custom_meat_master?: InputMaybe<Custom_Meat_Master_Order_By>;
  unit_master_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Order_By>;
  unit_master_meat_master?: InputMaybe<Meat_Master_Order_By>;
  unit_master_vegetable_master?: InputMaybe<Vegetable_Master_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: unit_master */
export type Unit_Master_Pk_Columns_Input = {
  /** 単位ID */
  unit_id: Scalars['Int']['input'];
};

/** select columns of table "unit_master" */
export enum Unit_Master_Select_Column {
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UnitName = 'unit_name'
}

/** input type for updating data in table "unit_master" */
export type Unit_Master_Set_Input = {
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  /** 単位名 */
  unit_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Unit_Master_Stddev_Fields = {
  __typename?: 'unit_master_stddev_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Unit_Master_Stddev_Pop_Fields = {
  __typename?: 'unit_master_stddev_pop_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Unit_Master_Stddev_Samp_Fields = {
  __typename?: 'unit_master_stddev_samp_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "unit_master" */
export type Unit_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Unit_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unit_Master_Stream_Cursor_Value_Input = {
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  /** 単位名 */
  unit_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Unit_Master_Sum_Fields = {
  __typename?: 'unit_master_sum_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "unit_master" */
export enum Unit_Master_Update_Column {
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  UnitName = 'unit_name'
}

export type Unit_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Unit_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Unit_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Unit_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Unit_Master_Var_Pop_Fields = {
  __typename?: 'unit_master_var_pop_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Unit_Master_Var_Samp_Fields = {
  __typename?: 'unit_master_var_samp_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Unit_Master_Variance_Fields = {
  __typename?: 'unit_master_variance_fields';
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** frimane ユーザー */
export type Users = {
  __typename?: 'users';
  /** アカウント作成日 */
  created_at: Scalars['timestamptz']['output'];
  /** Emailアドレス */
  email: Scalars['String']['output'];
  /** ユーザーID */
  id: Scalars['String']['output'];
  /** An array relationship */
  user_meat_stocks: Array<Meat_Stocks>;
  /** An aggregate relationship */
  user_meat_stocks_aggregate: Meat_Stocks_Aggregate;
  /** An array relationship */
  users_custom_meat_master: Array<Custom_Meat_Master>;
  /** An aggregate relationship */
  users_custom_meat_master_aggregate: Custom_Meat_Master_Aggregate;
  /** An array relationship */
  users_custom_vegetable_master: Array<Custom_Vegetable_Master>;
  /** An aggregate relationship */
  users_custom_vegetable_master_aggregate: Custom_Vegetable_Master_Aggregate;
  /** An array relationship */
  users_dessert_stocks: Array<Dessert_Stocks>;
  /** An aggregate relationship */
  users_dessert_stocks_aggregate: Dessert_Stocks_Aggregate;
  /** An array relationship */
  users_fish_stocks: Array<Fish_Stocks>;
  /** An aggregate relationship */
  users_fish_stocks_aggregate: Fish_Stocks_Aggregate;
  /** An array relationship */
  users_other_stocks: Array<Other_Stocks>;
  /** An aggregate relationship */
  users_other_stocks_aggregate: Other_Stocks_Aggregate;
  /** An array relationship */
  users_protein_source_stocks: Array<Protein_Source_Stocks>;
  /** An aggregate relationship */
  users_protein_source_stocks_aggregate: Protein_Source_Stocks_Aggregate;
  /** An array relationship */
  users_recipes: Array<Recipes>;
  /** An aggregate relationship */
  users_recipes_aggregate: Recipes_Aggregate;
  /** An array relationship */
  users_seasoning_stocks: Array<Seasoning_Stocks>;
  /** An aggregate relationship */
  users_seasoning_stocks_aggregate: Seasoning_Stocks_Aggregate;
  /** An array relationship */
  users_shopping_memo: Array<Shopping_Memo>;
  /** An aggregate relationship */
  users_shopping_memo_aggregate: Shopping_Memo_Aggregate;
  /** An array relationship */
  users_spice_stocks: Array<Spice_Stocks>;
  /** An aggregate relationship */
  users_spice_stocks_aggregate: Spice_Stocks_Aggregate;
  /** An array relationship */
  users_staple_food_stocks: Array<Staple_Food_Stocks>;
  /** An aggregate relationship */
  users_staple_food_stocks_aggregate: Staple_Food_Stocks_Aggregate;
  /** An array relationship */
  users_vegetable_stocks: Array<Vegetable_Stocks>;
  /** An aggregate relationship */
  users_vegetable_stocks_aggregate: Vegetable_Stocks_Aggregate;
};


/** frimane ユーザー */
export type UsersUser_Meat_StocksArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUser_Meat_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meat_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meat_Stocks_Order_By>>;
  where?: InputMaybe<Meat_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Custom_Meat_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Custom_Meat_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Meat_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Meat_Master_Order_By>>;
  where?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Custom_Vegetable_MasterArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Custom_Vegetable_Master_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Custom_Vegetable_Master_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Custom_Vegetable_Master_Order_By>>;
  where?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Dessert_StocksArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Dessert_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dessert_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dessert_Stocks_Order_By>>;
  where?: InputMaybe<Dessert_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Fish_StocksArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Fish_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fish_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fish_Stocks_Order_By>>;
  where?: InputMaybe<Fish_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Other_StocksArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Other_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Other_Stocks_Order_By>>;
  where?: InputMaybe<Other_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Protein_Source_StocksArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Protein_Source_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protein_Source_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Protein_Source_Stocks_Order_By>>;
  where?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_RecipesArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Recipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recipes_Order_By>>;
  where?: InputMaybe<Recipes_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Seasoning_StocksArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Seasoning_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Seasoning_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Seasoning_Stocks_Order_By>>;
  where?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Shopping_MemoArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Shopping_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shopping_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shopping_Memo_Order_By>>;
  where?: InputMaybe<Shopping_Memo_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Spice_StocksArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Spice_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Spice_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Spice_Stocks_Order_By>>;
  where?: InputMaybe<Spice_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Staple_Food_StocksArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Staple_Food_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staple_Food_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staple_Food_Stocks_Order_By>>;
  where?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Vegetable_StocksArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};


/** frimane ユーザー */
export type UsersUsers_Vegetable_Stocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vegetable_Stocks_Order_By>>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  user_meat_stocks?: InputMaybe<Meat_Stocks_Bool_Exp>;
  user_meat_stocks_aggregate?: InputMaybe<Meat_Stocks_Aggregate_Bool_Exp>;
  users_custom_meat_master?: InputMaybe<Custom_Meat_Master_Bool_Exp>;
  users_custom_meat_master_aggregate?: InputMaybe<Custom_Meat_Master_Aggregate_Bool_Exp>;
  users_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
  users_custom_vegetable_master_aggregate?: InputMaybe<Custom_Vegetable_Master_Aggregate_Bool_Exp>;
  users_dessert_stocks?: InputMaybe<Dessert_Stocks_Bool_Exp>;
  users_dessert_stocks_aggregate?: InputMaybe<Dessert_Stocks_Aggregate_Bool_Exp>;
  users_fish_stocks?: InputMaybe<Fish_Stocks_Bool_Exp>;
  users_fish_stocks_aggregate?: InputMaybe<Fish_Stocks_Aggregate_Bool_Exp>;
  users_other_stocks?: InputMaybe<Other_Stocks_Bool_Exp>;
  users_other_stocks_aggregate?: InputMaybe<Other_Stocks_Aggregate_Bool_Exp>;
  users_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Bool_Exp>;
  users_protein_source_stocks_aggregate?: InputMaybe<Protein_Source_Stocks_Aggregate_Bool_Exp>;
  users_recipes?: InputMaybe<Recipes_Bool_Exp>;
  users_recipes_aggregate?: InputMaybe<Recipes_Aggregate_Bool_Exp>;
  users_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Bool_Exp>;
  users_seasoning_stocks_aggregate?: InputMaybe<Seasoning_Stocks_Aggregate_Bool_Exp>;
  users_shopping_memo?: InputMaybe<Shopping_Memo_Bool_Exp>;
  users_shopping_memo_aggregate?: InputMaybe<Shopping_Memo_Aggregate_Bool_Exp>;
  users_spice_stocks?: InputMaybe<Spice_Stocks_Bool_Exp>;
  users_spice_stocks_aggregate?: InputMaybe<Spice_Stocks_Aggregate_Bool_Exp>;
  users_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Bool_Exp>;
  users_staple_food_stocks_aggregate?: InputMaybe<Staple_Food_Stocks_Aggregate_Bool_Exp>;
  users_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  users_vegetable_stocks_aggregate?: InputMaybe<Vegetable_Stocks_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  /** アカウント作成日 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Emailアドレス */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ユーザーID */
  id?: InputMaybe<Scalars['String']['input']>;
  user_meat_stocks?: InputMaybe<Meat_Stocks_Arr_Rel_Insert_Input>;
  users_custom_meat_master?: InputMaybe<Custom_Meat_Master_Arr_Rel_Insert_Input>;
  users_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Arr_Rel_Insert_Input>;
  users_dessert_stocks?: InputMaybe<Dessert_Stocks_Arr_Rel_Insert_Input>;
  users_fish_stocks?: InputMaybe<Fish_Stocks_Arr_Rel_Insert_Input>;
  users_other_stocks?: InputMaybe<Other_Stocks_Arr_Rel_Insert_Input>;
  users_protein_source_stocks?: InputMaybe<Protein_Source_Stocks_Arr_Rel_Insert_Input>;
  users_recipes?: InputMaybe<Recipes_Arr_Rel_Insert_Input>;
  users_seasoning_stocks?: InputMaybe<Seasoning_Stocks_Arr_Rel_Insert_Input>;
  users_shopping_memo?: InputMaybe<Shopping_Memo_Arr_Rel_Insert_Input>;
  users_spice_stocks?: InputMaybe<Spice_Stocks_Arr_Rel_Insert_Input>;
  users_staple_food_stocks?: InputMaybe<Staple_Food_Stocks_Arr_Rel_Insert_Input>;
  users_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  /** アカウント作成日 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Emailアドレス */
  email?: Maybe<Scalars['String']['output']>;
  /** ユーザーID */
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  /** アカウント作成日 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Emailアドレス */
  email?: Maybe<Scalars['String']['output']>;
  /** ユーザーID */
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_meat_stocks_aggregate?: InputMaybe<Meat_Stocks_Aggregate_Order_By>;
  users_custom_meat_master_aggregate?: InputMaybe<Custom_Meat_Master_Aggregate_Order_By>;
  users_custom_vegetable_master_aggregate?: InputMaybe<Custom_Vegetable_Master_Aggregate_Order_By>;
  users_dessert_stocks_aggregate?: InputMaybe<Dessert_Stocks_Aggregate_Order_By>;
  users_fish_stocks_aggregate?: InputMaybe<Fish_Stocks_Aggregate_Order_By>;
  users_other_stocks_aggregate?: InputMaybe<Other_Stocks_Aggregate_Order_By>;
  users_protein_source_stocks_aggregate?: InputMaybe<Protein_Source_Stocks_Aggregate_Order_By>;
  users_recipes_aggregate?: InputMaybe<Recipes_Aggregate_Order_By>;
  users_seasoning_stocks_aggregate?: InputMaybe<Seasoning_Stocks_Aggregate_Order_By>;
  users_shopping_memo_aggregate?: InputMaybe<Shopping_Memo_Aggregate_Order_By>;
  users_spice_stocks_aggregate?: InputMaybe<Spice_Stocks_Aggregate_Order_By>;
  users_staple_food_stocks_aggregate?: InputMaybe<Staple_Food_Stocks_Aggregate_Order_By>;
  users_vegetable_stocks_aggregate?: InputMaybe<Vegetable_Stocks_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  /** ユーザーID */
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  /** アカウント作成日 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Emailアドレス */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ユーザーID */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  /** アカウント作成日 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Emailアドレス */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ユーザーID */
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** 野菜のマスタデータ */
export type Vegetable_Master = {
  __typename?: 'vegetable_master';
  /** 賞味期限の基準期間 */
  default_expiration_period: Scalars['Int']['output'];
  /** 表示名 */
  display_name: Scalars['String']['output'];
  /** 画像URI */
  image_uri: Scalars['String']['output'];
  /** 単位ID */
  unit_id: Scalars['Int']['output'];
  vegetable_id: Scalars['uuid']['output'];
  /** An object relationship */
  vegetable_master_unit_master?: Maybe<Unit_Master>;
  /** An object relationship */
  vegetable_master_vegetable_stocks?: Maybe<Vegetable_Stocks>;
  /** 野菜名（ひらがな） */
  vegetable_name: Scalars['String']['output'];
};

/** aggregated selection of "vegetable_master" */
export type Vegetable_Master_Aggregate = {
  __typename?: 'vegetable_master_aggregate';
  aggregate?: Maybe<Vegetable_Master_Aggregate_Fields>;
  nodes: Array<Vegetable_Master>;
};

/** aggregate fields of "vegetable_master" */
export type Vegetable_Master_Aggregate_Fields = {
  __typename?: 'vegetable_master_aggregate_fields';
  avg?: Maybe<Vegetable_Master_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vegetable_Master_Max_Fields>;
  min?: Maybe<Vegetable_Master_Min_Fields>;
  stddev?: Maybe<Vegetable_Master_Stddev_Fields>;
  stddev_pop?: Maybe<Vegetable_Master_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vegetable_Master_Stddev_Samp_Fields>;
  sum?: Maybe<Vegetable_Master_Sum_Fields>;
  var_pop?: Maybe<Vegetable_Master_Var_Pop_Fields>;
  var_samp?: Maybe<Vegetable_Master_Var_Samp_Fields>;
  variance?: Maybe<Vegetable_Master_Variance_Fields>;
};


/** aggregate fields of "vegetable_master" */
export type Vegetable_Master_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vegetable_Master_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vegetable_Master_Avg_Fields = {
  __typename?: 'vegetable_master_avg_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vegetable_master". All fields are combined with a logical 'AND'. */
export type Vegetable_Master_Bool_Exp = {
  _and?: InputMaybe<Array<Vegetable_Master_Bool_Exp>>;
  _not?: InputMaybe<Vegetable_Master_Bool_Exp>;
  _or?: InputMaybe<Array<Vegetable_Master_Bool_Exp>>;
  default_expiration_period?: InputMaybe<Int_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  unit_id?: InputMaybe<Int_Comparison_Exp>;
  vegetable_id?: InputMaybe<Uuid_Comparison_Exp>;
  vegetable_master_unit_master?: InputMaybe<Unit_Master_Bool_Exp>;
  vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  vegetable_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vegetable_master" */
export enum Vegetable_Master_Constraint {
  /** unique or primary key constraint on columns "display_name" */
  VegetableMasterDisplayNameKey = 'vegetable_master_display_name_key',
  /** unique or primary key constraint on columns "image_uri" */
  VegetableMasterImageUriKey = 'vegetable_master_image_uri_key',
  /** unique or primary key constraint on columns "vegetable_id" */
  VegetableMasterPkey = 'vegetable_master_pkey',
  /** unique or primary key constraint on columns "vegetable_name" */
  VegetableMasterVegetableNameKey = 'vegetable_master_vegetable_name_key'
}

/** input type for incrementing numeric columns in table "vegetable_master" */
export type Vegetable_Master_Inc_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vegetable_master" */
export type Vegetable_Master_Insert_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  vegetable_master_unit_master?: InputMaybe<Unit_Master_Obj_Rel_Insert_Input>;
  vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Obj_Rel_Insert_Input>;
  /** 野菜名（ひらがな） */
  vegetable_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Vegetable_Master_Max_Fields = {
  __typename?: 'vegetable_master_max_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
  vegetable_id?: Maybe<Scalars['uuid']['output']>;
  /** 野菜名（ひらがな） */
  vegetable_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Vegetable_Master_Min_Fields = {
  __typename?: 'vegetable_master_min_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 表示名 */
  display_name?: Maybe<Scalars['String']['output']>;
  /** 画像URI */
  image_uri?: Maybe<Scalars['String']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
  vegetable_id?: Maybe<Scalars['uuid']['output']>;
  /** 野菜名（ひらがな） */
  vegetable_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "vegetable_master" */
export type Vegetable_Master_Mutation_Response = {
  __typename?: 'vegetable_master_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Vegetable_Master>;
};

/** input type for inserting object relation for remote table "vegetable_master" */
export type Vegetable_Master_Obj_Rel_Insert_Input = {
  data: Vegetable_Master_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vegetable_Master_On_Conflict>;
};

/** on_conflict condition type for table "vegetable_master" */
export type Vegetable_Master_On_Conflict = {
  constraint: Vegetable_Master_Constraint;
  update_columns?: Array<Vegetable_Master_Update_Column>;
  where?: InputMaybe<Vegetable_Master_Bool_Exp>;
};

/** Ordering options when selecting data from "vegetable_master". */
export type Vegetable_Master_Order_By = {
  default_expiration_period?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  unit_id?: InputMaybe<Order_By>;
  vegetable_id?: InputMaybe<Order_By>;
  vegetable_master_unit_master?: InputMaybe<Unit_Master_Order_By>;
  vegetable_master_vegetable_stocks?: InputMaybe<Vegetable_Stocks_Order_By>;
  vegetable_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vegetable_master */
export type Vegetable_Master_Pk_Columns_Input = {
  vegetable_id: Scalars['uuid']['input'];
};

/** select columns of table "vegetable_master" */
export enum Vegetable_Master_Select_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  VegetableId = 'vegetable_id',
  /** column name */
  VegetableName = 'vegetable_name'
}

/** input type for updating data in table "vegetable_master" */
export type Vegetable_Master_Set_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 野菜名（ひらがな） */
  vegetable_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Vegetable_Master_Stddev_Fields = {
  __typename?: 'vegetable_master_stddev_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vegetable_Master_Stddev_Pop_Fields = {
  __typename?: 'vegetable_master_stddev_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vegetable_Master_Stddev_Samp_Fields = {
  __typename?: 'vegetable_master_stddev_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vegetable_master" */
export type Vegetable_Master_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vegetable_Master_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vegetable_Master_Stream_Cursor_Value_Input = {
  /** 賞味期限の基準期間 */
  default_expiration_period?: InputMaybe<Scalars['Int']['input']>;
  /** 表示名 */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** 画像URI */
  image_uri?: InputMaybe<Scalars['String']['input']>;
  /** 単位ID */
  unit_id?: InputMaybe<Scalars['Int']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  /** 野菜名（ひらがな） */
  vegetable_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Vegetable_Master_Sum_Fields = {
  __typename?: 'vegetable_master_sum_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Int']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "vegetable_master" */
export enum Vegetable_Master_Update_Column {
  /** column name */
  DefaultExpirationPeriod = 'default_expiration_period',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  UnitId = 'unit_id',
  /** column name */
  VegetableId = 'vegetable_id',
  /** column name */
  VegetableName = 'vegetable_name'
}

export type Vegetable_Master_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vegetable_Master_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vegetable_Master_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vegetable_Master_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vegetable_Master_Var_Pop_Fields = {
  __typename?: 'vegetable_master_var_pop_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vegetable_Master_Var_Samp_Fields = {
  __typename?: 'vegetable_master_var_samp_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vegetable_Master_Variance_Fields = {
  __typename?: 'vegetable_master_variance_fields';
  /** 賞味期限の基準期間 */
  default_expiration_period?: Maybe<Scalars['Float']['output']>;
  /** 単位ID */
  unit_id?: Maybe<Scalars['Float']['output']>;
};

/** ユーザーごとの野菜ストック */
export type Vegetable_Stocks = {
  __typename?: 'vegetable_stocks';
  /** 賞味期限日 */
  expiration_date: Scalars['date']['output'];
  /** 増減単位 */
  incremental_unit: Scalars['numeric']['output'];
  /** お気に入りフラグ */
  is_favorite: Scalars['Boolean']['output'];
  /** メモ */
  memo: Scalars['String']['output'];
  /** 在庫数 */
  quantity: Scalars['numeric']['output'];
  stock_id: Scalars['uuid']['output'];
  /** ユーザーID */
  user_id: Scalars['String']['output'];
  vegetable_id: Scalars['uuid']['output'];
  /** An object relationship */
  vegetable_stocks_custom_vegetable_master?: Maybe<Custom_Vegetable_Master>;
  /** An object relationship */
  vegetable_stocks_users?: Maybe<Users>;
  /** An object relationship */
  vegetable_stocks_vegetable_master?: Maybe<Vegetable_Master>;
};

/** aggregated selection of "vegetable_stocks" */
export type Vegetable_Stocks_Aggregate = {
  __typename?: 'vegetable_stocks_aggregate';
  aggregate?: Maybe<Vegetable_Stocks_Aggregate_Fields>;
  nodes: Array<Vegetable_Stocks>;
};

export type Vegetable_Stocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vegetable_Stocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vegetable_Stocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vegetable_Stocks_Aggregate_Bool_Exp_Count>;
};

export type Vegetable_Stocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vegetable_Stocks_Select_Column_Vegetable_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vegetable_Stocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vegetable_Stocks_Select_Column_Vegetable_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vegetable_Stocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vegetable_stocks" */
export type Vegetable_Stocks_Aggregate_Fields = {
  __typename?: 'vegetable_stocks_aggregate_fields';
  avg?: Maybe<Vegetable_Stocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vegetable_Stocks_Max_Fields>;
  min?: Maybe<Vegetable_Stocks_Min_Fields>;
  stddev?: Maybe<Vegetable_Stocks_Stddev_Fields>;
  stddev_pop?: Maybe<Vegetable_Stocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vegetable_Stocks_Stddev_Samp_Fields>;
  sum?: Maybe<Vegetable_Stocks_Sum_Fields>;
  var_pop?: Maybe<Vegetable_Stocks_Var_Pop_Fields>;
  var_samp?: Maybe<Vegetable_Stocks_Var_Samp_Fields>;
  variance?: Maybe<Vegetable_Stocks_Variance_Fields>;
};


/** aggregate fields of "vegetable_stocks" */
export type Vegetable_Stocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vegetable_Stocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vegetable_stocks" */
export type Vegetable_Stocks_Aggregate_Order_By = {
  avg?: InputMaybe<Vegetable_Stocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vegetable_Stocks_Max_Order_By>;
  min?: InputMaybe<Vegetable_Stocks_Min_Order_By>;
  stddev?: InputMaybe<Vegetable_Stocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vegetable_Stocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vegetable_Stocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vegetable_Stocks_Sum_Order_By>;
  var_pop?: InputMaybe<Vegetable_Stocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vegetable_Stocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Vegetable_Stocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vegetable_stocks" */
export type Vegetable_Stocks_Arr_Rel_Insert_Input = {
  data: Array<Vegetable_Stocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vegetable_Stocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Vegetable_Stocks_Avg_Fields = {
  __typename?: 'vegetable_stocks_avg_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Avg_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vegetable_stocks". All fields are combined with a logical 'AND'. */
export type Vegetable_Stocks_Bool_Exp = {
  _and?: InputMaybe<Array<Vegetable_Stocks_Bool_Exp>>;
  _not?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
  _or?: InputMaybe<Array<Vegetable_Stocks_Bool_Exp>>;
  expiration_date?: InputMaybe<Date_Comparison_Exp>;
  incremental_unit?: InputMaybe<Numeric_Comparison_Exp>;
  is_favorite?: InputMaybe<Boolean_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  stock_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  vegetable_id?: InputMaybe<Uuid_Comparison_Exp>;
  vegetable_stocks_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Bool_Exp>;
  vegetable_stocks_users?: InputMaybe<Users_Bool_Exp>;
  vegetable_stocks_vegetable_master?: InputMaybe<Vegetable_Master_Bool_Exp>;
};

/** unique or primary key constraints on table "vegetable_stocks" */
export enum Vegetable_Stocks_Constraint {
  /** unique or primary key constraint on columns "stock_id" */
  VegetableStocksPkey = 'vegetable_stocks_pkey'
}

/** input type for incrementing numeric columns in table "vegetable_stocks" */
export type Vegetable_Stocks_Inc_Input = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "vegetable_stocks" */
export type Vegetable_Stocks_Insert_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
  vegetable_stocks_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Obj_Rel_Insert_Input>;
  vegetable_stocks_users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  vegetable_stocks_vegetable_master?: InputMaybe<Vegetable_Master_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vegetable_Stocks_Max_Fields = {
  __typename?: 'vegetable_stocks_max_fields';
  /** 賞味期限日 */
  expiration_date?: Maybe<Scalars['date']['output']>;
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  /** メモ */
  memo?: Maybe<Scalars['String']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーID */
  user_id?: Maybe<Scalars['String']['output']>;
  vegetable_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Max_Order_By = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Order_By>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** メモ */
  memo?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  /** ユーザーID */
  user_id?: InputMaybe<Order_By>;
  vegetable_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vegetable_Stocks_Min_Fields = {
  __typename?: 'vegetable_stocks_min_fields';
  /** 賞味期限日 */
  expiration_date?: Maybe<Scalars['date']['output']>;
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  /** メモ */
  memo?: Maybe<Scalars['String']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
  stock_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーID */
  user_id?: Maybe<Scalars['String']['output']>;
  vegetable_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Min_Order_By = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Order_By>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** メモ */
  memo?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  /** ユーザーID */
  user_id?: InputMaybe<Order_By>;
  vegetable_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vegetable_stocks" */
export type Vegetable_Stocks_Mutation_Response = {
  __typename?: 'vegetable_stocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Vegetable_Stocks>;
};

/** input type for inserting object relation for remote table "vegetable_stocks" */
export type Vegetable_Stocks_Obj_Rel_Insert_Input = {
  data: Vegetable_Stocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vegetable_Stocks_On_Conflict>;
};

/** on_conflict condition type for table "vegetable_stocks" */
export type Vegetable_Stocks_On_Conflict = {
  constraint: Vegetable_Stocks_Constraint;
  update_columns?: Array<Vegetable_Stocks_Update_Column>;
  where?: InputMaybe<Vegetable_Stocks_Bool_Exp>;
};

/** Ordering options when selecting data from "vegetable_stocks". */
export type Vegetable_Stocks_Order_By = {
  expiration_date?: InputMaybe<Order_By>;
  incremental_unit?: InputMaybe<Order_By>;
  is_favorite?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  stock_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vegetable_id?: InputMaybe<Order_By>;
  vegetable_stocks_custom_vegetable_master?: InputMaybe<Custom_Vegetable_Master_Order_By>;
  vegetable_stocks_users?: InputMaybe<Users_Order_By>;
  vegetable_stocks_vegetable_master?: InputMaybe<Vegetable_Master_Order_By>;
};

/** primary key columns input for table: vegetable_stocks */
export type Vegetable_Stocks_Pk_Columns_Input = {
  stock_id: Scalars['uuid']['input'];
};

/** select columns of table "vegetable_stocks" */
export enum Vegetable_Stocks_Select_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VegetableId = 'vegetable_id'
}

/** select "vegetable_stocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vegetable_stocks" */
export enum Vegetable_Stocks_Select_Column_Vegetable_Stocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** select "vegetable_stocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vegetable_stocks" */
export enum Vegetable_Stocks_Select_Column_Vegetable_Stocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFavorite = 'is_favorite'
}

/** input type for updating data in table "vegetable_stocks" */
export type Vegetable_Stocks_Set_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Vegetable_Stocks_Stddev_Fields = {
  __typename?: 'vegetable_stocks_stddev_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Stddev_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vegetable_Stocks_Stddev_Pop_Fields = {
  __typename?: 'vegetable_stocks_stddev_pop_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Stddev_Pop_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vegetable_Stocks_Stddev_Samp_Fields = {
  __typename?: 'vegetable_stocks_stddev_samp_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Stddev_Samp_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vegetable_stocks" */
export type Vegetable_Stocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vegetable_Stocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vegetable_Stocks_Stream_Cursor_Value_Input = {
  /** 賞味期限日 */
  expiration_date?: InputMaybe<Scalars['date']['input']>;
  /** 増減単位 */
  incremental_unit?: InputMaybe<Scalars['numeric']['input']>;
  /** お気に入りフラグ */
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** メモ */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** 在庫数 */
  quantity?: InputMaybe<Scalars['numeric']['input']>;
  stock_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars['String']['input']>;
  vegetable_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Vegetable_Stocks_Sum_Fields = {
  __typename?: 'vegetable_stocks_sum_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['numeric']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Sum_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "vegetable_stocks" */
export enum Vegetable_Stocks_Update_Column {
  /** column name */
  ExpirationDate = 'expiration_date',
  /** column name */
  IncrementalUnit = 'incremental_unit',
  /** column name */
  IsFavorite = 'is_favorite',
  /** column name */
  Memo = 'memo',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StockId = 'stock_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VegetableId = 'vegetable_id'
}

export type Vegetable_Stocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vegetable_Stocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vegetable_Stocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vegetable_Stocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vegetable_Stocks_Var_Pop_Fields = {
  __typename?: 'vegetable_stocks_var_pop_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Var_Pop_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vegetable_Stocks_Var_Samp_Fields = {
  __typename?: 'vegetable_stocks_var_samp_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Var_Samp_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vegetable_Stocks_Variance_Fields = {
  __typename?: 'vegetable_stocks_variance_fields';
  /** 増減単位 */
  incremental_unit?: Maybe<Scalars['Float']['output']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vegetable_stocks" */
export type Vegetable_Stocks_Variance_Order_By = {
  /** 増減単位 */
  incremental_unit?: InputMaybe<Order_By>;
  /** 在庫数 */
  quantity?: InputMaybe<Order_By>;
};

export type GetAllFridgeMasterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFridgeMasterQuery = { __typename?: 'query_root', custom_dessert_master: Array<{ __typename?: 'custom_dessert_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_fish_master: Array<{ __typename?: 'custom_fish_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_meat_master: Array<{ __typename?: 'custom_meat_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string }>, custom_other_master: Array<{ __typename?: 'custom_other_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'other_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_protein_source_master: Array<{ __typename?: 'custom_protein_source_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_seasoning_master: Array<{ __typename?: 'custom_seasoning_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_spice_master: Array<{ __typename?: 'custom_spice_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_staple_food_master: Array<{ __typename?: 'custom_staple_food_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, custom_vegetable_master: Array<{ __typename?: 'custom_vegetable_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, dessert_master: Array<{ __typename?: 'dessert_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, fish_master: Array<{ __typename?: 'fish_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, meat_master: Array<{ __typename?: 'meat_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'meat_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, other_master: Array<{ __typename?: 'other_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'other_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, protein_source_master: Array<{ __typename?: 'protein_source_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, seasoning_master: Array<{ __typename?: 'seasoning_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, spice_master: Array<{ __typename?: 'spice_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, staple_food_master: Array<{ __typename?: 'staple_food_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }>, vegetable_master: Array<{ __typename?: 'vegetable_master', display_name: string, image_uri: string, default_expiration_period: number, id: string, name: string, stack?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, expiration_date: string, incremental_unit: number, is_favorite: boolean, memo: string } | null, unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null }> };

export type GetAllDessertMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDessertMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetDessertMasterAndUnitAndStocks: Array<{ __typename?: 'dessert_master', dessert_id: string, display_name: string, dessert_name: string, image_uri: string, default_expiration_period: number, dessert_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, dessert_master_dessert_stocks?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomDessertMasterAndUnitAndStocks: Array<{ __typename?: 'custom_dessert_master', display_name: string, image_uri: string, default_expiration_period: number, dessert_id: string, dessert_name: string, dessert_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, dessert_master_dessert_stocks?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetDessertMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDessertMasterAndUnitAndStocksQuery = { __typename?: 'query_root', dessert_master: Array<{ __typename?: 'dessert_master', dessert_id: string, display_name: string, dessert_name: string, image_uri: string, default_expiration_period: number, dessert_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, dessert_master_dessert_stocks?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomDessertMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomDessertMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_dessert_master: Array<{ __typename?: 'custom_dessert_master', display_name: string, image_uri: string, default_expiration_period: number, dessert_id: string, dessert_name: string, dessert_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, dessert_master_dessert_stocks?: { __typename?: 'dessert_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetDessertStockByUserIdAndDessertIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  dessertId: Scalars['uuid']['input'];
}>;


export type GetDessertStockByUserIdAndDessertIdQuery = { __typename?: 'query_root', dessert_stocks: Array<{ __typename?: 'dessert_stocks', stock_id: string, user_id: string, dessert_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertDessertStockMutationVariables = Exact<{
  object: Dessert_Stocks_Insert_Input;
}>;


export type InsertDessertStockMutation = { __typename?: 'mutation_root', insert_dessert_stocks_one?: { __typename?: 'dessert_stocks', quantity: number, stock_id: string, user_id: string, dessert_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateDessertStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  dessertId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateDessertStockQuantityMutation = { __typename?: 'mutation_root', update_dessert_stocks?: { __typename?: 'dessert_stocks_mutation_response', returning: Array<{ __typename?: 'dessert_stocks', stock_id: string, user_id: string, dessert_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateDessertStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  dessertId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateDessertStockIsFavoriteMutation = { __typename?: 'mutation_root', update_dessert_stocks?: { __typename?: 'dessert_stocks_mutation_response', returning: Array<{ __typename?: 'dessert_stocks', stock_id: string, user_id: string, dessert_id: string, is_favorite: boolean }> } | null };

export type UpdateDessertStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  dessertId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateDessertStockDetailMutation = { __typename?: 'mutation_root', update_dessert_stocks?: { __typename?: 'dessert_stocks_mutation_response', returning: Array<{ __typename?: 'dessert_stocks', stock_id: string, user_id: string, dessert_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomDessertMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  dessertName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomDessertMasterMutation = { __typename?: 'mutation_root', insert_custom_dessert_master_one?: { __typename?: 'custom_dessert_master', custom_dessert_id: string, user_id: string, custom_dessert_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomDessertAndStocksMutationVariables = Exact<{
  dessertId: Scalars['uuid']['input'];
}>;


export type DeleteCustomDessertAndStocksMutation = { __typename?: 'mutation_root', delete_custom_dessert_master?: { __typename?: 'custom_dessert_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_dessert_master', custom_dessert_id: string, image_uri: string, custom_dessert_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_dessert_stocks?: { __typename?: 'dessert_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'dessert_stocks', stock_id: string, dessert_id: string }> } | null };

export type GetAllFishMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFishMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetFishMasterAndUnitAndStocks: Array<{ __typename?: 'fish_master', fish_id: string, display_name: string, fish_name: string, image_uri: string, default_expiration_period: number, fish_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, fish_master_fish_stocks?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomFishMasterAndUnitAndStocks: Array<{ __typename?: 'custom_fish_master', display_name: string, image_uri: string, default_expiration_period: number, fish_id: string, fish_name: string, fish_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, fish_master_fish_stocks?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetFishMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFishMasterAndUnitAndStocksQuery = { __typename?: 'query_root', fish_master: Array<{ __typename?: 'fish_master', fish_id: string, display_name: string, fish_name: string, image_uri: string, default_expiration_period: number, fish_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, fish_master_fish_stocks?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomFishMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomFishMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_fish_master: Array<{ __typename?: 'custom_fish_master', display_name: string, image_uri: string, default_expiration_period: number, fish_id: string, fish_name: string, fish_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, fish_master_fish_stocks?: { __typename?: 'fish_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetFishStockByUserIdAndFishIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  fishId: Scalars['uuid']['input'];
}>;


export type GetFishStockByUserIdAndFishIdQuery = { __typename?: 'query_root', fish_stocks: Array<{ __typename?: 'fish_stocks', stock_id: string, user_id: string, fish_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertFishStockMutationVariables = Exact<{
  object: Fish_Stocks_Insert_Input;
}>;


export type InsertFishStockMutation = { __typename?: 'mutation_root', insert_fish_stocks_one?: { __typename?: 'fish_stocks', quantity: number, stock_id: string, user_id: string, fish_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateFishStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  fishId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateFishStockQuantityMutation = { __typename?: 'mutation_root', update_fish_stocks?: { __typename?: 'fish_stocks_mutation_response', returning: Array<{ __typename?: 'fish_stocks', stock_id: string, user_id: string, fish_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateFishStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  fishId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateFishStockIsFavoriteMutation = { __typename?: 'mutation_root', update_fish_stocks?: { __typename?: 'fish_stocks_mutation_response', returning: Array<{ __typename?: 'fish_stocks', stock_id: string, user_id: string, fish_id: string, is_favorite: boolean }> } | null };

export type UpdateFishStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  fishId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateFishStockDetailMutation = { __typename?: 'mutation_root', update_fish_stocks?: { __typename?: 'fish_stocks_mutation_response', returning: Array<{ __typename?: 'fish_stocks', stock_id: string, user_id: string, fish_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomFishMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  fishName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomFishMasterMutation = { __typename?: 'mutation_root', insert_custom_fish_master_one?: { __typename?: 'custom_fish_master', custom_fish_id: string, user_id: string, custom_fish_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomFishAndStocksMutationVariables = Exact<{
  fishId: Scalars['uuid']['input'];
}>;


export type DeleteCustomFishAndStocksMutation = { __typename?: 'mutation_root', delete_custom_fish_master?: { __typename?: 'custom_fish_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_fish_master', custom_fish_id: string, image_uri: string, custom_fish_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_fish_stocks?: { __typename?: 'fish_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'fish_stocks', stock_id: string, fish_id: string }> } | null };

export type GetAllMeatMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMeatMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetMeatMasterAndUnitAndStocks: Array<{ __typename?: 'meat_master', meat_id: string, display_name: string, meat_name: string, image_uri: string, default_expiration_period: number, meat_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, meat_master_meat_stocks?: { __typename?: 'meat_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomMeatMasterAndUnitAndStocks: Array<{ __typename?: 'custom_meat_master', display_name: string, image_uri: string, default_expiration_period: number, meat_id: string, meat_name: string, meat_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, meat_master_meat_stocks?: { __typename?: 'meat_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetMeatMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeatMasterAndUnitAndStocksQuery = { __typename?: 'query_root', meat_master: Array<{ __typename?: 'meat_master', meat_id: string, display_name: string, meat_name: string, image_uri: string, default_expiration_period: number, meat_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, meat_master_meat_stocks?: { __typename?: 'meat_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomMeatMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomMeatMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_meat_master: Array<{ __typename?: 'custom_meat_master', display_name: string, image_uri: string, default_expiration_period: number, meat_id: string, meat_name: string, meat_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, meat_master_meat_stocks?: { __typename?: 'meat_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetMeatStockByUserIdAndMeatIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  meatId: Scalars['uuid']['input'];
}>;


export type GetMeatStockByUserIdAndMeatIdQuery = { __typename?: 'query_root', meat_stocks: Array<{ __typename?: 'meat_stocks', stock_id: string, user_id: string, meat_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertMeatStockMutationVariables = Exact<{
  object: Meat_Stocks_Insert_Input;
}>;


export type InsertMeatStockMutation = { __typename?: 'mutation_root', insert_meat_stocks_one?: { __typename?: 'meat_stocks', quantity: number, stock_id: string, user_id: string, meat_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateMeatStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  meatId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateMeatStockQuantityMutation = { __typename?: 'mutation_root', update_meat_stocks?: { __typename?: 'meat_stocks_mutation_response', returning: Array<{ __typename?: 'meat_stocks', stock_id: string, user_id: string, meat_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateMeatStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  meatId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateMeatStockIsFavoriteMutation = { __typename?: 'mutation_root', update_meat_stocks?: { __typename?: 'meat_stocks_mutation_response', returning: Array<{ __typename?: 'meat_stocks', stock_id: string, user_id: string, meat_id: string, is_favorite: boolean }> } | null };

export type UpdateMeatStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  meatId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateMeatStockDetailMutation = { __typename?: 'mutation_root', update_meat_stocks?: { __typename?: 'meat_stocks_mutation_response', returning: Array<{ __typename?: 'meat_stocks', stock_id: string, user_id: string, meat_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomMeatMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  meatName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomMeatMasterMutation = { __typename?: 'mutation_root', insert_custom_meat_master_one?: { __typename?: 'custom_meat_master', custom_meat_id: string, user_id: string, custom_meat_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomMeatAndStocksMutationVariables = Exact<{
  meatId: Scalars['uuid']['input'];
}>;


export type DeleteCustomMeatAndStocksMutation = { __typename?: 'mutation_root', delete_custom_meat_master?: { __typename?: 'custom_meat_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_meat_master', custom_meat_id: string, image_uri: string, custom_meat_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_meat_stocks?: { __typename?: 'meat_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'meat_stocks', stock_id: string, meat_id: string }> } | null };

export type GetAllOtherMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOtherMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetOtherMasterAndUnitAndStocks: Array<{ __typename?: 'other_master', other_id: string, display_name: string, other_name: string, image_uri: string, default_expiration_period: number, other_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, other_master_other_stocks?: { __typename?: 'other_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomOtherMasterAndUnitAndStocks: Array<{ __typename?: 'custom_other_master', display_name: string, image_uri: string, default_expiration_period: number, other_id: string, other_name: string, other_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, other_master_other_stocks?: { __typename?: 'other_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetOtherMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOtherMasterAndUnitAndStocksQuery = { __typename?: 'query_root', other_master: Array<{ __typename?: 'other_master', other_id: string, display_name: string, other_name: string, image_uri: string, default_expiration_period: number, other_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, other_master_other_stocks?: { __typename?: 'other_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomOtherMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomOtherMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_other_master: Array<{ __typename?: 'custom_other_master', display_name: string, image_uri: string, default_expiration_period: number, other_id: string, other_name: string, other_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, other_master_other_stocks?: { __typename?: 'other_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetOtherStockByUserIdAndOtherIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  otherId: Scalars['uuid']['input'];
}>;


export type GetOtherStockByUserIdAndOtherIdQuery = { __typename?: 'query_root', other_stocks: Array<{ __typename?: 'other_stocks', stock_id: string, user_id: string, other_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertOtherStockMutationVariables = Exact<{
  object: Other_Stocks_Insert_Input;
}>;


export type InsertOtherStockMutation = { __typename?: 'mutation_root', insert_other_stocks_one?: { __typename?: 'other_stocks', quantity: number, stock_id: string, user_id: string, other_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateOtherStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  otherId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateOtherStockQuantityMutation = { __typename?: 'mutation_root', update_other_stocks?: { __typename?: 'other_stocks_mutation_response', returning: Array<{ __typename?: 'other_stocks', stock_id: string, user_id: string, other_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateOtherStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  otherId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateOtherStockIsFavoriteMutation = { __typename?: 'mutation_root', update_other_stocks?: { __typename?: 'other_stocks_mutation_response', returning: Array<{ __typename?: 'other_stocks', stock_id: string, user_id: string, other_id: string, is_favorite: boolean }> } | null };

export type UpdateOtherStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  otherId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateOtherStockDetailMutation = { __typename?: 'mutation_root', update_other_stocks?: { __typename?: 'other_stocks_mutation_response', returning: Array<{ __typename?: 'other_stocks', stock_id: string, user_id: string, other_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomOtherMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  otherName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomOtherMasterMutation = { __typename?: 'mutation_root', insert_custom_other_master_one?: { __typename?: 'custom_other_master', custom_other_id: string, user_id: string, custom_other_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomOtherAndStocksMutationVariables = Exact<{
  otherId: Scalars['uuid']['input'];
}>;


export type DeleteCustomOtherAndStocksMutation = { __typename?: 'mutation_root', delete_custom_other_master?: { __typename?: 'custom_other_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_other_master', custom_other_id: string, image_uri: string, custom_other_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_other_stocks?: { __typename?: 'other_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'other_stocks', stock_id: string, other_id: string }> } | null };

export type GetAllProteinSourceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProteinSourceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetProteinSourceMasterAndUnitAndStocks: Array<{ __typename?: 'protein_source_master', protein_source_id: string, display_name: string, protein_source_name: string, image_uri: string, default_expiration_period: number, protein_source_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, protein_source_master_protein_source_stocks?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomProteinSourceMasterAndUnitAndStocks: Array<{ __typename?: 'custom_protein_source_master', display_name: string, image_uri: string, default_expiration_period: number, protein_source_id: string, protein_source_name: string, protein_source_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, protein_source_master_protein_source_stocks?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetProteinSourceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProteinSourceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', protein_source_master: Array<{ __typename?: 'protein_source_master', protein_source_id: string, display_name: string, protein_source_name: string, image_uri: string, default_expiration_period: number, protein_source_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, protein_source_master_protein_source_stocks?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomProteinSourceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomProteinSourceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_protein_source_master: Array<{ __typename?: 'custom_protein_source_master', display_name: string, image_uri: string, default_expiration_period: number, protein_source_id: string, protein_source_name: string, protein_source_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, protein_source_master_protein_source_stocks?: { __typename?: 'protein_source_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetProteinSourceStockByUserIdAndProteinSourceIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  proteinSourceId: Scalars['uuid']['input'];
}>;


export type GetProteinSourceStockByUserIdAndProteinSourceIdQuery = { __typename?: 'query_root', protein_source_stocks: Array<{ __typename?: 'protein_source_stocks', stock_id: string, user_id: string, protein_source_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertProteinSourceStockMutationVariables = Exact<{
  object: Protein_Source_Stocks_Insert_Input;
}>;


export type InsertProteinSourceStockMutation = { __typename?: 'mutation_root', insert_protein_source_stocks_one?: { __typename?: 'protein_source_stocks', quantity: number, stock_id: string, user_id: string, protein_source_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateProteinSourceStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  proteinSourceId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateProteinSourceStockQuantityMutation = { __typename?: 'mutation_root', update_protein_source_stocks?: { __typename?: 'protein_source_stocks_mutation_response', returning: Array<{ __typename?: 'protein_source_stocks', stock_id: string, user_id: string, protein_source_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateProteinSourceStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  proteinSourceId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateProteinSourceStockIsFavoriteMutation = { __typename?: 'mutation_root', update_protein_source_stocks?: { __typename?: 'protein_source_stocks_mutation_response', returning: Array<{ __typename?: 'protein_source_stocks', stock_id: string, user_id: string, protein_source_id: string, is_favorite: boolean }> } | null };

export type UpdateProteinSourceStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  proteinSourceId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateProteinSourceStockDetailMutation = { __typename?: 'mutation_root', update_protein_source_stocks?: { __typename?: 'protein_source_stocks_mutation_response', returning: Array<{ __typename?: 'protein_source_stocks', stock_id: string, user_id: string, protein_source_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomProteinSourceMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  proteinSourceName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomProteinSourceMasterMutation = { __typename?: 'mutation_root', insert_custom_protein_source_master_one?: { __typename?: 'custom_protein_source_master', custom_protein_source_id: string, user_id: string, custom_protein_source_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomProteinSourceAndStocksMutationVariables = Exact<{
  proteinSourceId: Scalars['uuid']['input'];
}>;


export type DeleteCustomProteinSourceAndStocksMutation = { __typename?: 'mutation_root', delete_custom_protein_source_master?: { __typename?: 'custom_protein_source_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_protein_source_master', custom_protein_source_id: string, image_uri: string, custom_protein_source_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_protein_source_stocks?: { __typename?: 'protein_source_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'protein_source_stocks', stock_id: string, protein_source_id: string }> } | null };

export type GetAllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecipesQuery = { __typename?: 'query_root', recipes: Array<{ __typename?: 'recipes', recipe_id: string, user_id: string, recipe_name: string, recipe_image: string, recipes_recipe_materials: Array<{ __typename?: 'recipe_materials', master_id: string, quantity: number, recipe_id: string, recipe_material_id: string }>, recipes_recipe_steps: Array<{ __typename?: 'recipe_steps', recipe_id: string, recipe_step_id: string, description: string }> }> };

export type CreateRecipeMutationVariables = Exact<{
  recipeName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  recipeImage: Scalars['String']['input'];
}>;


export type CreateRecipeMutation = { __typename?: 'mutation_root', insert_recipes_one?: { __typename?: 'recipes', recipe_id: string, user_id: string, recipe_name: string, recipe_image: string } | null };

export type CreateRecipeMaterialsMutationVariables = Exact<{
  materials: Array<Recipe_Materials_Insert_Input> | Recipe_Materials_Insert_Input;
}>;


export type CreateRecipeMaterialsMutation = { __typename?: 'mutation_root', insert_recipe_materials?: { __typename?: 'recipe_materials_mutation_response', returning: Array<{ __typename?: 'recipe_materials', master_id: string, quantity: number, recipe_id: string, recipe_material_id: string }> } | null };

export type CreateRecipeStepsMutationVariables = Exact<{
  steps: Array<Recipe_Steps_Insert_Input> | Recipe_Steps_Insert_Input;
}>;


export type CreateRecipeStepsMutation = { __typename?: 'mutation_root', insert_recipe_steps?: { __typename?: 'recipe_steps_mutation_response', returning: Array<{ __typename?: 'recipe_steps', recipe_id: string, recipe_step_id: string, description: string }> } | null };

export type GetAllSeasoningMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSeasoningMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetSeasoningMasterAndUnitAndStocks: Array<{ __typename?: 'seasoning_master', seasoning_id: string, display_name: string, seasoning_name: string, image_uri: string, default_expiration_period: number, seasoning_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, seasoning_master_seasoning_stocks?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomSeasoningMasterAndUnitAndStocks: Array<{ __typename?: 'custom_seasoning_master', display_name: string, image_uri: string, default_expiration_period: number, seasoning_id: string, seasoning_name: string, seasoning_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, seasoning_master_seasoning_stocks?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetSeasoningMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeasoningMasterAndUnitAndStocksQuery = { __typename?: 'query_root', seasoning_master: Array<{ __typename?: 'seasoning_master', seasoning_id: string, display_name: string, seasoning_name: string, image_uri: string, default_expiration_period: number, seasoning_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, seasoning_master_seasoning_stocks?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomSeasoningMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomSeasoningMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_seasoning_master: Array<{ __typename?: 'custom_seasoning_master', display_name: string, image_uri: string, default_expiration_period: number, seasoning_id: string, seasoning_name: string, seasoning_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, seasoning_master_seasoning_stocks?: { __typename?: 'seasoning_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetSeasoningStockByUserIdAndSeasoningIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  seasoningId: Scalars['uuid']['input'];
}>;


export type GetSeasoningStockByUserIdAndSeasoningIdQuery = { __typename?: 'query_root', seasoning_stocks: Array<{ __typename?: 'seasoning_stocks', stock_id: string, user_id: string, seasoning_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertSeasoningStockMutationVariables = Exact<{
  object: Seasoning_Stocks_Insert_Input;
}>;


export type InsertSeasoningStockMutation = { __typename?: 'mutation_root', insert_seasoning_stocks_one?: { __typename?: 'seasoning_stocks', quantity: number, stock_id: string, user_id: string, seasoning_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateSeasoningStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  seasoningId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateSeasoningStockQuantityMutation = { __typename?: 'mutation_root', update_seasoning_stocks?: { __typename?: 'seasoning_stocks_mutation_response', returning: Array<{ __typename?: 'seasoning_stocks', stock_id: string, user_id: string, seasoning_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateSeasoningStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  seasoningId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateSeasoningStockIsFavoriteMutation = { __typename?: 'mutation_root', update_seasoning_stocks?: { __typename?: 'seasoning_stocks_mutation_response', returning: Array<{ __typename?: 'seasoning_stocks', stock_id: string, user_id: string, seasoning_id: string, is_favorite: boolean }> } | null };

export type UpdateSeasoningStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  seasoningId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateSeasoningStockDetailMutation = { __typename?: 'mutation_root', update_seasoning_stocks?: { __typename?: 'seasoning_stocks_mutation_response', returning: Array<{ __typename?: 'seasoning_stocks', stock_id: string, user_id: string, seasoning_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomSeasoningMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  seasoningName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomSeasoningMasterMutation = { __typename?: 'mutation_root', insert_custom_seasoning_master_one?: { __typename?: 'custom_seasoning_master', custom_seasoning_id: string, user_id: string, custom_seasoning_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomSeasoningAndStocksMutationVariables = Exact<{
  seasoningId: Scalars['uuid']['input'];
}>;


export type DeleteCustomSeasoningAndStocksMutation = { __typename?: 'mutation_root', delete_custom_seasoning_master?: { __typename?: 'custom_seasoning_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_seasoning_master', custom_seasoning_id: string, image_uri: string, custom_seasoning_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_seasoning_stocks?: { __typename?: 'seasoning_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'seasoning_stocks', stock_id: string, seasoning_id: string }> } | null };

export type GetShoppingMemosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShoppingMemosQuery = { __typename?: 'query_root', shopping_memo: Array<{ __typename?: 'shopping_memo', shopping_memo_id: string, user_id: string, master_id: string, quantity: number, is_checked: boolean }> };

export type InsertShoppingMemoMutationVariables = Exact<{
  masterId: Scalars['uuid']['input'];
  userId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type InsertShoppingMemoMutation = { __typename?: 'mutation_root', insert_shopping_memo_one?: { __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean } | null };

export type UpdateShoppingMemoMutationVariables = Exact<{
  shoppingMemoId: Scalars['uuid']['input'];
  masterId: Scalars['uuid']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type UpdateShoppingMemoMutation = { __typename?: 'mutation_root', update_shopping_memo_by_pk?: { __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean } | null };

export type UpdateShoppingMemoIsCheckedMutationVariables = Exact<{
  shoppingMemoId: Scalars['uuid']['input'];
  isChecked: Scalars['Boolean']['input'];
}>;


export type UpdateShoppingMemoIsCheckedMutation = { __typename?: 'mutation_root', update_shopping_memo_by_pk?: { __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean } | null };

export type DeleteShoppingMemoMutationVariables = Exact<{
  shoppingMemoId: Scalars['uuid']['input'];
}>;


export type DeleteShoppingMemoMutation = { __typename?: 'mutation_root', delete_shopping_memo_by_pk?: { __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean } | null };

export type DeleteShoppingMemoByMasterIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  masterId: Scalars['uuid']['input'];
}>;


export type DeleteShoppingMemoByMasterIdMutation = { __typename?: 'mutation_root', delete_shopping_memo?: { __typename?: 'shopping_memo_mutation_response', returning: Array<{ __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean }> } | null };

export type BulkDeleteShoppingMemoMutationVariables = Exact<{
  shoppingMemoIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
}>;


export type BulkDeleteShoppingMemoMutation = { __typename?: 'mutation_root', delete_shopping_memo?: { __typename?: 'shopping_memo_mutation_response', returning: Array<{ __typename?: 'shopping_memo', shopping_memo_id: string, master_id: string, user_id: string, quantity: number, is_checked: boolean }> } | null };

export type GetAllSpiceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpiceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetSpiceMasterAndUnitAndStocks: Array<{ __typename?: 'spice_master', spice_id: string, display_name: string, spice_name: string, image_uri: string, default_expiration_period: number, spice_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, spice_master_spice_stocks?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomSpiceMasterAndUnitAndStocks: Array<{ __typename?: 'custom_spice_master', display_name: string, image_uri: string, default_expiration_period: number, spice_id: string, spice_name: string, spice_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, spice_master_spice_stocks?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetSpiceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpiceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', spice_master: Array<{ __typename?: 'spice_master', spice_id: string, display_name: string, spice_name: string, image_uri: string, default_expiration_period: number, spice_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, spice_master_spice_stocks?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomSpiceMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomSpiceMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_spice_master: Array<{ __typename?: 'custom_spice_master', display_name: string, image_uri: string, default_expiration_period: number, spice_id: string, spice_name: string, spice_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, spice_master_spice_stocks?: { __typename?: 'spice_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetSpiceStockByUserIdAndSpiceIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  spiceId: Scalars['uuid']['input'];
}>;


export type GetSpiceStockByUserIdAndSpiceIdQuery = { __typename?: 'query_root', spice_stocks: Array<{ __typename?: 'spice_stocks', stock_id: string, user_id: string, spice_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertSpiceStockMutationVariables = Exact<{
  object: Spice_Stocks_Insert_Input;
}>;


export type InsertSpiceStockMutation = { __typename?: 'mutation_root', insert_spice_stocks_one?: { __typename?: 'spice_stocks', quantity: number, stock_id: string, user_id: string, spice_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateSpiceStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  spiceId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateSpiceStockQuantityMutation = { __typename?: 'mutation_root', update_spice_stocks?: { __typename?: 'spice_stocks_mutation_response', returning: Array<{ __typename?: 'spice_stocks', stock_id: string, user_id: string, spice_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateSpiceStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  spiceId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateSpiceStockIsFavoriteMutation = { __typename?: 'mutation_root', update_spice_stocks?: { __typename?: 'spice_stocks_mutation_response', returning: Array<{ __typename?: 'spice_stocks', stock_id: string, user_id: string, spice_id: string, is_favorite: boolean }> } | null };

export type UpdateSpiceStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  spiceId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateSpiceStockDetailMutation = { __typename?: 'mutation_root', update_spice_stocks?: { __typename?: 'spice_stocks_mutation_response', returning: Array<{ __typename?: 'spice_stocks', stock_id: string, user_id: string, spice_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomSpiceMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  spiceName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomSpiceMasterMutation = { __typename?: 'mutation_root', insert_custom_spice_master_one?: { __typename?: 'custom_spice_master', custom_spice_id: string, user_id: string, custom_spice_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomSpiceAndStocksMutationVariables = Exact<{
  spiceId: Scalars['uuid']['input'];
}>;


export type DeleteCustomSpiceAndStocksMutation = { __typename?: 'mutation_root', delete_custom_spice_master?: { __typename?: 'custom_spice_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_spice_master', custom_spice_id: string, image_uri: string, custom_spice_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_spice_stocks?: { __typename?: 'spice_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'spice_stocks', stock_id: string, spice_id: string }> } | null };

export type GetAllStapleFoodMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStapleFoodMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetStapleFoodMasterAndUnitAndStocks: Array<{ __typename?: 'staple_food_master', staple_food_id: string, display_name: string, staple_food_name: string, image_uri: string, default_expiration_period: number, staple_food_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, staple_food_master_staple_food_stocks?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomStapleFoodMasterAndUnitAndStocks: Array<{ __typename?: 'custom_staple_food_master', display_name: string, image_uri: string, default_expiration_period: number, staple_food_id: string, staple_food_name: string, staple_food_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, staple_food_master_staple_food_stocks?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetStapleFoodMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStapleFoodMasterAndUnitAndStocksQuery = { __typename?: 'query_root', staple_food_master: Array<{ __typename?: 'staple_food_master', staple_food_id: string, display_name: string, staple_food_name: string, image_uri: string, default_expiration_period: number, staple_food_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, staple_food_master_staple_food_stocks?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomStapleFoodMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomStapleFoodMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_staple_food_master: Array<{ __typename?: 'custom_staple_food_master', display_name: string, image_uri: string, default_expiration_period: number, staple_food_id: string, staple_food_name: string, staple_food_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, staple_food_master_staple_food_stocks?: { __typename?: 'staple_food_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetStapleFoodStockByUserIdAndStapleFoodIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  stapleFoodId: Scalars['uuid']['input'];
}>;


export type GetStapleFoodStockByUserIdAndStapleFoodIdQuery = { __typename?: 'query_root', staple_food_stocks: Array<{ __typename?: 'staple_food_stocks', stock_id: string, user_id: string, staple_food_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertStapleFoodStockMutationVariables = Exact<{
  object: Staple_Food_Stocks_Insert_Input;
}>;


export type InsertStapleFoodStockMutation = { __typename?: 'mutation_root', insert_staple_food_stocks_one?: { __typename?: 'staple_food_stocks', quantity: number, stock_id: string, user_id: string, staple_food_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateStapleFoodStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  stapleFoodId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateStapleFoodStockQuantityMutation = { __typename?: 'mutation_root', update_staple_food_stocks?: { __typename?: 'staple_food_stocks_mutation_response', returning: Array<{ __typename?: 'staple_food_stocks', stock_id: string, user_id: string, staple_food_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateStapleFoodStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  stapleFoodId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateStapleFoodStockIsFavoriteMutation = { __typename?: 'mutation_root', update_staple_food_stocks?: { __typename?: 'staple_food_stocks_mutation_response', returning: Array<{ __typename?: 'staple_food_stocks', stock_id: string, user_id: string, staple_food_id: string, is_favorite: boolean }> } | null };

export type UpdateStapleFoodStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  stapleFoodId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateStapleFoodStockDetailMutation = { __typename?: 'mutation_root', update_staple_food_stocks?: { __typename?: 'staple_food_stocks_mutation_response', returning: Array<{ __typename?: 'staple_food_stocks', stock_id: string, user_id: string, staple_food_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomStapleFoodMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  stapleFoodName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomStapleFoodMasterMutation = { __typename?: 'mutation_root', insert_custom_staple_food_master_one?: { __typename?: 'custom_staple_food_master', custom_staple_food_id: string, user_id: string, custom_staple_food_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomStapleFoodAndStocksMutationVariables = Exact<{
  stapleFoodId: Scalars['uuid']['input'];
}>;


export type DeleteCustomStapleFoodAndStocksMutation = { __typename?: 'mutation_root', delete_custom_staple_food_master?: { __typename?: 'custom_staple_food_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_staple_food_master', custom_staple_food_id: string, image_uri: string, custom_staple_food_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_staple_food_stocks?: { __typename?: 'staple_food_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'staple_food_stocks', stock_id: string, staple_food_id: string }> } | null };

export type GetUnitMasterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnitMasterQuery = { __typename?: 'query_root', unit_master: Array<{ __typename?: 'unit_master', unit_id: number, unit_name: string }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, email: string, created_at: any }> };

export type GetAllVegetableMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVegetableMasterAndUnitAndStocksQuery = { __typename?: 'query_root', GetVegetableMasterAndUnitAndStocks: Array<{ __typename?: 'vegetable_master', vegetable_id: string, display_name: string, vegetable_name: string, image_uri: string, default_expiration_period: number, vegetable_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, vegetable_master_vegetable_stocks?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }>, GetCustomVegetableMasterAndUnitAndStocks: Array<{ __typename?: 'custom_vegetable_master', display_name: string, image_uri: string, default_expiration_period: number, vegetable_id: string, vegetable_name: string, vegetable_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, vegetable_master_vegetable_stocks?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetVegetableMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVegetableMasterAndUnitAndStocksQuery = { __typename?: 'query_root', vegetable_master: Array<{ __typename?: 'vegetable_master', vegetable_id: string, display_name: string, vegetable_name: string, image_uri: string, default_expiration_period: number, vegetable_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, vegetable_master_vegetable_stocks?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetCustomVegetableMasterAndUnitAndStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomVegetableMasterAndUnitAndStocksQuery = { __typename?: 'query_root', custom_vegetable_master: Array<{ __typename?: 'custom_vegetable_master', display_name: string, image_uri: string, default_expiration_period: number, vegetable_id: string, vegetable_name: string, vegetable_master_unit_master?: { __typename?: 'unit_master', unit_id: number, unit_name: string } | null, vegetable_master_vegetable_stocks?: { __typename?: 'vegetable_stocks', stock_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null }> };

export type GetVegetableStockByUserIdAndVegetableIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  vegetableId: Scalars['uuid']['input'];
}>;


export type GetVegetableStockByUserIdAndVegetableIdQuery = { __typename?: 'query_root', vegetable_stocks: Array<{ __typename?: 'vegetable_stocks', stock_id: string, user_id: string, vegetable_id: string, quantity: number, expiration_date: string, memo: string, is_favorite: boolean }> };

export type InsertVegetableStockMutationVariables = Exact<{
  object: Vegetable_Stocks_Insert_Input;
}>;


export type InsertVegetableStockMutation = { __typename?: 'mutation_root', insert_vegetable_stocks_one?: { __typename?: 'vegetable_stocks', quantity: number, stock_id: string, user_id: string, vegetable_id: string, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean } | null };

export type UpdateVegetableStockQuantityMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  vegetableId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  expirationDate?: InputMaybe<Scalars['date']['input']>;
}>;


export type UpdateVegetableStockQuantityMutation = { __typename?: 'mutation_root', update_vegetable_stocks?: { __typename?: 'vegetable_stocks_mutation_response', returning: Array<{ __typename?: 'vegetable_stocks', stock_id: string, user_id: string, vegetable_id: string, quantity: number, expiration_date: string }> } | null };

export type UpdateVegetableStockIsFavoriteMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  vegetableId: Scalars['uuid']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateVegetableStockIsFavoriteMutation = { __typename?: 'mutation_root', update_vegetable_stocks?: { __typename?: 'vegetable_stocks_mutation_response', returning: Array<{ __typename?: 'vegetable_stocks', stock_id: string, user_id: string, vegetable_id: string, is_favorite: boolean }> } | null };

export type UpdateVegetableStockDetailMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  vegetableId: Scalars['uuid']['input'];
  quantity: Scalars['numeric']['input'];
  incrementalUnit: Scalars['numeric']['input'];
  expirationDate: Scalars['date']['input'];
  memo: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
}>;


export type UpdateVegetableStockDetailMutation = { __typename?: 'mutation_root', update_vegetable_stocks?: { __typename?: 'vegetable_stocks_mutation_response', returning: Array<{ __typename?: 'vegetable_stocks', stock_id: string, user_id: string, vegetable_id: string, quantity: number, incremental_unit: number, expiration_date: string, memo: string, is_favorite: boolean }> } | null };

export type InsertCustomVegetableMasterMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  vegetableName: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
  defaultExpirationPeriod: Scalars['Int']['input'];
  unitId: Scalars['Int']['input'];
}>;


export type InsertCustomVegetableMasterMutation = { __typename?: 'mutation_root', insert_custom_vegetable_master_one?: { __typename?: 'custom_vegetable_master', custom_vegetable_id: string, user_id: string, custom_vegetable_name: string, display_name: string, image_uri: string, default_expiration_period: number, unit_id: number } | null };

export type DeleteCustomVegetableAndStocksMutationVariables = Exact<{
  vegetableId: Scalars['uuid']['input'];
}>;


export type DeleteCustomVegetableAndStocksMutation = { __typename?: 'mutation_root', delete_custom_vegetable_master?: { __typename?: 'custom_vegetable_master_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'custom_vegetable_master', custom_vegetable_id: string, image_uri: string, custom_vegetable_name: string, default_expiration_period: number, display_name: string, unit_id: number }> } | null, delete_vegetable_stocks?: { __typename?: 'vegetable_stocks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'vegetable_stocks', stock_id: string, vegetable_id: string }> } | null };


export const GetAllFridgeMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllFridgeMaster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_dessert_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_fish_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_fish_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_meat_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_meat_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_other_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_other_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_other_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_protein_source_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_seasoning_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_spice_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_spice_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_staple_food_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"custom_vegetable_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"custom_vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"custom_vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"custom_vegetable_master_uint_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dessert_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fish_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meat_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"meat_master_meat_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"meat_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"other_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"other_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"other_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spice_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"stack"},"name":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"unit_master"},"name":{"kind":"Name","value":"vegetable_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllFridgeMasterQuery, GetAllFridgeMasterQueryVariables>;
export const GetAllDessertMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDessertMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetDessertMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"dessert_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_master_dessert_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomDessertMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_dessert_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_dessert_master_dessert_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"dessert_id"},"name":{"kind":"Name","value":"custom_dessert_id"}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_name"},"name":{"kind":"Name","value":"custom_dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_master_unit_master"},"name":{"kind":"Name","value":"custom_dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_master_dessert_stocks"},"name":{"kind":"Name","value":"custom_dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllDessertMasterAndUnitAndStocksQuery, GetAllDessertMasterAndUnitAndStocksQueryVariables>;
export const GetDessertMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDessertMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dessert_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_master_dessert_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetDessertMasterAndUnitAndStocksQuery, GetDessertMasterAndUnitAndStocksQueryVariables>;
export const GetCustomDessertMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomDessertMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_dessert_master_dessert_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"dessert_id"},"name":{"kind":"Name","value":"custom_dessert_id"}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_name"},"name":{"kind":"Name","value":"custom_dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_master_unit_master"},"name":{"kind":"Name","value":"custom_dessert_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"dessert_master_dessert_stocks"},"name":{"kind":"Name","value":"custom_dessert_master_dessert_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomDessertMasterAndUnitAndStocksQuery, GetCustomDessertMasterAndUnitAndStocksQueryVariables>;
export const GetDessertStockByUserIdAndDessertIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDessertStockByUserIdAndDessertId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dessert_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetDessertStockByUserIdAndDessertIdQuery, GetDessertStockByUserIdAndDessertIdQueryVariables>;
export const InsertDessertStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertDessertStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"dessert_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_dessert_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertDessertStockMutation, InsertDessertStockMutationVariables>;
export const UpdateDessertStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDessertStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_dessert_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDessertStockQuantityMutation, UpdateDessertStockQuantityMutationVariables>;
export const UpdateDessertStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDessertStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_dessert_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDessertStockIsFavoriteMutation, UpdateDessertStockIsFavoriteMutationVariables>;
export const UpdateDessertStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDessertStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_dessert_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDessertStockDetailMutation, UpdateDessertStockDetailMutationVariables>;
export const InsertCustomDessertMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomDessertMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_dessert_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_dessert_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomDessertMasterMutation, InsertCustomDessertMasterMutationVariables>;
export const DeleteCustomDessertAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomDessertAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_dessert_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_dessert_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_dessert_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dessert_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dessertId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"dessert_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomDessertAndStocksMutation, DeleteCustomDessertAndStocksMutationVariables>;
export const GetAllFishMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllFishMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetFishMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"fish_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fish_master_fish_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomFishMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_fish_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_fish_master_fish_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fish_id"},"name":{"kind":"Name","value":"custom_fish_id"}},{"kind":"Field","alias":{"kind":"Name","value":"fish_name"},"name":{"kind":"Name","value":"custom_fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"fish_master_unit_master"},"name":{"kind":"Name","value":"custom_fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"fish_master_fish_stocks"},"name":{"kind":"Name","value":"custom_fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllFishMasterAndUnitAndStocksQuery, GetAllFishMasterAndUnitAndStocksQueryVariables>;
export const GetFishMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFishMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fish_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fish_master_fish_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetFishMasterAndUnitAndStocksQuery, GetFishMasterAndUnitAndStocksQueryVariables>;
export const GetCustomFishMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomFishMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_fish_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_fish_master_fish_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fish_id"},"name":{"kind":"Name","value":"custom_fish_id"}},{"kind":"Field","alias":{"kind":"Name","value":"fish_name"},"name":{"kind":"Name","value":"custom_fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"fish_master_unit_master"},"name":{"kind":"Name","value":"custom_fish_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"fish_master_fish_stocks"},"name":{"kind":"Name","value":"custom_fish_master_fish_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomFishMasterAndUnitAndStocksQuery, GetCustomFishMasterAndUnitAndStocksQueryVariables>;
export const GetFishStockByUserIdAndFishIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFishStockByUserIdAndFishId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fish_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetFishStockByUserIdAndFishIdQuery, GetFishStockByUserIdAndFishIdQueryVariables>;
export const InsertFishStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertFishStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"fish_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_fish_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertFishStockMutation, InsertFishStockMutationVariables>;
export const UpdateFishStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFishStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_fish_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFishStockQuantityMutation, UpdateFishStockQuantityMutationVariables>;
export const UpdateFishStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFishStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_fish_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFishStockIsFavoriteMutation, UpdateFishStockIsFavoriteMutationVariables>;
export const UpdateFishStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFishStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_fish_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFishStockDetailMutation, UpdateFishStockDetailMutationVariables>;
export const InsertCustomFishMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomFishMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_fish_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_fish_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomFishMasterMutation, InsertCustomFishMasterMutationVariables>;
export const DeleteCustomFishAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomFishAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_fish_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_fish_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_fish_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_fish_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fish_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fishId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"fish_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomFishAndStocksMutation, DeleteCustomFishAndStocksMutationVariables>;
export const GetAllMeatMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMeatMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetMeatMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"meat_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"meat_master_meat_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"meat_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meat_master_meat_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomMeatMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_meat_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_meat_master_meat_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meat_id"},"name":{"kind":"Name","value":"custom_meat_id"}},{"kind":"Field","alias":{"kind":"Name","value":"meat_name"},"name":{"kind":"Name","value":"custom_meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"meat_master_unit_master"},"name":{"kind":"Name","value":"custom_meat_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"meat_master_meat_stocks"},"name":{"kind":"Name","value":"custom_meat_master_meat_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllMeatMasterAndUnitAndStocksQuery, GetAllMeatMasterAndUnitAndStocksQueryVariables>;
export const GetMeatMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMeatMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meat_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"meat_master_meat_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"meat_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meat_master_meat_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetMeatMasterAndUnitAndStocksQuery, GetMeatMasterAndUnitAndStocksQueryVariables>;
export const GetCustomMeatMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomMeatMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_meat_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_meat_master_meat_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meat_id"},"name":{"kind":"Name","value":"custom_meat_id"}},{"kind":"Field","alias":{"kind":"Name","value":"meat_name"},"name":{"kind":"Name","value":"custom_meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"meat_master_unit_master"},"name":{"kind":"Name","value":"custom_meat_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"meat_master_meat_stocks"},"name":{"kind":"Name","value":"custom_meat_master_meat_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomMeatMasterAndUnitAndStocksQuery, GetCustomMeatMasterAndUnitAndStocksQueryVariables>;
export const GetMeatStockByUserIdAndMeatIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMeatStockByUserIdAndMeatId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meat_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetMeatStockByUserIdAndMeatIdQuery, GetMeatStockByUserIdAndMeatIdQueryVariables>;
export const InsertMeatStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertMeatStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"meat_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_meat_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertMeatStockMutation, InsertMeatStockMutationVariables>;
export const UpdateMeatStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeatStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_meat_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMeatStockQuantityMutation, UpdateMeatStockQuantityMutationVariables>;
export const UpdateMeatStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeatStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_meat_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMeatStockIsFavoriteMutation, UpdateMeatStockIsFavoriteMutationVariables>;
export const UpdateMeatStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMeatStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_meat_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMeatStockDetailMutation, UpdateMeatStockDetailMutationVariables>;
export const InsertCustomMeatMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomMeatMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_meat_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_meat_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomMeatMasterMutation, InsertCustomMeatMasterMutationVariables>;
export const DeleteCustomMeatAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomMeatAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_meat_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_meat_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_meat_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_meat_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"meat_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"meat_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomMeatAndStocksMutation, DeleteCustomMeatAndStocksMutationVariables>;
export const GetAllOtherMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOtherMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetOtherMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"other_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"other_master_other_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"other_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomOtherMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_other_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_other_master_other_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"other_id"},"name":{"kind":"Name","value":"custom_other_id"}},{"kind":"Field","alias":{"kind":"Name","value":"other_name"},"name":{"kind":"Name","value":"custom_other_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"other_master_unit_master"},"name":{"kind":"Name","value":"custom_other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"other_master_other_stocks"},"name":{"kind":"Name","value":"custom_other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllOtherMasterAndUnitAndStocksQuery, GetAllOtherMasterAndUnitAndStocksQueryVariables>;
export const GetOtherMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOtherMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"other_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"other_master_other_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"other_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetOtherMasterAndUnitAndStocksQuery, GetOtherMasterAndUnitAndStocksQueryVariables>;
export const GetCustomOtherMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomOtherMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_other_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_other_master_other_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"other_id"},"name":{"kind":"Name","value":"custom_other_id"}},{"kind":"Field","alias":{"kind":"Name","value":"other_name"},"name":{"kind":"Name","value":"custom_other_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"other_master_unit_master"},"name":{"kind":"Name","value":"custom_other_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"other_master_other_stocks"},"name":{"kind":"Name","value":"custom_other_master_other_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomOtherMasterAndUnitAndStocksQuery, GetCustomOtherMasterAndUnitAndStocksQueryVariables>;
export const GetOtherStockByUserIdAndOtherIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOtherStockByUserIdAndOtherId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"other_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetOtherStockByUserIdAndOtherIdQuery, GetOtherStockByUserIdAndOtherIdQueryVariables>;
export const InsertOtherStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertOtherStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"other_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_other_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertOtherStockMutation, InsertOtherStockMutationVariables>;
export const UpdateOtherStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOtherStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_other_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOtherStockQuantityMutation, UpdateOtherStockQuantityMutationVariables>;
export const UpdateOtherStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOtherStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_other_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOtherStockIsFavoriteMutation, UpdateOtherStockIsFavoriteMutationVariables>;
export const UpdateOtherStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOtherStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_other_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOtherStockDetailMutation, UpdateOtherStockDetailMutationVariables>;
export const InsertCustomOtherMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomOtherMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_other_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_other_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_other_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_other_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomOtherMasterMutation, InsertCustomOtherMasterMutationVariables>;
export const DeleteCustomOtherAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomOtherAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_other_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_other_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_other_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_other_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"other_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otherId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"other_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomOtherAndStocksMutation, DeleteCustomOtherAndStocksMutationVariables>;
export const GetAllProteinSourceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProteinSourceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetProteinSourceMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"protein_source_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomProteinSourceMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_protein_source_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_protein_source_master_protein_source_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"protein_source_id"},"name":{"kind":"Name","value":"custom_protein_source_id"}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_name"},"name":{"kind":"Name","value":"custom_protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_master_unit_master"},"name":{"kind":"Name","value":"custom_protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"name":{"kind":"Name","value":"custom_protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllProteinSourceMasterAndUnitAndStocksQuery, GetAllProteinSourceMasterAndUnitAndStocksQueryVariables>;
export const GetProteinSourceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProteinSourceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protein_source_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetProteinSourceMasterAndUnitAndStocksQuery, GetProteinSourceMasterAndUnitAndStocksQueryVariables>;
export const GetCustomProteinSourceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomProteinSourceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_protein_source_master_protein_source_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"protein_source_id"},"name":{"kind":"Name","value":"custom_protein_source_id"}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_name"},"name":{"kind":"Name","value":"custom_protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_master_unit_master"},"name":{"kind":"Name","value":"custom_protein_source_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"protein_source_master_protein_source_stocks"},"name":{"kind":"Name","value":"custom_protein_source_master_protein_source_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomProteinSourceMasterAndUnitAndStocksQuery, GetCustomProteinSourceMasterAndUnitAndStocksQueryVariables>;
export const GetProteinSourceStockByUserIdAndProteinSourceIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProteinSourceStockByUserIdAndProteinSourceId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"protein_source_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetProteinSourceStockByUserIdAndProteinSourceIdQuery, GetProteinSourceStockByUserIdAndProteinSourceIdQueryVariables>;
export const InsertProteinSourceStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertProteinSourceStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"protein_source_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_protein_source_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertProteinSourceStockMutation, InsertProteinSourceStockMutationVariables>;
export const UpdateProteinSourceStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProteinSourceStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_protein_source_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProteinSourceStockQuantityMutation, UpdateProteinSourceStockQuantityMutationVariables>;
export const UpdateProteinSourceStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProteinSourceStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_protein_source_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProteinSourceStockIsFavoriteMutation, UpdateProteinSourceStockIsFavoriteMutationVariables>;
export const UpdateProteinSourceStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProteinSourceStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_protein_source_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProteinSourceStockDetailMutation, UpdateProteinSourceStockDetailMutationVariables>;
export const InsertCustomProteinSourceMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomProteinSourceMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_protein_source_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_protein_source_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomProteinSourceMasterMutation, InsertCustomProteinSourceMasterMutationVariables>;
export const DeleteCustomProteinSourceAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomProteinSourceAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_protein_source_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_protein_source_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_protein_source_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"protein_source_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proteinSourceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"protein_source_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomProteinSourceAndStocksMutation, DeleteCustomProteinSourceAndStocksMutationVariables>;
export const GetAllRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRecipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_name"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_image"}},{"kind":"Field","name":{"kind":"Name","value":"recipes_recipe_materials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_material_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipes_recipe_steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_step_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllRecipesQuery, GetAllRecipesQueryVariables>;
export const CreateRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeImage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_recipes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"recipe_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recipe_image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeImage"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_name"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_image"}}]}}]}}]} as unknown as DocumentNode<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const CreateRecipeMaterialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecipeMaterials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"materials"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"recipe_materials_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_recipe_materials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"materials"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_material_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecipeMaterialsMutation, CreateRecipeMaterialsMutationVariables>;
export const CreateRecipeStepsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecipeSteps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steps"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"recipe_steps_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_recipe_steps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steps"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe_id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe_step_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecipeStepsMutation, CreateRecipeStepsMutationVariables>;
export const GetAllSeasoningMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSeasoningMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetSeasoningMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"seasoning_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomSeasoningMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_seasoning_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_seasoning_master_seasoning_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"seasoning_id"},"name":{"kind":"Name","value":"custom_seasoning_id"}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_name"},"name":{"kind":"Name","value":"custom_seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_master_unit_master"},"name":{"kind":"Name","value":"custom_seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"name":{"kind":"Name","value":"custom_seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllSeasoningMasterAndUnitAndStocksQuery, GetAllSeasoningMasterAndUnitAndStocksQueryVariables>;
export const GetSeasoningMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeasoningMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seasoning_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetSeasoningMasterAndUnitAndStocksQuery, GetSeasoningMasterAndUnitAndStocksQueryVariables>;
export const GetCustomSeasoningMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomSeasoningMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_seasoning_master_seasoning_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"seasoning_id"},"name":{"kind":"Name","value":"custom_seasoning_id"}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_name"},"name":{"kind":"Name","value":"custom_seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_master_unit_master"},"name":{"kind":"Name","value":"custom_seasoning_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"seasoning_master_seasoning_stocks"},"name":{"kind":"Name","value":"custom_seasoning_master_seasoning_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomSeasoningMasterAndUnitAndStocksQuery, GetCustomSeasoningMasterAndUnitAndStocksQueryVariables>;
export const GetSeasoningStockByUserIdAndSeasoningIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeasoningStockByUserIdAndSeasoningId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seasoning_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetSeasoningStockByUserIdAndSeasoningIdQuery, GetSeasoningStockByUserIdAndSeasoningIdQueryVariables>;
export const InsertSeasoningStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertSeasoningStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"seasoning_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_seasoning_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertSeasoningStockMutation, InsertSeasoningStockMutationVariables>;
export const UpdateSeasoningStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSeasoningStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_seasoning_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSeasoningStockQuantityMutation, UpdateSeasoningStockQuantityMutationVariables>;
export const UpdateSeasoningStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSeasoningStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_seasoning_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSeasoningStockIsFavoriteMutation, UpdateSeasoningStockIsFavoriteMutationVariables>;
export const UpdateSeasoningStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSeasoningStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_seasoning_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSeasoningStockDetailMutation, UpdateSeasoningStockDetailMutationVariables>;
export const InsertCustomSeasoningMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomSeasoningMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_seasoning_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_seasoning_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomSeasoningMasterMutation, InsertCustomSeasoningMasterMutationVariables>;
export const DeleteCustomSeasoningAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomSeasoningAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_seasoning_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_seasoning_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_seasoning_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"seasoning_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasoningId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"seasoning_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomSeasoningAndStocksMutation, DeleteCustomSeasoningAndStocksMutationVariables>;
export const GetShoppingMemosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShoppingMemos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]} as unknown as DocumentNode<GetShoppingMemosQuery, GetShoppingMemosQueryVariables>;
export const InsertShoppingMemoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertShoppingMemo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_shopping_memo_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"master_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]} as unknown as DocumentNode<InsertShoppingMemoMutation, InsertShoppingMemoMutationVariables>;
export const UpdateShoppingMemoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateShoppingMemo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shopping_memo_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shopping_memo_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"master_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]} as unknown as DocumentNode<UpdateShoppingMemoMutation, UpdateShoppingMemoMutationVariables>;
export const UpdateShoppingMemoIsCheckedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateShoppingMemoIsChecked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isChecked"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shopping_memo_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shopping_memo_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_checked"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isChecked"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]} as unknown as DocumentNode<UpdateShoppingMemoIsCheckedMutation, UpdateShoppingMemoIsCheckedMutationVariables>;
export const DeleteShoppingMemoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShoppingMemo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_shopping_memo_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shopping_memo_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]} as unknown as DocumentNode<DeleteShoppingMemoMutation, DeleteShoppingMemoMutationVariables>;
export const DeleteShoppingMemoByMasterIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShoppingMemoByMasterId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_shopping_memo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"master_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"masterId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteShoppingMemoByMasterIdMutation, DeleteShoppingMemoByMasterIdMutationVariables>;
export const BulkDeleteShoppingMemoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BulkDeleteShoppingMemo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_shopping_memo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shopping_memo_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shoppingMemoIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopping_memo_id"}},{"kind":"Field","name":{"kind":"Name","value":"master_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"is_checked"}}]}}]}}]}}]} as unknown as DocumentNode<BulkDeleteShoppingMemoMutation, BulkDeleteShoppingMemoMutationVariables>;
export const GetAllSpiceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSpiceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetSpiceMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"spice_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"spice_master_spice_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomSpiceMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_spice_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_spice_master_spice_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"spice_id"},"name":{"kind":"Name","value":"custom_spice_id"}},{"kind":"Field","alias":{"kind":"Name","value":"spice_name"},"name":{"kind":"Name","value":"custom_spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"spice_master_unit_master"},"name":{"kind":"Name","value":"custom_spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"spice_master_spice_stocks"},"name":{"kind":"Name","value":"custom_spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllSpiceMasterAndUnitAndStocksQuery, GetAllSpiceMasterAndUnitAndStocksQueryVariables>;
export const GetSpiceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpiceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spice_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"spice_master_spice_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpiceMasterAndUnitAndStocksQuery, GetSpiceMasterAndUnitAndStocksQueryVariables>;
export const GetCustomSpiceMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomSpiceMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_spice_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_spice_master_spice_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"spice_id"},"name":{"kind":"Name","value":"custom_spice_id"}},{"kind":"Field","alias":{"kind":"Name","value":"spice_name"},"name":{"kind":"Name","value":"custom_spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"spice_master_unit_master"},"name":{"kind":"Name","value":"custom_spice_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"spice_master_spice_stocks"},"name":{"kind":"Name","value":"custom_spice_master_spice_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomSpiceMasterAndUnitAndStocksQuery, GetCustomSpiceMasterAndUnitAndStocksQueryVariables>;
export const GetSpiceStockByUserIdAndSpiceIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpiceStockByUserIdAndSpiceId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spice_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetSpiceStockByUserIdAndSpiceIdQuery, GetSpiceStockByUserIdAndSpiceIdQueryVariables>;
export const InsertSpiceStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertSpiceStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"spice_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_spice_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertSpiceStockMutation, InsertSpiceStockMutationVariables>;
export const UpdateSpiceStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSpiceStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_spice_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSpiceStockQuantityMutation, UpdateSpiceStockQuantityMutationVariables>;
export const UpdateSpiceStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSpiceStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_spice_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSpiceStockIsFavoriteMutation, UpdateSpiceStockIsFavoriteMutationVariables>;
export const UpdateSpiceStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSpiceStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_spice_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSpiceStockDetailMutation, UpdateSpiceStockDetailMutationVariables>;
export const InsertCustomSpiceMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomSpiceMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_spice_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_spice_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomSpiceMasterMutation, InsertCustomSpiceMasterMutationVariables>;
export const DeleteCustomSpiceAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomSpiceAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_spice_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_spice_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_spice_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_spice_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"spice_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spiceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"spice_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomSpiceAndStocksMutation, DeleteCustomSpiceAndStocksMutationVariables>;
export const GetAllStapleFoodMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllStapleFoodMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetStapleFoodMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"staple_food_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomStapleFoodMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_staple_food_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_staple_food_master_staple_food_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"staple_food_id"},"name":{"kind":"Name","value":"custom_staple_food_id"}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_name"},"name":{"kind":"Name","value":"custom_staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_master_unit_master"},"name":{"kind":"Name","value":"custom_staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"name":{"kind":"Name","value":"custom_staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllStapleFoodMasterAndUnitAndStocksQuery, GetAllStapleFoodMasterAndUnitAndStocksQueryVariables>;
export const GetStapleFoodMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStapleFoodMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staple_food_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetStapleFoodMasterAndUnitAndStocksQuery, GetStapleFoodMasterAndUnitAndStocksQueryVariables>;
export const GetCustomStapleFoodMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomStapleFoodMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_staple_food_master_staple_food_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"staple_food_id"},"name":{"kind":"Name","value":"custom_staple_food_id"}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_name"},"name":{"kind":"Name","value":"custom_staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_master_unit_master"},"name":{"kind":"Name","value":"custom_staple_food_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"staple_food_master_staple_food_stocks"},"name":{"kind":"Name","value":"custom_staple_food_master_staple_food_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomStapleFoodMasterAndUnitAndStocksQuery, GetCustomStapleFoodMasterAndUnitAndStocksQueryVariables>;
export const GetStapleFoodStockByUserIdAndStapleFoodIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStapleFoodStockByUserIdAndStapleFoodId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staple_food_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetStapleFoodStockByUserIdAndStapleFoodIdQuery, GetStapleFoodStockByUserIdAndStapleFoodIdQueryVariables>;
export const InsertStapleFoodStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertStapleFoodStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"staple_food_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_staple_food_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertStapleFoodStockMutation, InsertStapleFoodStockMutationVariables>;
export const UpdateStapleFoodStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStapleFoodStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_staple_food_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateStapleFoodStockQuantityMutation, UpdateStapleFoodStockQuantityMutationVariables>;
export const UpdateStapleFoodStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStapleFoodStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_staple_food_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateStapleFoodStockIsFavoriteMutation, UpdateStapleFoodStockIsFavoriteMutationVariables>;
export const UpdateStapleFoodStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStapleFoodStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_staple_food_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateStapleFoodStockDetailMutation, UpdateStapleFoodStockDetailMutationVariables>;
export const InsertCustomStapleFoodMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomStapleFoodMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_staple_food_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_staple_food_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomStapleFoodMasterMutation, InsertCustomStapleFoodMasterMutationVariables>;
export const DeleteCustomStapleFoodAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomStapleFoodAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_staple_food_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_staple_food_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_staple_food_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"staple_food_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stapleFoodId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"staple_food_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomStapleFoodAndStocksMutation, DeleteCustomStapleFoodAndStocksMutationVariables>;
export const GetUnitMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnitMaster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}}]}}]} as unknown as DocumentNode<GetUnitMasterQuery, GetUnitMasterQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetAllVegetableMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllVegetableMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetVegetableMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"vegetable_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"GetCustomVegetableMasterAndUnitAndStocks"},"name":{"kind":"Name","value":"custom_vegetable_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_vegetable_master_vegetable_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"vegetable_id"},"name":{"kind":"Name","value":"custom_vegetable_id"}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_name"},"name":{"kind":"Name","value":"custom_vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_master_unit_master"},"name":{"kind":"Name","value":"custom_vegetable_master_uint_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"name":{"kind":"Name","value":"custom_vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllVegetableMasterAndUnitAndStocksQuery, GetAllVegetableMasterAndUnitAndStocksQueryVariables>;
export const GetVegetableMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVegetableMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegetable_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_master_unit_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetVegetableMasterAndUnitAndStocksQuery, GetVegetableMasterAndUnitAndStocksQueryVariables>;
export const GetCustomVegetableMasterAndUnitAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomVegetableMasterAndUnitAndStocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_vegetable_master_vegetable_stocks"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"vegetable_id"},"name":{"kind":"Name","value":"custom_vegetable_id"}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_name"},"name":{"kind":"Name","value":"custom_vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_master_unit_master"},"name":{"kind":"Name","value":"custom_vegetable_master_uint_master"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"vegetable_master_vegetable_stocks"},"name":{"kind":"Name","value":"custom_vegetable_master_vegetable_stocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomVegetableMasterAndUnitAndStocksQuery, GetCustomVegetableMasterAndUnitAndStocksQueryVariables>;
export const GetVegetableStockByUserIdAndVegetableIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVegetableStockByUserIdAndVegetableId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vegetable_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<GetVegetableStockByUserIdAndVegetableIdQuery, GetVegetableStockByUserIdAndVegetableIdQueryVariables>;
export const InsertVegetableStockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertVegetableStock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"vegetable_stocks_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_vegetable_stocks_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]} as unknown as DocumentNode<InsertVegetableStockMutation, InsertVegetableStockMutationVariables>;
export const UpdateVegetableStockQuantityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVegetableStockQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_vegetable_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateVegetableStockQuantityMutation, UpdateVegetableStockQuantityMutationVariables>;
export const UpdateVegetableStockIsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVegetableStockIsFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_vegetable_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateVegetableStockIsFavoriteMutation, UpdateVegetableStockIsFavoriteMutationVariables>;
export const UpdateVegetableStockDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVegetableStockDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_vegetable_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quantity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"incremental_unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementalUnit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expiration_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expirationDate"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_favorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"incremental_unit"}},{"kind":"Field","name":{"kind":"Name","value":"expiration_date"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"is_favorite"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateVegetableStockDetailMutation, UpdateVegetableStockDetailMutationVariables>;
export const InsertCustomVegetableMasterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertCustomVegetableMaster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_custom_vegetable_master_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"custom_vegetable_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUri"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"default_expiration_period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultExpirationPeriod"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unitId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}}]} as unknown as DocumentNode<InsertCustomVegetableMasterMutation, InsertCustomVegetableMasterMutationVariables>;
export const DeleteCustomVegetableAndStocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomVegetableAndStocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_custom_vegetable_master"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"custom_vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_uri"}},{"kind":"Field","name":{"kind":"Name","value":"custom_vegetable_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_expiration_period"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"unit_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_vegetable_stocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"vegetable_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"vegetableId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stock_id"}},{"kind":"Field","name":{"kind":"Name","value":"vegetable_id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCustomVegetableAndStocksMutation, DeleteCustomVegetableAndStocksMutationVariables>;