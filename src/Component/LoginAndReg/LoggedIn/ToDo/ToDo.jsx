import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      border: "0px solid white",
    },
  },
}));

function ToDo(props) {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add ToDo to Your List</h1>
      <form
        style={{ textAlign: "center" }}
        onSubmit={props.submited}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Input
          style={{ width: "300px" }}
          text="text"
          label="Enter todo"
          placeholder="Enter todo"
          inputProps={{ "aria-label": "description" }}
          onChange={props.changed}
          value={props.todo.title}
        />
        <Button
          style={{ width: "150px" }}
          onClick={props.submited}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
        {props.todos.map((todo) => {
          return (
            <p key={todo.id} style={{ textAlign: "center" }}>
              {todo.title}
              <FontAwesomeIcon
                onClick={() => props.delete(todo.id)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                icon={faTrash}
                size="1x"
              />
            </p>
          );
        })}
      </form>
    </div>
  );
}

export default ToDo;
