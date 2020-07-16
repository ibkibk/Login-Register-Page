import React, { Component } from "react";
// import style from "./LoginAndReg.module.scss";
import firebase, { providers } from "../../firebase";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  state = {
    user: null,
    email: "",
    password: "",
    fireErrors: "",
    formTitle: "Login",
    loginBtn: true,
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(providers.google)
      .then((result) => {
        this.setState({ user: result.user });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  register = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register New User",
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { fireErrors, loginBtn, formTitle, email, password } = this.state;
    let errorNotification = fireErrors ? (
      <div className="Error"> {fireErrors} </div>
    ) : null;

    let submitBtn = loginBtn ? (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.login}
        value="Enter"
      />
    ) : (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.register}
        value="Register"
      />
    );

    let login_register = loginBtn ? (
      <Button
        variant="contained"
        color="primary"
        className="registerBtn"
        onClick={() => this.getAction("reg")}
      >
        Register
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        className="registerBtn"
        onClick={() => this.getAction("login")}
      >
        Login
      </Button>
    );

    return (
      <div className="form_block">
        <div id="title">{formTitle}</div>
        <div className="body">
          {errorNotification}
          <form>
            <input
              placeholder="Enter your email"
              type="text"
              value={email}
              onChange={this.handleChange}
              name="email"
            />

            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
            />

            <Button variant="contained" color="primary">
              {submitBtn}
            </Button>
            {login_register}
          </form>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.signIn}
          style={{
            marginLeft: "105px",
            marginTop: "5px",
          }}
        >
          Sign in with google
        </Button>
      </div>
    );
  }
}
