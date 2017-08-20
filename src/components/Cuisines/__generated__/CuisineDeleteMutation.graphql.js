/**
 * @flow
 * @relayHash 79f729ea6ad4c057e36661e70940e48a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CuisineDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};

export type CuisineDeleteMutationResponse = {|
  +deleteCuisine: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation CuisineDeleteMutation(
  $input: DeleteCuisineInput!
) {
  deleteCuisine(input: $input) {
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
        "type": "DeleteCuisineInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CuisineDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteCuisineInput!"
          }
        ],
        "concreteType": "DeleteCuisinePayload",
        "name": "deleteCuisine",
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
  "name": "CuisineDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteCuisineInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CuisineDeleteMutation",
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
            "type": "DeleteCuisineInput!"
          }
        ],
        "concreteType": "DeleteCuisinePayload",
        "name": "deleteCuisine",
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
  "text": "mutation CuisineDeleteMutation(\n  $input: DeleteCuisineInput!\n) {\n  deleteCuisine(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
