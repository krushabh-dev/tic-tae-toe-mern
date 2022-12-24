import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [game, setGame] = useState(Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = (true);
  //true represent the primary user and false represnent opponent

  const handleClick = (index) =>{
    const arr = [...game];
    arr[index] = currPlayer?"X":"O";
    setGame(arr);
  }

  return (
    <div className="Board">
      <div className="board-container">
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={game[0]} />
          <Square onClick={() => handleClick(1)} value={game[1]} />
          <Square onClick={() => handleClick(2)} value={game[2]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(3)} value={game[3]} />
          <Square onClick={() => handleClick(4)} value={game[4]} />
          <Square onClick={() => handleClick(5)} value={game[5]} />
        </div>
        <div className="board-row">
          <Square onClick={() => handleClick(6)} value={game[6]} />
          <Square onClick={() => handleClick(7)} value={game[7]} />
          <Square onClick={() => handleClick(8)} value={game[8]} />
        </div>
      </div>
    </div>
  );
}

export default Board;
