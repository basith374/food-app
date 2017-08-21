/**
 * @flow
 * @relayHash 6fe8389344622e68537e42fdf90560e6
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
    +edge: ?{|
      +__typename: string;
      +cursor: string;
      +node: {|
        +id: string;
        +name: string;
        +restaurants: ?{|
          +count: number;
        |};
      |};
    |};
  |};
|};
*/


/*
mutation CuisineFormMutation(
  $input: CreateCuisineInput!
) {
  createCuisine(input: $input) {
    edge {
      __typename
      cursor
      node {
        id
        name
        restaurants {
          count
        }
      }
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
            "concreteType": "CuisineEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Cuisine",
                "name": "node",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RestaurantConnection",
                    "name": "restaurants",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "count",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
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
            "concreteType": "CuisineEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Cuisine",
                "name": "node",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RestaurantConnection",
                    "name": "restaurants",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "count",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
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
  "text": "mutation CuisineFormMutation(\n  $input: CreateCuisineInput!\n) {\n  createCuisine(input: $input) {\n    edge {\n      __typename\n      cursor\n      node {\n        id\n        name\n        restaurants {\n          count\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
