import React from 'react';
import {useState} from 'react';

const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();  // Since form reloads everytime you submit it
        editTask(value,task.id);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='Update Task...'
        onChange={(e) => setValue(e.target.value)} value={value}/>
        <button className='todo-btn' type='submit'>Update Task</button>
    </form>
  )
}

export default EditTodoForm