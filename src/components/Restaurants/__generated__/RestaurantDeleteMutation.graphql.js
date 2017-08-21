/**
 * @flow
 * @relayHash 7d600a7794501a5b83b7465cfea56f7b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RestaurantDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};

export type RestaurantDeleteMutationResponse = {|
  +deleteRestaurant: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation RestaurantDeleteMutation(
  $input: DeleteRestaurantInput!
) {
  deleteRestaurant(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteRestaurantInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RestaurantDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteRestaurantInput!"
          }
        ],
        "concreteType": "DeleteRestaurantPayload",
        "name": "deleteRestaurant",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
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
  "name": "RestaurantDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteRestaurantInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RestaurantDeleteMutation",
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
            "type": "DeleteRestaurantInput!"
          }
        ],
        "concreteType": "DeleteRestaurantPayload",
        "name": "deleteRestaurant",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation RestaurantDeleteMutation(\n  $input: DeleteRestaurantInput!\n) {\n  deleteRestaurant(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
