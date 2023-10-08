import React, {useState} from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid'

uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);
    
    const addtodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);
    }

    const toggleComplete = (id) => {
        const updatedTodos = todos.map((x) => {
            if(x.id === id){
                return{...x, completed : !x.completed};
            }
            else{
                return x;
            }
        })

        setTodos(updatedTodos);
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((x) => x.id !== id);
        setTodos(updatedTodos);
    }

    const editTodo = (id) => {
        const updatedTodos = todos.map((x) => {
            if(x.id === id){
                return{...x, isEditing : !x.isEditing};
            }
            else{
                return x;
            }
        })

        setTodos(updatedTodos);
    }

    const editTask = (value,id) => {
        const updatedTodos = todos.map((x) => {
            if(x.id === id){
                return{...x, task : value, isEditing : !x.isEditing};
            }
            else{
                return x;
            }
        })

        setTodos(updatedTodos);
    }

  return (
    <div className='TodoWrapper'>
        <h1>Todo-List</h1>

        <TodoForm addtodo={addtodo} />
        {todos.map((todo) => {
            return(
                todo.isEditing ? 
           (
           <EditTodoForm editTask={editTask} task={todo} />
           ) : 
           (
            <Todo task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
            )
            )
           
                
            
        })}
        
    </div>
  )
}

export default TodoWrapper