import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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
  const { submited, changed, todos, todo, clear, editTrue } = props;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add ToDo to Your List</h1>
      <form
        style={{ textAlign: "center" }}
        onSubmit={submited}
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
          onChange={changed}
          value={todo.title}
        />

        <Button
          style={{ width: "150px" }}
          onClick={submited}
          variant="contained"
          color={editTrue ? "secondary" : "primary"}
        >
          {editTrue ? "edit item" : "add item"}
        </Button>

        <Button
          onClick={clear}
          style={{ width: "150px" }}
          variant="contained"
          color="primary"
        >
          Clear the list
        </Button>

        {todos.map((todo) => {
          return (
            <p
              key={todo.id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #4051b5",
                height: "30px",
              }}
            >
              {todo.title}

              <FontAwesomeIcon
                onClick={() => props.delete(todo.id)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "7px",
                }}
                icon={faTrash}
                size="1x"
              />

              <FontAwesomeIcon
                onClick={() => props.edit(todo.id)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                icon={faEdit}
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
