import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {


  const [input, setInput] = useState('');
  const[todos, setTodos] = useState([]);
  const[filter, setFilter] = useState("all");
  const[filtered, setFiltered] = useState([]);

  useEffect(()=>{
   filterHandler();
  }, [todos, filter]);

  const filterHandler = ()=>{
    switch(filter){
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed=== true));
        break;
        case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed=== false));
        break;
        default:
        setFiltered(todos);
        break;    
    }
  };

  return (
    <div>
     <header className='header'>
        <h1>Task List</h1>
    </header>

   <Form
   input= {input}
   setInput={setInput}
   todos={todos}
   setTodos={setTodos}
   setFilter={setFilter}
   
   />

  <TodoList 
  todos={todos}
  setTodos={setTodos}
  filtered={filtered}
  />

</div>
  );
};

export default App;
