import React, { Component } from "react";
import "./App.css";
import Main from "../Component/Main/Main";
// import ToDos from "../Component/LoginAndReg/LoggedIn/ToDos/ToDos";
// import LandingPage from "../Component/LandingPage/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Main />
        {/* <LandingPage /> */}
        {/* <ToDos /> */}
      </div>
    );
  }
}
