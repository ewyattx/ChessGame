import "./Game.scss";
import React from "react";
import { ChessRow, Player, Turn } from "../../store/types";
import Board from "../Board/Board";
interface GameProps {
  player1?: Player;
  player2?: Player;
  turn: Turn;
  changeTurn: (player: Player) => void;
}
function Game(props: GameProps) {
  return (
    <React.Fragment>
      <div>Player {props.turn}</div>
      <h1 className="h1 mb-4 w-100 text-center text-Primary">Chess Game</h1>
      {props.player1 === undefined ? (
        <React.Fragment>
          <label>Choose Your Colour</label>
          <input
            type="button"
            className="btn btn-dark btn-block"
            value={"Black"}
            onClick={() => props.changeTurn(Player.BLACK)}
          />
          <input
            type="button"
            className="btn btn-light btn-block"
            value={"White"}
            onClick={() => props.changeTurn(Player.WHITE)}
          />
        </React.Fragment>
      ) : (
        <Board />
      )}
    </React.Fragment>
  );
}

export default Game;
