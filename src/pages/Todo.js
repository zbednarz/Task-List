import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompleteButton } from "../styles/MyButton";
import { DeleteButton } from "../styles/MyButton";
import { MyContainer } from "../styles/MyContainer";
import { MyStack } from "../styles/MyStack";
import { Link } from "react-router-dom";

import { MyTypography } from "../styles/MyTypography";
import { MyLinkButton } from "../styles/MyButton";

const Todo = ({ text, todo, onComplete, onDelete }) => {
  return (
    <div>
      <MyTypography variant="h4">Todo:</MyTypography>

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
          <Link to="/">
            <MyLinkButton variant="contained">Homepage</MyLinkButton>
          </Link>
        </MyStack>
      </MyContainer>
    </div>
  );
};

export default Todo;
