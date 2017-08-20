import React from 'react';
import {
  QueryRenderer,
  graphql,
  createFragmentContainer
} from 'react-relay';
import {Redirect} from 'react-router-dom';
import environment from '../../Environment';
import RestaurantForm from './RestaurantForm';

const AllCuisineQuery = graphql`
  query RestaurantFormAllCuisineQuery {
    viewer {
      allRestaurants {
        edges {
          node {
            name
            id
            cuisine {
              id
            }
          }
        }
      }
      allCuisines {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  }
`

class RestaurantFormWrapper extends React.Component {
  state = {
    finished: false
  }

  finish() {
    this.setState({finished:true});
  }

  render() {
    if(this.state.finished) {
      return <Redirect to="/restaurants" />
    }
    const {id} = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={AllCuisineQuery}
        variables={{
          filter: {id}
        }}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <RestaurantForm viewer={props.viewer} finish={this.finish.bind(this)} id={id} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}

export default RestaurantFormWrapper;
