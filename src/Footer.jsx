import React from 'react'

function Footer({todos}) {
        let todoDone = 0;
    function DoneTodos() {
       
        
        todos.forEach(todo => {
            if(todo.completed){
                todoDone ++;
            }
        })
    }
  
    DoneTodos()

  

  return ( <footer className="footer">

                <p>you have done {todoDone} out of {todos.length}  todo(s)</p>
                <h5> Damilola's Todo App &copy; {new Date().getFullYear()}</h5>

            </footer>
    )
}

export default Footer;