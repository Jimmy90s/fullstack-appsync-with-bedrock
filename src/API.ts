/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStockExplanationInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelStockExplanationConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStockExplanationConditionInput | null > | null,
  or?: Array< ModelStockExplanationConditionInput | null > | null,
  not?: ModelStockExplanationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type StockExplanation = {
  __typename: "StockExplanation",
  id: string,
  title: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStockExplanationInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteStockExplanationInput = {
  id: string,
};

export type ModelStockExplanationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStockExplanationFilterInput | null > | null,
  or?: Array< ModelStockExplanationFilterInput | null > | null,
  not?: ModelStockExplanationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStockExplanationConnection = {
  __typename: "ModelStockExplanationConnection",
  items:  Array<StockExplanation | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionStockExplanationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStockExplanationFilterInput | null > | null,
  or?: Array< ModelSubscriptionStockExplanationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateStockExplanationMutationVariables = {
  input: CreateStockExplanationInput,
  condition?: ModelStockExplanationConditionInput | null,
};

export type CreateStockExplanationMutation = {
  createStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStockExplanationMutationVariables = {
  input: UpdateStockExplanationInput,
  condition?: ModelStockExplanationConditionInput | null,
};

export type UpdateStockExplanationMutation = {
  updateStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStockExplanationMutationVariables = {
  input: DeleteStockExplanationInput,
  condition?: ModelStockExplanationConditionInput | null,
};

export type DeleteStockExplanationMutation = {
  deleteStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GenerateStockExplanationQueryVariables = {
  prompt?: string | null,
};

export type GenerateStockExplanationQuery = {
  generateStockExplanation: string,
};

export type GetStockExplanationQueryVariables = {
  id: string,
};

export type GetStockExplanationQuery = {
  getStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStockExplanationsQueryVariables = {
  filter?: ModelStockExplanationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStockExplanationsQuery = {
  listStockExplanations?:  {
    __typename: "ModelStockExplanationConnection",
    items:  Array< {
      __typename: "StockExplanation",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStockExplanationSubscriptionVariables = {
  filter?: ModelSubscriptionStockExplanationFilterInput | null,
  owner?: string | null,
};

export type OnCreateStockExplanationSubscription = {
  onCreateStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStockExplanationSubscriptionVariables = {
  filter?: ModelSubscriptionStockExplanationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStockExplanationSubscription = {
  onUpdateStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStockExplanationSubscriptionVariables = {
  filter?: ModelSubscriptionStockExplanationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStockExplanationSubscription = {
  onDeleteStockExplanation?:  {
    __typename: "StockExplanation",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
