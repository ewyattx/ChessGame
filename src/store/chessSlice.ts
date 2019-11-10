import { createSlice, PayloadAction, combineReducers } from "redux-starter-kit";
import initialState from "./initialState";
import { ChessPiece, ChessState } from "./types";
import { Reducer } from "react";

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    selectPiece(state, action: PayloadAction<ChessPiece>) {},
    selectDestination(state, action: PayloadAction<Coordinates>) {}
  }
});

export default chessSlice.reducer;

export const { selectDestination, selectPiece } = chessSlice.actions;
