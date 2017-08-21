import React from 'react';
import Restaurant from './Restaurant';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import {
  Link
} from 'react-router-dom';

class Restaurants extends React.Component {
  render() {
    return (
      <div className="App-content">
        <Link to="restaurants/create" className="pt-button pt-icon-add">Create New</Link>
        <table className="pt-table" style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.viewer.allRestaurants.edges.map(({node}) => {
              return <Restaurant key={node.__id} restaurant={node} viewer={this.props.viewer} />;
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createFragmentContainer(Restaurants, graphql`
  fragment Restaurants_viewer on Viewer {
    allRestaurants(
      first: 1000
    ) @connection(key: "Restaurants_allRestaurants") {
      edges {
        node {
          ...Restaurant_restaurant
        }
      }
    }
    id
  }
`)
