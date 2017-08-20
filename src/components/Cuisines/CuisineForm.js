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
      cuisine {
        id
        name
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
    let tempID = 0;
    const variables = {
      input: {
        name,
        clientMutationId: tempID++,
      }
    };
    function sharedUpdater(store, user, newEdge) {
      const userProxy = store.get(user.id);
      const conn = ConnectionHandler.getConnection(
        userProxy,
        'Cuisines_allCuisines',
      );
      ConnectionHandler.insertEdgeAfter(conn, newEdge);
    }
    commitMutation(
      environment,
      {
        mutation,
        variables,
        updater: (store) => {
          const payload = store.getRootField('createCuisine');
          const newEdge = payload.getLinkedRecord('cuisine');
          sharedUpdater(store, this.props.viewer, newEdge);
        },
        optimisticUpdater: (store) => {
          const id = 'client:newCuisine:' + tempID++;
          const node = store.create(id, 'Cuisine');
          node.setValue(name, 'name');
          node.setValue(id, 'id');
          const newEdge = store.create(
            'client:newEdge:' + tempID++,
            'cuisine',
          );
          newEdge.setLinkedRecord(node, 'node');
          sharedUpdater(store, this.props.viewer, newEdge);
        }
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
