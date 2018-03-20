import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
        {this.props.users.map((u) => <li key={u.userName}>{u.userName} from {u.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, primaryUser: state.users[0]}
}
// aren't we supposed to be connecting something around here?
export const ConnectedUsers = connect(mapStateToProps)(Users)

/* The users component is equal to the connectedusers constant.
this commonent is adding store change values as props. This creates a more abstract higharchy in react.
the mapstatetoProps is a function we write that takes state as a parameter and returns an object in which users is equal to the states user key along with a custom key which we set. This allows us to have imported
flexibility in the props we want to provide for the component.
we are exporting the connecteduser constant that is equal to the return value of the connect redux middlewear function which gets the mapstatetoprops callback function. the return value of that fucntion
is another function in which we pass in the users component.
*/
