import React from 'react'
import { useState } from 'react'

const AddTodo = ({handleAddTodo}) => {
    const [text,setText] = useState("");

    const handleChange=(e)=>{
        setText(e.target.value);
   }

   const onClick = ()=>{
      handleAddTodo(text);
      setText("")
   }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={onClick}>Add</button>
    </div>
  )
}

export default AddTodo
