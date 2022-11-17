import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Form from "./components/Form";
import TodoList from "./pages/TodoList";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import theme from "./styles/styles";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler(); // eslint-disable-next-line
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="form"
              element={
                <Form todos={todos} setTodos={setTodos} setFilter={setFilter} />
              }
            />
            <Route path="todo" element={<Todo />} />
            <Route
              path="todolist"
              element={
                <TodoList
                  filtered={filtered}
                  todos={todos}
                  setTodos={setTodos}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
