import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [game, setGame] = useState(Array(9).fill(null));
  return (
    <div className="Board">
      <div className="board-container">
        <div className="board-row">
          <Square value={game[0]} />
          <Square value={game[1]} />
          <Square value={game[2]} />
        </div>
        <div className="board-row">
          <Square value={game[3]} />
          <Square value={game[4]} />
          <Square value={game[5]} />
        </div>
        <div className="board-row">
          <Square value={game[6]} />
          <Square value={game[7]} />
          <Square value={game[8]} />
        </div>
      </div>
    </div>
  );
}

export default Board;
