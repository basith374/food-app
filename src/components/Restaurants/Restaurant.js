import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Restaurant extends React.Component {
  render() {
    const {restaurant} = this.props;
    return (
      <tr>
        <td>{restaurant.name}</td>
        <td>{restaurant.cuisine.name}</td>
      </tr>
    )
  }
}

export default createFragmentContainer(Restaurant, graphql`
  fragment Restaurant_restaurant on Restaurant {
    name
    cuisine {
      name
    }
  }
`);
