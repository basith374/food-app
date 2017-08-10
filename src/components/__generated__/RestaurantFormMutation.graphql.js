/**
 * @flow
 * @relayHash 1ac9eec517aec0d69c9bd256136e033f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RestaurantFormMutationVariables = {|
  input: {
    name: string;
    cuisineId?: ?string;
    cuisine?: ?{
      name: string;
      restaurantsIds?: ?$ReadOnlyArray<string>;
      restaurants?: ?$ReadOnlyArray<{
        name: string;
        categoriesIds?: ?$ReadOnlyArray<string>;
        categories?: ?$ReadOnlyArray<{
          name: string;
          restaurantId?: ?string;
          foodsIds?: ?$ReadOnlyArray<string>;
        }>;
        foodsIds?: ?$ReadOnlyArray<string>;
        foods?: ?$ReadOnlyArray<{
          name: string;
          categoryId?: ?string;
          restaurantId?: ?string;
        }>;
      }>;
    };
    categoriesIds?: ?$ReadOnlyArray<string>;
    categories?: ?$ReadOnlyArray<{
      name: string;
      foodsIds?: ?$ReadOnlyArray<string>;
      foods?: ?$ReadOnlyArray<{
        name: string;
        restaurantId?: ?string;
        restaurant?: ?{
          name: string;
          cuisineId?: ?string;
          categoriesIds?: ?$ReadOnlyArray<string>;
          foodsIds?: ?$ReadOnlyArray<string>;
        };
      }>;
    }>;
    foodsIds?: ?$ReadOnlyArray<string>;
    foods?: ?$ReadOnlyArray<{
      name: string;
      categoryId?: ?string;
      category?: ?{
        name: string;
        restaurantId?: ?string;
        restaurant?: ?{
          name: string;
          cuisineId?: ?string;
          categoriesIds?: ?$ReadOnlyArray<string>;
          foodsIds?: ?$ReadOnlyArray<string>;
        };
        foodsIds?: ?$ReadOnlyArray<string>;
        foods?: ?$ReadOnlyArray<{
          name: string;
          categoryId?: ?string;
          restaurantId?: ?string;
        }>;
      };
    }>;
    clientMutationId: string;
  };
|};

export type RestaurantFormMutationResponse = {|
  +createRestaurant: ?{|
    +restaurant: ?{|
      +id: string;
      +name: string;
      +cuisine: ?{|
        +id: string;
      |};
    |};
  |};
|};
*/


/*
mutation RestaurantFormMutation(
  $input: CreateRestaurantInput!
) {
  createRestaurant(input: $input) {
    restaurant {
      id
      name
      cuisine {
        id
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
        "type": "CreateRestaurantInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RestaurantFormMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateRestaurantInput!"
          }
        ],
        "concreteType": "CreateRestaurantPayload",
        "name": "createRestaurant",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Restaurant",
            "name": "restaurant",
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
  "name": "RestaurantFormMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateRestaurantInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RestaurantFormMutation",
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
            "type": "CreateRestaurantInput!"
          }
        ],
        "concreteType": "CreateRestaurantPayload",
        "name": "createRestaurant",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Restaurant",
            "name": "restaurant",
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
  "text": "mutation RestaurantFormMutation(\n  $input: CreateRestaurantInput!\n) {\n  createRestaurant(input: $input) {\n    restaurant {\n      id\n      name\n      cuisine {\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
