import { useParams } from "react-router-dom";
import { MyTypography } from "../styles/MyTypography";
import { MyReturnButton } from "../styles/MyButton";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { MyReturnBox } from "../styles/MyBoxControl";
import { MyReturnLink } from "../styles/MyBottomNavigation";

const TodoPage = () => {
  const { todoId } = useParams();
  return (
    <MyReturnBox>
      <MyTypography>{todoId}</MyTypography>
      <MyReturnButton endIcon={<KeyboardReturnIcon />}>
        <MyReturnLink to="/todolist">Task List</MyReturnLink>
      </MyReturnButton>
    </MyReturnBox>
  );
};

export default TodoPage;
