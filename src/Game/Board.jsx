import React from 'react'
import Square from './Square'

function Board() {
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