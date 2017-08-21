import React from 'react';
import {
  createFragmentContainer,
  graphql,
  commitMutation
} from 'react-relay';
import environment from '../../Environment';
import {
  ConnectionHandler
} from 'relay-runtime';
import {
  Link
} from 'react-router-dom';
import {
  Popover, Button, Menu, MenuItem, MenuDivider,
  Position
} from "@blueprintjs/core";

const mutation = graphql`
  mutation RestaurantDeleteMutation (
    $input: DeleteRestaurantInput!
  ) {
    deleteRestaurant(input: $input) {
      deletedId
    }
  }
`;

class Restaurant extends React.Component {
  handleDelete() {
    const {id} = this.props.restaurant;
    // const confirmed = window.confirm('Are you sure?');
    // if(!confirmed) return;
    const variables = {
      input: {
        id,
        clientMutationId: "",
      }
    };
    commitMutation(
      environment,
      {
        mutation,
        variables,
        updater: (store) => {
          const userProxy = store.get(this.props.viewer.id);
          const payload = store.getRootField('deleteRestaurant');
          var deletedId = payload.getValue('deletedId');
          var conn = ConnectionHandler.getConnection(
            userProxy,
            'Restaurants_allRestaurants'
          );
          ConnectionHandler.deleteNode(
            conn,
            deletedId
          );
        }
      }
    )
  }

  render() {
    const {restaurant} = this.props;
    const dropdownMenu = (
      <Menu>
          <MenuItem
              iconName="trash"
              onClick={this.handleDelete.bind(this)}
              text="Delete"
          />
      </Menu>
    )
    return (
      <tr>
        <td><Link to={'restaurants/edit/' + restaurant.id}>{restaurant.name}</Link></td>
        <td>{restaurant.cuisine ? restaurant.cuisine.name : 'N/A'}</td>
        <td>
          <Button iconName="trash" onClick={this.handleDelete.bind(this)} />
          <Popover content={dropdownMenu} position={Position.BOTTOM}>
            <Button iconName="more" />
          </Popover>
        </td>
      </tr>
    )
  }
}

export default createFragmentContainer(Restaurant, graphql`
  fragment Restaurant_restaurant on Restaurant {
    id
    name
    cuisine {
      name
    }
  }
`);
