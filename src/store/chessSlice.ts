import { createSlice, PayloadAction } from "redux-starter-kit";
import initialState from "./initialState";
import { ChessPiece, ChessState } from "./types";

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    selectPiece(state, action: PayloadAction<ChessPiece>) {},
    selectDestination(state, action: PayloadAction<Coordinates>) {}
  }
});
