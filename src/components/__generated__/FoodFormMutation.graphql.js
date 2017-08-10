/**
 * @flow
 * @relayHash c506419b54dab5cb33d859167ac3cca6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type FoodFormMutationVariables = {|
  input: {
    name: string;
    categoryId?: ?string;
    category?: ?{
      name: string;
      restaurantId?: ?string;
      restaurant?: ?{
        name: string;
        cuisineId?: ?string;
        cuisine?: ?{
          name: string;
          restaurantsIds?: ?$ReadOnlyArray<string>;
        };
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
      };
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
    };
    restaurantId?: ?string;
    restaurant?: ?{
      name: string;
      cuisineId?: ?string;
      cuisine?: ?{
        name: string;
        restaurantsIds?: ?$ReadOnlyArray<string>;
        restaurants?: ?$ReadOnlyArray<{
          name: string;
          cuisineId?: ?string;
          categoriesIds?: ?$ReadOnlyArray<string>;
          foodsIds?: ?$ReadOnlyArray<string>;
        }>;
      };
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
    };
    clientMutationId: string;
  };
|};

export type FoodFormMutationResponse = {|
  +createFood: ?{|
    +food: ?{|
      +id: string;
      +name: string;
      +category: ?{|
        +id: string;
      |};
      +restaurant: ?{|
        +id: string;
      |};
    |};
  |};
|};
*/


/*
mutation FoodFormMutation(
  $input: CreateFoodInput!
) {
  createFood(input: $input) {
    food {
      id
      name
      category {
        id
      }
      restaurant {
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
        "type": "CreateFoodInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FoodFormMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateFoodInput!"
          }
        ],
        "concreteType": "CreateFoodPayload",
        "name": "createFood",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Food",
            "name": "food",
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
                "concreteType": "Category",
                "name": "category",
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
              },
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
  "name": "FoodFormMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateFoodInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "FoodFormMutation",
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
            "type": "CreateFoodInput!"
          }
        ],
        "concreteType": "CreateFoodPayload",
        "name": "createFood",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Food",
            "name": "food",
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
                "concreteType": "Category",
                "name": "category",
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
              },
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
  "text": "mutation FoodFormMutation(\n  $input: CreateFoodInput!\n) {\n  createFood(input: $input) {\n    food {\n      id\n      name\n      category {\n        id\n      }\n      restaurant {\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
