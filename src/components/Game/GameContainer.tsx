import React from "react";

import { connect } from "react-redux";

import { Player, ApplicationState } from "../../store/types";
import Game from "./Game";
interface stateFromProps {
  player1?: Player;
  player2?: Player;
}
type GameContainerProps = stateFromProps;
class GameContainer extends React.Component<GameContainerProps> {
  render() {
    return <Game player1={this.props.player1} player2={this.props.player2} />;
  }
}
function mapStateToProps(state: ApplicationState, ownProps: stateFromProps) {
  return {
    player1: state.chess.player1,
    player2: state.chess.player2
  };
}
export default connect(mapStateToProps)(GameContainer);
