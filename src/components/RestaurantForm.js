import React from 'react';
import environment from '../Environment';
import {
  graphql,
  QueryRenderer,
  commitMutation,
  createFragmentContainer
} from 'react-relay';
import {Redirect} from 'react-router-dom';

const mutation = graphql`
  mutation RestaurantFormMutation(
    $input: CreateRestaurantInput!
  ) {
    createRestaurant(input: $input) {
      restaurant {
        id
        name
        cuisine {
          id
        }
      }
    }
  }
`;

class RestaurantForm extends React.Component {
  state = {
    name: '',
    cuisineId: ''
  }

  constructor() {
    super();
    this.saveRestaurant = this.saveRestaurant.bind(this);
  }

  saveRestaurant() {
    const {
      name,
      cuisineId
    } = this.state;
    const variables = {
      input: {
        name,
        cuisineId,
        clientMutationId: "",
      }
    };
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response) => {
          this.props.finish();
        }
      }
    )
  }

  render() {
    const {name,cuisineId} = this.state;
    return (
      <div>
        <div style={{width:'400px'}}>
          <h2>Create Restaurant</h2>
          <label className="pt-label">
            Name
            <span className="pt-text-muted">(required)</span>
            <input className="pt-input" type="text" placeholder="Text input" dir="auto"
              style={{width:'100%'}}
              value={name}
              onChange={({target}) => this.setState({name:target.value})} />
          </label>
          <label className="pt-label">
            Cuisine
            <span className="pt-text-muted">(optional)</span>
            <div className="pt-select">
              <select value={cuisineId} onChange={({target}) => this.setState({cuisineId:target.value})}>
                <option>Choose an item...</option>
                {this.props.viewer.allCuisines.edges.map(({node}) => {
                  return <option key={node.id} value={node.id}>{node.name}</option>
                })}
              </select>
            </div>
          </label>
          <button type="button" className="pt-button pt-icon-add" onClick={this.saveRestaurant}>Save</button>
        </div>
      </div>
    );
  }
}

const AllCuisineQuery = graphql`
  query RestaurantFormAllCuisineQuery {
    viewer {
      allCuisines {
        edges {
          node {
            name
            id
          }
        }
      }
      ...RestaurantForm_viewer
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
    return (
      <QueryRenderer
        environment={environment}
        query={AllCuisineQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <RestaurantForm viewer={props.viewer} finish={this.finish.bind(this)} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}


export default RestaurantFormWrapper;
