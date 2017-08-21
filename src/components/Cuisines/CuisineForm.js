import React from 'react';
import environment from '../../Environment';
import {
  graphql,
  QueryRenderer,
  commitMutation
} from 'react-relay';
import {
  ConnectionHandler
} from 'relay-runtime';
import {
  Button
} from "@blueprintjs/core";

const mutation = graphql`
  mutation CuisineFormMutation(
    $input: CreateCuisineInput!
  ) {
    createCuisine(input: $input) {
      edge {
        __typename
        cursor
        node {
          id
          name
          restaurants {
            count
          }
        }
      }
    }
  }
`;

class CuisineForm extends React.Component {
  state = {
    name: '',
  }

  saveCuisine() {
    const {
      name,
    } = this.state;
    this.setState({
      name: ''
    })
    const variables = {
      input: {
        name,
        clientMutationId: "",
      }
    };
    commitMutation(
      environment,
      {
        mutation,
        variables,
        updater: (store) => {
          const payload = store.getRootField('createCuisine');
          const newEdge = payload.getLinkedRecord('edge');
          const userProxy = store.get(this.props.viewer.id);
          const conn = ConnectionHandler.getConnection(
            userProxy,
            'Cuisines_allCuisines',
          );
          ConnectionHandler.insertEdgeAfter(conn, newEdge);
        },
      }
    )
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <input className="pt-input" type="text" placeholder="Text input" dir="auto"
          style={{marginRight:5,width:200}}
          value={name}
          onChange={({target}) => this.setState({name:target.value})} />
        <Button iconName="add" text="Create New" onClick={this.saveCuisine.bind(this)} />
      </div>
    )
  }
}

export default CuisineForm;
