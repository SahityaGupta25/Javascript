import './ToDo.css'
import { useState } from 'react'
import React from 'react'

const ToDo = () => {
    let [toDo,setToDo] = useState(["Today I have to read the book which I recently purchased"])
    let [newToDo,setNewToDo] = useState("")


    function addTask(){
        setToDo([...toDo,newToDo])
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
                <li>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDo
