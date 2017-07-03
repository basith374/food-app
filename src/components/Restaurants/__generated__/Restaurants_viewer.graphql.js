/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Restaurants_viewer = {|
  +allRestaurants: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {| |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Restaurants_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "RestaurantConnection",
      "name": "allRestaurants",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "RestaurantEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Restaurant",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Restaurant_restaurant",
                  "args": null
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
  "type": "Viewer"
};

module.exports = fragment;
