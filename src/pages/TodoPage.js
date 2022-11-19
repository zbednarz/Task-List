import { Link, useParams } from "react-router-dom";

const TodoPage = () => {
  const { todoId } = useParams();
  return (
    <section>
      <h1>{todoId}</h1>
      <Link to="/todolist">Task List</Link>
    </section>
  );
};

export default TodoPage;
