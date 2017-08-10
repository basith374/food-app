import React from 'react';
import environment from '../Environment';
import {
  graphql,
  QueryRenderer,
  commitMutation
} from 'react-relay';
import {Redirect} from 'react-router-dom';

const mutation = graphql`
  mutation FoodFormMutation(
    $input: CreateFoodInput!
  ) {
    createFood(input: $input) {
      food {
        id
        name
        category {
          id
        }
        restaurant {
          id
        }
      }
    }
  }
`;

class FoodForm extends React.Component {
  state = {
    name: '',
    categoryId: '',
    restaurantId: ''
  }

  constructor() {
    super();
    this.saveFood = this.saveFood.bind(this);
  }

  saveFood() {
    const {
      name,
      categoryId,
      restaurantId,
    } = this.state;
    const variables = {
      input: {
        name,
        categoryId,
        restaurantId,
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
    const {name,categoryId,restaurantId} = this.state;
    return (
      <div>
        <div style={{width:'400px'}}>
          <h2>Create Food</h2>
          <label className="pt-label">
            Name
            <span className="pt-text-muted">(required)</span>
            <input className="pt-input" type="text" placeholder="Text input" dir="auto"
              style={{width:'100%'}}
              value={name}
              onChange={({target}) => this.setState({name:target.value})} />
          </label>
          <label className="pt-label">
            Category
            <span className="pt-text-muted">(optional)</span>
            <div className="pt-select">
              <select value={categoryId} onChange={({target}) => this.setState({categoryId:target.value})}>
                <option>Choose an item...</option>
                {this.props.viewer.allCategories.edges.map(({node}) => {
                  return <option key={node.id} value={node.id}>{node.name}</option>
                })}
              </select>
            </div>
          </label>
          <label className="pt-label">
            Restaurant
            <span className="pt-text-muted">(optional)</span>
            <div className="pt-select">
              <select value={restaurantId} onChange={({target}) => this.setState({restaurantId:target.value})}>
                <option>Choose an item...</option>
                {this.props.viewer.allRestaurants.edges.map(({node}) => {
                  return <option key={node.id} value={node.id}>{node.name}</option>
                })}
              </select>
            </div>
          </label>
          <button type="button" className="pt-button pt-icon-add" onClick={this.saveFood}>Save</button>
        </div>
      </div>
    );
  }
}

const FoodFormQuery = graphql`
  query FoodFormQuery {
    viewer {
      allCategories {
        edges {
          node {
            name
            id
          }
        }
      }
      allRestaurants {
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

class FoodFormWrapper extends React.Component {
  state = {
    finished: false
  }

  finish() {
    this.setState({finished:true});
  }

  render() {
    if(this.state.finished) {
      return <Redirect to="/food" />
    }
    return (
      <QueryRenderer
        environment={environment}
        query={FoodFormQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return <FoodForm viewer={props.viewer} finish={this.finish.bind(this)} />
          }
          return <div>Loading...</div>;
        }}
      />
    )
  }
}


export default FoodFormWrapper;
