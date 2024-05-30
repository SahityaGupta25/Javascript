import React from 'react'
import './ToDo.css'
import { useState } from 'react'

const ToDo = () => {
    let [todos,setTodods]= useState(["Sample Tasks.........."])
    let [newTodo,setNewTodo] = useState("")
    function addTask(){
        setTodods(...todos)
    }
  return (
    <div className='todo'>
      <input type="text" placeholder='Add a Task'></input>
      <button>Add Task</button>
      <h3>TO DO Task</h3>
      <ul>
        {todos.map((todo)=>{
            <li>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default ToDo
