/**
 * @flow
 * @relayHash 00f86cc2e3ec71808d2d68d529befea7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CuisineFormMutationVariables = {|
  input: {
    name: string;
    restaurantsIds?: ?$ReadOnlyArray<string>;
    restaurants?: ?$ReadOnlyArray<{
      name: string;
      categoriesIds?: ?$ReadOnlyArray<string>;
      categories?: ?$ReadOnlyArray<{
        name: string;
        foodsIds?: ?$ReadOnlyArray<string>;
        foods?: ?$ReadOnlyArray<{
          name: string;
          categoryId?: ?string;
          restaurantId?: ?string;
        }>;
      }>;
      foodsIds?: ?$ReadOnlyArray<string>;
      foods?: ?$ReadOnlyArray<{
        name: string;
        categoryId?: ?string;
        category?: ?{
          name: string;
          restaurantId?: ?string;
          foodsIds?: ?$ReadOnlyArray<string>;
        };
      }>;
    }>;
    clientMutationId: string;
  };
|};

export type CuisineFormMutationResponse = {|
  +createCuisine: ?{|
    +cuisine: ?{|
      +id: string;
      +name: string;
    |};
  |};
|};
*/


/*
mutation CuisineFormMutation(
  $input: CreateCuisineInput!
) {
  createCuisine(input: $input) {
    cuisine {
      id
      name
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCuisineInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CuisineFormMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCuisineInput!"
          }
        ],
        "concreteType": "CreateCuisinePayload",
        "name": "createCuisine",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cuisine",
            "name": "cuisine",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CuisineFormMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCuisineInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CuisineFormMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCuisineInput!"
          }
        ],
        "concreteType": "CreateCuisinePayload",
        "name": "createCuisine",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cuisine",
            "name": "cuisine",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CuisineFormMutation(\n  $input: CreateCuisineInput!\n) {\n  createCuisine(input: $input) {\n    cuisine {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
