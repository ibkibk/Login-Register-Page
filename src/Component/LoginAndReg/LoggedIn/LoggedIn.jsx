import React, { Component } from "react";
import firebase from "../../../firebase";
import { firestore } from "../../../firebase";

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
    // firestore
    //   .collection("users")
    //   .doc(this.props.user.toDo.title)
    //   .set(this.state.toDo)
    //   .then(() => {
    //     console.log("it worked");
    //   });
    // let msg = firebase.database().ref("messages").orderByKey().limitToLast(100);
    // firebase.database().ref("messages").push("this.state.toDo");
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

  editHandler = (id) => {
    const filteredTodos = this.state.toDos.filter((item) => item.id !== id);
    const editItem = this.state.toDos.find((item) => item.id == id);
    this.setState({
      toDos: filteredTodos,
      toDo: editItem,
      id: id,
    });
  };

  clearListHandler = () => {
    this.setState({
      toDos: [],
    });
  };

  deleteHandler = (id) => {
    const filteredTodos = this.state.toDos.filter((todo) => todo.id !== id);
    this.setState({
      toDos: filteredTodos,
    });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    const { toDo, toDos } = this.state;

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
          edit={this.editHandler}
          delete={this.deleteHandler}
          todo={toDo}
          todos={toDos}
          submited={this.submitHandler}
          changed={this.changeHandler}
          clear={this.clearListHandler}
        />
      </div>
    );
  }
}
