import React, { Component } from "react";
import firebase from "../../../firebase";
import style from "../LoggedIn/LoggedIn.module.scss";
import Button from "@material-ui/core/Button";
import ToDo from "./ToDo/ToDo";
import { v4 as uuid } from "uuid";

export default class LoggedIn extends Component {
  state = {
    toDos: [],
    toDo: { title: "", id: uuid() },
  };

  changeHandler = (e) => {
    this.setState({
      toDo: {
        title: e.target.value,
        id: uuid(),
      },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const todo = this.state.toDo;
    if (todo.title !== "") {
      const updatedTodos = [...this.state.toDos, todo];
      this.setState({
        toDos: updatedTodos,
        toDo: {
          title: "",
          id: uuid(),
        },
      });
    }
  };

  deleteHandler = (id) => {
    const filteredTodos = this.state.toDos.filter((item) => item.id !== id);
    this.setState({
      toDos: filteredTodos,
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className={style.Wrapper}>
        <h1 className={style.Header}>Welcome!</h1>
        <Button
          style={{ width: "150px", height: "35px" }}
          variant="contained"
          color="primary"
          className={style.Button}
          onClick={this.signOut}
        >
          Logout
        </Button>
        <ToDo
          delete={this.deleteHandler}
          todo={this.state.toDo}
          todos={this.state.toDos}
          submited={this.submitHandler}
          changed={this.changeHandler}
        />
      </div>
    );
  }
}
