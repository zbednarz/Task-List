import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Form from "./components/Form";
import TodoList from "./pages/TodoList";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="todo" element={<Todo />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
