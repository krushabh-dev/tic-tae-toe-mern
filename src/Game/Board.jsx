import React, {useState} from 'react'
import Square from './Square'

function Board() {
const [game, setGame] = useState(Array(9).fill(null));
  return (
    <div className='Board'>
        <div className="board-container">
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
        <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
        <Square />
            <Square />
            <Square />
        </div>
        </div>
    </div>
  )
}

export default Board