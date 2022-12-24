import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [game, setGame] = useState(Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = true;
  //true represent the primary user and false represnent opponent

  const checkWinner = () => {
    const winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogin) {
      const [a, b, c] = logic;
      if (game[a] !== null && game[a] === game[b] && game[b] === game[c]) {
        return game[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const arr = [...game];
    arr[index] = currPlayer ? "X" : "O";
    setGame(arr);
    setCurrPlayer(!currPlayer);
  };

  return (
    <div className="Board">
      {isWinner ? (
        <>{isWinner} Win Game</>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Board;
