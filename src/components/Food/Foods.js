import React from 'react';
import Food from './Food';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import {
  Link
} from 'react-router-dom';

class Foods extends React.Component {
  render() {
    return (
      <div className="App-content">
        <Link to="food/create" className="pt-button pt-icon-add">Create New</Link>
        <table className="pt-table" style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Restaurant</th>
            </tr>
          </thead>
          <tbody>
            {this.props.viewer.allFoods.edges.map(({node}) => {
              return <Food key={node.__id} food={node} />;
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createFragmentContainer(Foods, graphql`
  fragment Foods_viewer on Viewer {
    allFoods {
      edges {
        node {
          ...Food_food
        }
      }
    }
  }
`)
