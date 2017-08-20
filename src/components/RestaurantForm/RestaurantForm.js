import React from 'react';
import {
  graphql,
  commitMutation,
  createFragmentContainer
} from 'react-relay';
import environment from '../../Environment';

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

  componentDidMount() {
    const {id,viewer} = this.props;
    if(id) {
      const restaurant = viewer.allRestaurants.edges.filter(({node}) => node.id == id)[0];
      if(restaurant) {
        const {
          name,
          cuisine
        } = restaurant.node;
        this.setState({name, cuisineId: cuisine.id})
      };
    }
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

export default RestaurantForm;
