import React from 'react';
import {useState, useEffect} from 'react';

const TodoForm = ({addtodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();  // Since form reloads everytime you submit it
        addtodo(value);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='What is the task?'
        onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm