import React from "react";
import "./Todos.component.css";
import Todo from "../todo"




function Todos({ todos,  setTodos }) {


  
    return (

        <div>
                    <ul >
                    {
                        todos.map((item) => <Todo item={item}  key = { item.id } todos={todos} setTodos={setTodos} />)
                    }
                    </ul> 
        </div>
    )

}

export default Todos;