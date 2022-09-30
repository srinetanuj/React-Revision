import React from 'react'
import { useState } from 'react';
import AddTodo from './AddTodo';

const Todo = () => {
   
    const [todos,setTodos] = useState([]);
    const handleAddTodo=(text)=>{
       const newTodo={
        title:text,
        status:false,
        id:Math.random(0,100) + text
       }
       setTodos([...todos,newTodo]);   
    }
  
  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo}/>
     
      <ol>
        {todos.map((ele)=>
            <li key={ele.id}>
                {ele.title} - {ele.status ? "Completed":"Not Completed"}
            </li>
        )}
      </ol>
    </div>
  )
}

export default Todo

