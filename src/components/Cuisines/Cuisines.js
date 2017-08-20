import React from 'react';
import Cuisine from './Cuisine';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import {
  Link
} from 'react-router-dom';
import CuisineForm from './CuisineForm';

class Cuisines extends React.Component {

  render() {
    return (
      <div className="App-content">
        <CuisineForm viewer={this.props.viewer} />
        <table className="pt-table" style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Restaurants</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.viewer.allCuisines.edges.map(({node}) => {
              return <Cuisine key={node.__id} cuisine={node} viewer={this.props.viewer} />;
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createFragmentContainer(Cuisines, graphql`
  fragment Cuisines_viewer on Viewer {
    allCuisines(
      first: 1000  # max GraphQLInt
    ) @connection(key: "Cuisines_allCuisines") {
      edges {
        node {
          ...Cuisine_cuisine
        }
      }
    }
    id
  }
`)
