import React from 'react';
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import environment from '../../Environment';
import Foods from './Foods';

const AllFoodQuery = graphql`
  query FoodsAllQuery {
    viewer {
      ...Foods_viewer
    }
  }
`

class FoodWrapper extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AllFoodQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <Foods viewer={props.viewer} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}

export default FoodWrapper;
