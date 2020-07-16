// import React, { Component } from "react";
// import Login from "../Component/LoginAndReg/LoginAndReg";
// import Home from "../Component/Home/Home";
// import firebase from "../firebase";
// import "./App.css";

// export default class App extends Component {
//   state = {
//     user: null,
//   };

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }

//   render() {
//     const { user } = this.state;
//     return <div>{user ? <Home /> : <Login />}</div>;
//   }
// }

import React, { Component } from "react";
import "./App.css";
import Main from "../Component/Main/Main";
// import LandingPage from "../Component/LandingPage/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Main />
        {/* <LandingPage /> */}
      </div>
    );
  }
}
