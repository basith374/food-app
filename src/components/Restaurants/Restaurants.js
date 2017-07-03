import React from 'react';
import Restaurant from './Restaurant';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class Restaurants extends React.Component {
  render() {
    return (
      <div className="App-content">
        <table className="pt-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {this.props.viewer.allRestaurants.edges.map(({node}) => {
              return <Restaurant key={node.__id} restaurant={node} />;
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createFragmentContainer(Restaurants, graphql`
  fragment Restaurants_viewer on Viewer {
    allRestaurants {
      edges {
        node {
          ...Restaurant_restaurant
        }
      }
    }
  }
`)
