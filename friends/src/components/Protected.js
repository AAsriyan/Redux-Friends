import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { getFriends, addFriend } from "../actions";
import { connect } from "react-redux";
import FriendsList from "./FriendsList";

export class Protected extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    this.props.getFriends();
  }

  handleFormChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFriend = e => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    this.props.addFriend(newFriend);

    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <Loader type="Puff" color="#000" height="200" width="200" />
          <h2>LOADING BEST FRIENDS...</h2>
        </div>
      );
    }
    return (
      <div>
        <FriendsList friends={this.props.friends} />
        <form onSubmit={this.handleAddFriend}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.friendsReducer.isLoading,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(Protected);
