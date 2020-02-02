import React, { Dispatch } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Player, ApplicationState, Turn } from "../../store/types";
import Game from "./Game";
import { changeTurn } from "../../store/chessSlice";
import { func } from "prop-types";

interface StateFromProps {
  player1?: Player;
  player2?: Player;
  turn: Turn;
}

interface StateFromDipatch {
  changeTurn: typeof changeTurn;
}
type GameContainerProps = StateFromProps & StateFromDipatch;
class GameContainer extends React.Component<GameContainerProps> {
  render() {
    return (
      <Game
        player1={this.props.player1}
        player2={this.props.player2}
        turn={this.props.turn}
        changeTurn={this.props.changeTurn}
      />
    );
  }
}
function mapStateToProps(state: ApplicationState) {
  return {
    player1: state.chess.player1,
    player2: state.chess.player2,
    turn: state.chess.turn
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ changeTurn }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
