import uuid from "react-uuid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyInput from "../styles/MyInput";
import { NewTask } from "../styles/MyButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MySelect from "../styles/MyForm";
import { MyBox } from "../styles/MyForm";

const Form = ({ input, setInput, todos, setTodos, setFilter }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, completed: false, id: uuid() }]);
    setInput("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form>
      <MyBox noValidate autoComplete="off">
        <div>
          <MyInput
            color="primary"
            id="outlined-size-normal"
            label={
              <Typography variant="headline" component="h2" color="secondary">
                {" "}
                Add Task{" "}
              </Typography>
            }
            value={input}
            onChange={inputHandler}
            InputProps={{ disableUnderline: true }}
          />
        </div>
      </MyBox>
      <NewTask
        disabled={!input}
        onClick={formSubmit}
        type="submit"
        variant="contained"
      >
        Add new task
      </NewTask>

      <Box>
        <FormControl variant="standard" fullWidth>
          <InputLabel>Filter</InputLabel>
          <MySelect onChange={filterHandler}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="uncompleted">Pending</MenuItem>
          </MySelect>
        </FormControl>
      </Box>
    </form>
  );
};

export default Form;
