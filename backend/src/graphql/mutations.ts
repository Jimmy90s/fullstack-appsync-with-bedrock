/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCorePortfolio = /* GraphQL */ `mutation CreateCorePortfolio(
  $input: CreateCorePortfolioInput!
  $condition: ModelCorePortfolioConditionInput
) {
  createCorePortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCorePortfolioMutationVariables,
  APITypes.CreateCorePortfolioMutation
>;
export const updateCorePortfolio = /* GraphQL */ `mutation UpdateCorePortfolio(
  $input: UpdateCorePortfolioInput!
  $condition: ModelCorePortfolioConditionInput
) {
  updateCorePortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCorePortfolioMutationVariables,
  APITypes.UpdateCorePortfolioMutation
>;
export const deleteCorePortfolio = /* GraphQL */ `mutation DeleteCorePortfolio(
  $input: DeleteCorePortfolioInput!
  $condition: ModelCorePortfolioConditionInput
) {
  deleteCorePortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCorePortfolioMutationVariables,
  APITypes.DeleteCorePortfolioMutation
>;
