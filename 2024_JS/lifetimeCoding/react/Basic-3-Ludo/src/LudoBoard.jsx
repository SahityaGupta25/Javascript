import React from 'react'
import { useState } from 'react'

const LudoBoard = () => {
    let [moves,setMoves] = useState({blue:0,green:0,yellow:0,red:0})
    function blueMoves(){
        setMoves((prevMoves)=>{
            return {...prevMoves,blue: prevMoves.blue++}
        })
    }
    function greenMoves(){
        setMoves((prevMoves)=>{
            return {...prevMoves,green: prevMoves.green++}
        })
    }
    function yellowMoves(){
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow: prevMoves.yellow++}
        })
    }
    function redMoves(){
        setMoves((prevMoves)=>{
            return {...prevMoves,red: prevMoves.red++}
        })
    }
  return (
    <div>
        <h1>Game Begins</h1>
        <p>Blue Moves = {moves.blue}</p>
        <button onClick={blueMoves}>+1</button>
        <p>Green Moves = {moves.green}</p>
        <button onClick={greenMoves}>+1</button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button onClick={yellowMoves}>+1</button>
        <p>Red Moves = {moves.red}</p>
        <button onClick={redMoves}>+1</button>
    </div>
  )
}

export default LudoBoard