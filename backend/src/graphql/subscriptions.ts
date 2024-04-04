/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCorePortfolio = /* GraphQL */ `subscription OnCreateCorePortfolio(
  $filter: ModelSubscriptionCorePortfolioFilterInput
  $owner: String
) {
  onCreateCorePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCorePortfolioSubscriptionVariables,
  APITypes.OnCreateCorePortfolioSubscription
>;
export const onUpdateCorePortfolio = /* GraphQL */ `subscription OnUpdateCorePortfolio(
  $filter: ModelSubscriptionCorePortfolioFilterInput
  $owner: String
) {
  onUpdateCorePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCorePortfolioSubscriptionVariables,
  APITypes.OnUpdateCorePortfolioSubscription
>;
export const onDeleteCorePortfolio = /* GraphQL */ `subscription OnDeleteCorePortfolio(
  $filter: ModelSubscriptionCorePortfolioFilterInput
  $owner: String
) {
  onDeleteCorePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCorePortfolioSubscriptionVariables,
  APITypes.OnDeleteCorePortfolioSubscription
>;
