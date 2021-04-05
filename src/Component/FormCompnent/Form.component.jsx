import React from "react";
import "./Form.component.css";




function Form({ todoInput, setTodoinput, todos, setTodos}) {

    function HandleInput(e){
           const typedTodo = e.target.value;
            setTodoinput(typedTodo)
    };

    async function AddTodo(){

     
        if(todoInput === ''){
            alert('Pls enter a todo');
    
        }else{

            const newTodo = { text : todoInput , completed: false};
            
           
            const res = await fetch('http://localhost:5000/todos' ,
                    {
                        method: 'POST',
                        headers: { 'Content-type' : 'application/json'},
                        body: JSON.stringify(newTodo)
                    }
            )

            const data = await res.json();
           
            setTodos([...todos, data])
            setTodoinput("")
        }
  
    };
    
    return (
         <>
                <
                input type = "text"
                id = "todoInput"
                placeholder = "Enter Todo" 
                value={todoInput}
                onChange={HandleInput}
                    
                />

                <button onClick={AddTodo} id = "addBtn" > <i className = "fas fa-plus-circle" > </i></button>
        </>
    )

}

export default Form;