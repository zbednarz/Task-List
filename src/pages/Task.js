import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";
import { MyContainer } from "../styles/MyContainer";
import { MyStack } from "../styles/MyStack";
import { Link } from "react-router-dom";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <div>
      <h1>Todo</h1>
      <Link to="/">Home</Link>
    </div>

    // <MyContainer>
    //   <li className={`task-item ${todo.completed ? "completed" : ""}`}>
    //     {text}
    //   </li>

    //   <MyStack>
    //     <CompleteButton
    //       variant="contained"
    //       onClick={onComplete}
    //       startIcon={<CheckIcon />}
    //     >
    //       Completed
    //     </CompleteButton>
    //     <DeleteButton
    //       variant="contained"
    //       onClick={onDelete}
    //       startIcon={<DeleteIcon />}
    //     >
    //       Delete
    //     </DeleteButton>
    //   </MyStack>
    // </MyContainer>
  );
};

export default Todo;