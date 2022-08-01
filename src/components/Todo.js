import React from "react";

const Todo =({text, todo, setTodos, todos})=>{

    const onDeleter = ()=>{
        setTodos(todos.filter((el) =>el.id !==todo.id));
    }

    const onComplete = () =>{
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{
                        ...item, completed: !item.completed
                    } 
                }
                return item;
            })
        )
    }

    return(
     <div className="tasks">
        <li className={`task-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button className="btn-completed" onClick={onComplete}>Completed</button>
        <button className="btn-delete" onClick={onDeleter}>Delete</button>
     </div>
       
    );
}

export default Todo;