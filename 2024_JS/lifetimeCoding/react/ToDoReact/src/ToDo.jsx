import './ToDo.css'
import { useState } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    let [toDo,setToDo] = useState([{task:"Today I have to read the book which I recently purchased",id:uuidv4()}])
    let [newToDo,setNewToDo] = useState("")


    function addTask(){
        setToDo([...toDo,{task:newToDo,id:uuidv4()}])
        setNewToDo("")
    }

    let updateValue = (event)=>{
            setNewToDo(event.target.value);
    }

  return (
    <div className='ToDo'>
       <input onChange={updateValue} value={newToDo} type="text" placeholder='Write your Task here' />
        <button onClick={addTask}>Click Me!</button>
        <ul>
            {toDo.map((todo)=>(
                <li key={toDo.id}>{todo.task}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDo
