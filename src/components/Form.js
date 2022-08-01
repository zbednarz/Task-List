import React from "react";

const Form =({input, setInput, todos, setTodos, setFilter})=>{

    const inputHandler  = (e) =>{
       console.log(e.target.value);
        setInput(e.target.value);
    }
    
    const formSubmit = (e) => {
        e.preventDefault()
        setTodos([
                ...todos, {text: input, completed: false, id: Math.random()*1000 },
                 ]);
                 setInput("");
    };

    const filterHandler =(e) =>{
        setFilter(e.target.value);
    }

    return(
     <form>
       <input 
       type="text" 
       name="name" 
       placeholder="Add Task"
       value={input} 
       required
       onChange = {inputHandler}
        />
       <button onClick={formSubmit} className="btn-add" type="submit">Add new task</button>

       <div className="filter">
            <select onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Done</option>
                <option value="uncompleted">Pending</option>
            </select>
        </div>

     </form>       
    );
};

export default Form;


