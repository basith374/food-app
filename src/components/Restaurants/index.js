import React from 'react';
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import environment from '../../Environment';
import Restaurants from './Restaurants';

const AllRestaurantQuery = graphql`
  query RestaurantsAllQuery {
    viewer {
      id
      ...Restaurants_viewer
    }
  }
`

class RestaurantsWrapper extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AllRestaurantQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <Restaurants viewer={props.viewer} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}

export default RestaurantsWrapper;
