import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";
import { MyContainer } from "../styles/MyContainer";
import { MyStack } from "../styles/MyStack";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <div>
      
      <h1>Todo</h1>
      <Link to="/"><Button>Homepage</Button></Link>


    {/* <MyContainer>
      <li className={`task-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <MyStack>
        <CompleteButton
          variant="contained"
          onClick={onComplete}
          startIcon={<CheckIcon />}
        >
          Completed
        </CompleteButton>
        <DeleteButton
          variant="contained"
          onClick={onDelete}
          startIcon={<DeleteIcon />}
        >
          Delete
        </DeleteButton>
      </MyStack>
    </MyContainer> */}
    </div>
  );
};

export default Todo;
