import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <div className="tasks">
      <li className={`task-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <Stack direction="row">
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
    </div>
  );
};

export default Todo;
