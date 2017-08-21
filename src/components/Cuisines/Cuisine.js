import React from 'react';
import {
  createFragmentContainer,
  graphql,
  commitMutation,
} from 'react-relay';
import environment from '../../Environment';
import {
  Link
} from 'react-router-dom';
import {
  Popover, Button, Menu, MenuItem, MenuDivider,
  Position
} from "@blueprintjs/core";
import {
  ConnectionHandler
} from 'relay-runtime';

const mutation = graphql`
  mutation CuisineDeleteMutation (
    $input: DeleteCuisineInput!
  ) {
    deleteCuisine(input: $input) {
      deletedId
    }
  }
`;

class Cuisine extends React.Component {
  handleDelete() {
    const {id} = this.props.cuisine;
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
          const payload = store.getRootField('deleteCuisine');
          var deletedId = payload.getValue('deletedId');
          var conn = ConnectionHandler.getConnection(
            userProxy,
            'Cuisines_allCuisines'
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
    const {cuisine} = this.props;
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
        <td>{cuisine.name}</td>
        <td>{cuisine.restaurants.count}</td>
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

export default createFragmentContainer(Cuisine, {
  cuisine: graphql`
    fragment Cuisine_cuisine on Cuisine {
      id
      name
      restaurants {
        count
      }
    }
  `,
});
