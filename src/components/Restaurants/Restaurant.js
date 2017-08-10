import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import {
  Link
} from 'react-router-dom';
import {
  Popover, Button, Menu, MenuItem, MenuDivider,
  Position
} from "@blueprintjs/core";

class Restaurant extends React.Component {
  handleDelete() {
    if(window.confirm('Are you sure?')) {
      console.log('kaboom');
    }
  }

  render() {
    const {restaurant} = this.props;
    const dropdownMenu = (
      <Menu>
          <MenuItem
              iconName="trash"
              onClick={this.handleDelete}
              text="Delete"
          />
      </Menu>
    )
    return (
      <tr>
        <td><Link to="/">{restaurant.name}</Link></td>
        <td>{restaurant.cuisine ? restaurant.cuisine.name : 'N/A'}</td>
        <td>
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
