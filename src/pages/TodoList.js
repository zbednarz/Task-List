import Todo from "./Todo";
import { MyList } from "../styles/MyList";
import { ListContainer } from "../styles/ListContainer";
import { MyTypography } from "../styles/MyTypography";
import Holder from "../Holder";
import MySelect from "../styles/MyForm";
import MenuItem from "@mui/material/MenuItem";

const TodoList = ({ todos, setTodos, filtered, setFilter }) => {
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
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
  const options = [
    { text: "All", value: "all" },
    { text: "Completed", value: "completed" },
    { text: "Pending", value: "uncompleted" },
  ];
  return (
    <div>
      <Holder>
        <MyTypography variant="h4">Todo List</MyTypography>
        <MySelect onChange={filterHandler} defaultValue={"all"}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value || ""}>
              {option.text}
            </MenuItem>
          ))}
        </MySelect>
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
