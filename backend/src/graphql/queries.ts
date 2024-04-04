/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCorePortfolio = /* GraphQL */ `query GetCorePortfolio($date: String!, $ticker: String!) {
  getCorePortfolio(date: $date, ticker: $ticker) {
    date
    ticker
    return
    weight
    weighted_return
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCorePortfolioQueryVariables,
  APITypes.GetCorePortfolioQuery
>;
export const listCorePortfolios = /* GraphQL */ `query ListCorePortfolios(
  $date: String
  $ticker: ModelStringKeyConditionInput
  $filter: ModelCorePortfolioFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCorePortfolios(
    date: $date
    ticker: $ticker
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      date
      ticker
      return
      weight
      weighted_return
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCorePortfoliosQueryVariables,
  APITypes.ListCorePortfoliosQuery
>;
