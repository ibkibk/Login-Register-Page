import React, { Component } from "react";
import Login from "../LoginAndReg/LoginAndReg";
import LoggedIn from "../LoginAndReg/LoggedIn/LoggedIn";
import firebase from "../../firebase";

export default class LandingPage extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { user } = this.state;
    return <div>{user ? <LoggedIn /> : <Login />}</div>;
  }
}
