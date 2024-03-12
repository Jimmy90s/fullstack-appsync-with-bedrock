/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createStockExplanation = /* GraphQL */ `mutation CreateStockExplanation(
  $input: CreateStockExplanationInput!
  $condition: ModelStockExplanationConditionInput
) {
  createStockExplanation(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStockExplanationMutationVariables,
  APITypes.CreateStockExplanationMutation
>;
export const updateStockExplanation = /* GraphQL */ `mutation UpdateStockExplanation(
  $input: UpdateStockExplanationInput!
  $condition: ModelStockExplanationConditionInput
) {
  updateStockExplanation(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStockExplanationMutationVariables,
  APITypes.UpdateStockExplanationMutation
>;
export const deleteStockExplanation = /* GraphQL */ `mutation DeleteStockExplanation(
  $input: DeleteStockExplanationInput!
  $condition: ModelStockExplanationConditionInput
) {
  deleteStockExplanation(input: $input, condition: $condition) {
    id
    title
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStockExplanationMutationVariables,
  APITypes.DeleteStockExplanationMutation
>;
