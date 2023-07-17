import React from "react";
import Letter from "./Letter";

function Board() {
  const numRows = 6;
  const numLetters = 5;

  const renderRows = () => {
    const rows = [];

    for (let row = 0; row < numRows; row++) {
      const letters = [];

      for (let letter = 0; letter < numLetters; letter++) {
        const key = row * numLetters + letter;

        letters.push(<Letter key={key} letterPos={letter} attemptVal={row} />);
      }

      rows.push(
        <div className="row" key={row}>
          {letters}
        </div>,
      );
    }

    return rows;
  };

  return <div className="board">{renderRows()}</div>;
}

export default Board;
