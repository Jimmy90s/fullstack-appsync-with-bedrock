/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCorePortfolioInput = {
  date: string,
  ticker: string,
  return?: string | null,
  weight?: string | null,
  weighted_return?: string | null,
};

export type ModelCorePortfolioConditionInput = {
  return?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  weighted_return?: ModelStringInput | null,
  and?: Array< ModelCorePortfolioConditionInput | null > | null,
  or?: Array< ModelCorePortfolioConditionInput | null > | null,
  not?: ModelCorePortfolioConditionInput | null,
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

export type CorePortfolio = {
  __typename: "CorePortfolio",
  date: string,
  ticker: string,
  return?: string | null,
  weight?: string | null,
  weighted_return?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCorePortfolioInput = {
  date: string,
  ticker: string,
  return?: string | null,
  weight?: string | null,
  weighted_return?: string | null,
};

export type DeleteCorePortfolioInput = {
  date: string,
  ticker: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCorePortfolioFilterInput = {
  date?: ModelStringInput | null,
  ticker?: ModelStringInput | null,
  return?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  weighted_return?: ModelStringInput | null,
  and?: Array< ModelCorePortfolioFilterInput | null > | null,
  or?: Array< ModelCorePortfolioFilterInput | null > | null,
  not?: ModelCorePortfolioFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCorePortfolioConnection = {
  __typename: "ModelCorePortfolioConnection",
  items:  Array<CorePortfolio | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCorePortfolioFilterInput = {
  date?: ModelSubscriptionStringInput | null,
  ticker?: ModelSubscriptionStringInput | null,
  return?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionStringInput | null,
  weighted_return?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCorePortfolioFilterInput | null > | null,
  or?: Array< ModelSubscriptionCorePortfolioFilterInput | null > | null,
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

export type CreateCorePortfolioMutationVariables = {
  input: CreateCorePortfolioInput,
  condition?: ModelCorePortfolioConditionInput | null,
};

export type CreateCorePortfolioMutation = {
  createCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCorePortfolioMutationVariables = {
  input: UpdateCorePortfolioInput,
  condition?: ModelCorePortfolioConditionInput | null,
};

export type UpdateCorePortfolioMutation = {
  updateCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCorePortfolioMutationVariables = {
  input: DeleteCorePortfolioInput,
  condition?: ModelCorePortfolioConditionInput | null,
};

export type DeleteCorePortfolioMutation = {
  deleteCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCorePortfolioQueryVariables = {
  date: string,
  ticker: string,
};

export type GetCorePortfolioQuery = {
  getCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCorePortfoliosQueryVariables = {
  date?: string | null,
  ticker?: ModelStringKeyConditionInput | null,
  filter?: ModelCorePortfolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCorePortfoliosQuery = {
  listCorePortfolios?:  {
    __typename: "ModelCorePortfolioConnection",
    items:  Array< {
      __typename: "CorePortfolio",
      date: string,
      ticker: string,
      return?: string | null,
      weight?: string | null,
      weighted_return?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCorePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionCorePortfolioFilterInput | null,
  owner?: string | null,
};

export type OnCreateCorePortfolioSubscription = {
  onCreateCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCorePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionCorePortfolioFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCorePortfolioSubscription = {
  onUpdateCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCorePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionCorePortfolioFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCorePortfolioSubscription = {
  onDeleteCorePortfolio?:  {
    __typename: "CorePortfolio",
    date: string,
    ticker: string,
    return?: string | null,
    weight?: string | null,
    weighted_return?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
