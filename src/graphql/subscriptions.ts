/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStockExplanation = /* GraphQL */ `subscription OnCreateStockExplanation(
  $filter: ModelSubscriptionStockExplanationFilterInput
  $owner: String
) {
  onCreateStockExplanation(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStockExplanationSubscriptionVariables,
  APITypes.OnCreateStockExplanationSubscription
>;
export const onUpdateStockExplanation = /* GraphQL */ `subscription OnUpdateStockExplanation(
  $filter: ModelSubscriptionStockExplanationFilterInput
  $owner: String
) {
  onUpdateStockExplanation(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStockExplanationSubscriptionVariables,
  APITypes.OnUpdateStockExplanationSubscription
>;
export const onDeleteStockExplanation = /* GraphQL */ `subscription OnDeleteStockExplanation(
  $filter: ModelSubscriptionStockExplanationFilterInput
  $owner: String
) {
  onDeleteStockExplanation(filter: $filter, owner: $owner) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStockExplanationSubscriptionVariables,
  APITypes.OnDeleteStockExplanationSubscription
>;
