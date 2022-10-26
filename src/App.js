import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Typography from "@mui/material/Typography";
import { MyAppBar } from "./styles/MyAppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/styles";
import TransitionsModal from "./components/Modal";
import { MyAvatar } from "./styles/MyAvatar";
import Holder from "./Holder";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState([]);
 
  useEffect(() => {
    
    filterHandler();// eslint-disable-next-line
  }, [todos, filter]);

  const filterHandler = () => {
    if (filter === "completed") {
      setFiltered(todos.filter((todo) => todo.completed));
    } else if (filter === "uncompleted") {
      setFiltered(todos.filter((todo) => !todo.completed));
    } else {
      setFiltered(todos);
    }
  };

  return (

    <ThemeProvider theme={theme}>
      <MyAppBar color = "secondary">
        <Toolbar>
          <TransitionsModal />
          <Typography variant="h5">Task List</Typography>
        </Toolbar>
        <Box>
          <Tooltip title="Zbigniew Bednarz">
            <MyAvatar src="photo.jpg" />
          </Tooltip>
        </Box>
      </MyAppBar> 

      <div>
        <Holder>
          <Form
            todos={todos}
            setTodos={setTodos}
            setFilter={setFilter}
          />
          <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
        </Holder>
      </div>
    </ThemeProvider>
  );
}

