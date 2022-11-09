import { useState, useEffect } from "react";
import "../App.css";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/styles";
import Holder from "../Holder";
import Layout from "../layout/Layout";



export default function Home() {
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
      <Layout/>
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