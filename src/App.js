import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Task";
import TodoList from "./pages/Tasks";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task" element={<Todo/>}/>
        <Route
          path="tasklist"
          element={<TodoList/>}
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
