import React, { Component } from "react";
import firebase from "../../../firebase";
import style from "../LoggedIn/LoggedIn.module.scss";
import Button from "@material-ui/core/Button";
import ToDo from "./ToDo/ToDo";
import { v4 as uuid } from "uuid";
// import db from "../../../../src/firebase";

export default class LoggedIn extends Component {
  state = {
    toDos: [],
    toDo: { title: "", id: uuid() },
    editToDo: false,
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
        editToDo: false,
      });
    }
  };

  editHandler = (id) => {
    const filteredTodos = this.state.toDos.filter((item) => item.id !== id);
    if (this.state.toDo.title === "") {
      const editItem = this.state.toDos.find((item) => item.id === id);
      this.setState({
        toDos: filteredTodos,
        toDo: editItem,
        editToDo: true,
        id: id,
      });
    }
  };

  clearListHandler = () => {
    this.setState({
      toDos: [],
      toDo: { title: "", id: "uuid()" },
      editToDo: false,
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
          editTrue={this.state.editToDo}
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

// import React from "react";
// import firebase from "../../../firebase";
// import style from "../LoggedIn/LoggedIn.module.scss";
// import Button from "@material-ui/core/Button";

// const LoggedIn = () => {
//   const signOut = () => {
//     firebase.auth().signOut();
//   };

//   return (
//     <div className={style.Wrapper}>
//       <h1 className={style.Header}>Welcome!</h1>
//       <Button
//         style={{ width: "150px", height: "35px" }}
//         variant="contained"
//         color="primary"
//         className={style.Button}
//         onClick={signOut}
//       >
//         Logout
//       </Button>
//     </div>
//   );
// };

// export default LoggedIn;
