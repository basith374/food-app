import React from 'react';
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import environment from '../../Environment';
import Cuisines from './Cuisines';

const AllCuisineQuery = graphql`
  query CuisinesAllQuery {
    viewer {
      id,
      ...Cuisines_viewer
    }
  }
`

class CuisinesWrapper extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AllCuisineQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <Cuisines viewer={props.viewer} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}

export default CuisinesWrapper;
