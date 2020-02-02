import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { ChessPiece, ChessState, Player, PlayerTurn, Turn } from "./types";
import { Reducer } from "react";

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    changeTurn(state, action: PayloadAction<Player>) {
      if (state.player1 === undefined) {
        state.player1 = action.payload;
        if (action.payload === Player.BLACK) {
          state.player2 = Player.WHITE;
          state.turn = Turn.TWO;
        } else {
          state.player2 = Player.BLACK;
          state.turn = Turn.ONE;
        }
      } else {
        if (state.turn === Turn.ONE) {
          state.turn = Turn.TWO;
        } else {
          state.turn = Turn.ONE;
        }
      }
    },
    selectPiece(state, action: PayloadAction<ChessPiece>) {},
    selectDestination(state, action: PayloadAction<Coordinates>) {}
  }
});

export default chessSlice.reducer;

export const {
  changeTurn,
  selectDestination,
  selectPiece
} = chessSlice.actions;
