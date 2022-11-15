import Todo from "./Todo";
import { MyList } from "../styles/MyList";
import { ListContainer } from "../styles/ListContainer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const TodoList = ({ todos, setTodos, filtered }) => {
  const onDelete = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const onComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/">
        <Button>Homepage</Button>
      </Link>

      {/* <ListContainer>
      <MyList>
        {filtered.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            onDelete={() => onDelete(todo)}
            onComplete={() => onComplete(todo)}
          />
        ))}
      </MyList>
    </ListContainer> */}
    </div>
  );
};

export default TodoList;
