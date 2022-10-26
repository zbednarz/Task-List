import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";
import Stack from "@mui/material/Stack";
import { MyContainer } from "../styles/MyContainer";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <MyContainer>
      <li className={`task-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <Stack  direction={{ xs: "column", sm: "column", md: "row"}}>
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
      </Stack>
    </MyContainer>
  );
};

export default Todo;
