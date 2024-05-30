import React from 'react'
import './ToDo.css'
import { useState } from 'react'

const ToDo = () => {
    let [todos,setTodods]= useState(["Sample Tasks.........."])
    let [newTodo,setNewTodo] = useState("")
    function addTask(){
        setTodods([...todos,newTodo])
        setNewTodo("")
    }
    let updateValue = (event)=>{
        setNewTodo(event.target.value)
    }
  return (
    <div className='todo'>
      <input type="text" value={newTodo} onChange={updateValue} placeholder='Add a Task'></input>
      <button onClick={addTask}>Add Task</button>
      <h3>TO DO Task</h3>
      <ul>
        {todos.map((todo)=>(
            <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
