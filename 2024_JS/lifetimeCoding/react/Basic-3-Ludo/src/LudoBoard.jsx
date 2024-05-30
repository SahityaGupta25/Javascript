import React from 'react'
import { useState } from 'react'

const LudoBoard = () => {
    let [moves,setMoves] = useState({blue:0,green:0,yellow:0,red:0})
    function blueMoves(){
        setMoves((prevMoves)=>{
            return {...prevMoves,blue: prevMoves.blue++}
        })
    }
  return (
    <div>
        <h1>Game Begins</h1>
        <p>Blue Moves = {moves.blue}</p>
        <button onClick={blueMoves}>+1</button>
        <p>Green Moves = {moves.green}</p>
        <button>+1</button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button>+1</button>
        <p>Red Moves = {moves.red}</p>
        <button>+1</button>
    </div>
  )
}

export default LudoBoard