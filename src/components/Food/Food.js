import React from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Food extends React.Component {
  render() {
    const {food} = this.props;
    return (
      <tr>
        <td>{food.name}</td>
        <td>{food.category.name}</td>
        <td>{food.restaurant.name}</td>
      </tr>
    )
  }
}

export default createFragmentContainer(Food, graphql`
  fragment Food_food on Food {
    name
    restaurant {
      name
    }
    category {
      name
    }
  }
`);
