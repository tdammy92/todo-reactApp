function Todo({ item, todos, setTodos }) {



    async function deleteHandler() {

        await fetch(`http://localhost:5000/todos/${item.id}`, { method: 'DELETE' })

        setTodos(todos.filter((el) => el.id !== item.id))
    }



    async function update() {

        const Todo2updateId = item.id;
        const upDateTodo = {...item, completed: item.completed }

        const res = await fetch(`http://localhost:5000/todos/${Todo2updateId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(upDateTodo)
        })

        const data = await res.json();

        return data



    }


    async function ToggleDone() {

        if (item.completed) {
           
            item.completed = false;
            const todoRes = await update();
            setTodos(todos.map((item) => todos.id === todoRes.id ? {...item, completed: todoRes.completed } : item))


        } else {
            item.completed = true;
             const todoRes = await update();
            setTodos(todos.map((item) => todos.id === todoRes.id ? {...item, completed: todoRes.completed } : item))
        }



    }

    return ( <>
                    <li id = "todoLi" >
                        <p className = { item.completed ? 'mystyle' : '' } > { item.text }  </p>  
                        <i onClick = { ToggleDone } className = "fas fa-check-circle" > </i>  
                        <i onClick = { deleteHandler } className = "fas fa-trash" > </i> 
                    </li>
            </>
    )
}

export default Todo;