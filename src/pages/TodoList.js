import Todo from "./Todo";
import { MyList } from "../styles/MyList";
import { ListContainer } from "../styles/ListContainer";
import { MyTypography } from "../styles/MyTypography";
import Holder from "../Holder";

const TodoList = ({ todos, setTodos, filtered, setFilter }) => {
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
      <Holder>
        <MyTypography variant="h4">Todo List</MyTypography>
      </Holder>

      <ListContainer>
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
      </ListContainer>
    </div>
  );
};

export default TodoList;
