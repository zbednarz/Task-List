
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/styles";
import {CompleteButton} from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";


const Todo = ({ text, todo, onComplete, onDeleter }) => {
  return (
    <ThemeProvider theme={theme}>  

    <li className="tasks">
      <li className={`task-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      
      <Stack 
         direction="row">
        <CompleteButton
          variant="contained"
          onClick={onComplete}
          startIcon={<CheckIcon />}
        >
          Completed
        </CompleteButton>
        <DeleteButton
          variant="contained"
          onClick={onDeleter}
          startIcon={<DeleteIcon />}
        >
          Delete
        </DeleteButton>
      </Stack>
    </li>
    </ThemeProvider>
  );
};

export default Todo;
