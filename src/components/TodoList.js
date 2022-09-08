import Todo from "./Todo";


const TodoList = ({ todos, setTodos, filtered }) => {
  const onDeleter = (todo) => {
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
    <div className="list-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            onDeleter={() => onDeleter(todo)}
            onComplete={() => onComplete(todo)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
