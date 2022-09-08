import uuid from "react-uuid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/styles";
import MyInput from "../styles/MyInput";
import { NewTask } from "../styles/MyButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
    <ThemeProvider theme={theme}>
      <form>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "10ch" },
            "& fieldset": { border: "none" },
          }}
          noValidate
          autoComplete="off"
        >
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
        </Box>
        <NewTask
          disabled={!input}
          onClick={formSubmit}
          type="submit"
          variant="contained"
        >
          Add new task
        </NewTask>

        <Box sx={{ minWidth: 150 }}>
          
          <FormControl 
          variant="standard" 
          // sx={{}} 
          fullWidth>
            <InputLabel>Filter</InputLabel>
            <Select
              onChange={filterHandler}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="uncompleted">Pending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default Form;
