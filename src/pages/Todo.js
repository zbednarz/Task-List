import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";
import { MyContainer } from "../styles/MyContainer";
import { MyStack } from "../styles/MyStack";
import { MyTypography } from "../styles/MyTypography";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
import { MyLinkButton } from "../styles/MyButton";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <div>
      <section>
        <MyTypography variant="h4">Todo:</MyTypography>
      </section>

      <MyContainer>
        <li className={`task-item ${todo?.completed ? "completed" : ""}`}>
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
          <MyLinkButton variant="contained">
            <Link to={`/todolist/${todo.text}`}>Task details</Link>
          </MyLinkButton>
        </MyStack>
      </MyContainer>
    </div>
  );
};

export default Todo;
