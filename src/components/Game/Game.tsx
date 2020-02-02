import "./Game.scss";
import React from "react";
import { ChessRow, Player } from "../../store/types";
interface GameProps {
  //   board: ChessRow[];
  //   turn: Player;
  player1?: Player;
  player2?: Player;
}
function Game(props: GameProps) {
  return (
    <React.Fragment>
      <div>Player1</div>
      <h1 className="h1 mb-4 w-100 text-center text-Primary">Chess Game</h1>
      {props.player1 === undefined && (
        <React.Fragment>
          <label>Player 1 Choose Your Colour</label>
          <button type="button" className="btn btn-dark btn-block">
            Black
          </button>
          <button type="button" className="btn btn-light btn-block">
            White
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Game;
