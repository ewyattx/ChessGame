import { ChessPiece, ChessState } from "./types";
const whitePawn: ChessPiece = {
  team: "white",
  piece: "P"
};
const whiteKnight: ChessPiece = {
  team: "white",
  piece: "Kn"
};
const whiteRook: ChessPiece = {
  team: "white",
  piece: "R"
};
const whiteBishop: ChessPiece = {
  team: "white",
  piece: "B"
};
const whiteKing: ChessPiece = {
  team: "white",
  piece: "K"
};
const whiteQueen: ChessPiece = {
  team: "white",
  piece: "Q"
};
const blackPawn: ChessPiece = {
  team: "black",
  piece: "P"
};
const blackKnight: ChessPiece = {
  team: "black",
  piece: "Kn"
};
const blackRook: ChessPiece = {
  team: "black",
  piece: "R"
};
const blackBishop: ChessPiece = {
  team: "black",
  piece: "B"
};
const blackKing: ChessPiece = {
  team: "black",
  piece: "K"
};
const blackQueen: ChessPiece = {
  team: "black",
  piece: "Q"
};
const initialState: ChessState = {
  board: [
    [
      whiteRook,
      whiteKing,
      whiteBishop,
      whiteKing,
      whiteQueen,
      whiteBishop,
      whiteKnight,
      whiteRook
    ],
    [
      whitePawn,
      whitePawn,
      whitePawn,
      whitePawn,
      whitePawn,
      whitePawn,
      whitePawn,
      whitePawn
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      blackPawn,
      blackPawn,
      blackPawn,
      blackPawn,
      blackPawn,
      blackPawn,
      blackPawn,
      blackPawn
    ],
    [
      blackRook,
      blackKnight,
      blackBishop,
      blackKing,
      blackQueen,
      blackBishop,
      blackKnight,
      blackRook
    ]
  ]
};

export default initialState;
