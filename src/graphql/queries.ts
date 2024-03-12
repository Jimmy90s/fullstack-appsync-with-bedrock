/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const generateStockExplanation = /* GraphQL */ `query GenerateStockExplanation($prompt: String) {
  generateStockExplanation(prompt: $prompt)
}
` as GeneratedQuery<
  APITypes.GenerateStockExplanationQueryVariables,
  APITypes.GenerateStockExplanationQuery
>;
export const getStockExplanation = /* GraphQL */ `query GetStockExplanation($id: ID!) {
  getStockExplanation(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStockExplanationQueryVariables,
  APITypes.GetStockExplanationQuery
>;
export const listStockExplanations = /* GraphQL */ `query ListStockExplanations(
  $filter: ModelStockExplanationFilterInput
  $limit: Int
  $nextToken: String
) {
  listStockExplanations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
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
  APITypes.ListStockExplanationsQueryVariables,
  APITypes.ListStockExplanationsQuery
>;
