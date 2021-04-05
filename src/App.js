import React, {useState , useEffect} from "react";
import './App.css';
import Form from "./Component/FormCompnent/Form.component";
import Todo from "./Component/TodoCompnent/Todos.component";
import Footer from "./Footer"

function App() {

const [todoInput, setTodoinput] = useState('');
const [todos, setTodos] = useState([]);


useEffect(()=>{

  const getTodo = async ()=>{
    const todoss = await getData()
    setTodos(todoss)
  }

  getTodo()

},[]);



async function getData() {

  const res = await fetch('http://localhost:5000/todos');
  const data = await  res.json();

  return data
  
}

// async function update(){



// }





  return (
    <div className="App">
          <header className="App-header">
          <h1>Todo-App</h1>
          </header>

          <Form  
            todoInput={todoInput}
            setTodoinput={setTodoinput}
           
            todos={todos}
            setTodos={setTodos}
          />


          <Todo 
           
            todos={todos}
           
            setTodos={setTodos}

          /> 

          <Footer  todos={todos}/>

    </div>
  );
}

export default App;
