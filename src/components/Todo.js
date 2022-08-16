const Todo = ({ text, todo, onComplete, onDeleter }) => {
  return (
    <li className="tasks">
      <li className={`task-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="btn-completed" onClick={onComplete}>
        Completed
      </button>
      <button className="btn-delete" onClick={onDeleter}>
        Delete
      </button>
    </li>
  );
  
};

export default Todo;
