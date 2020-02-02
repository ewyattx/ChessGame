export interface ChessPiece {
  team: String;
  piece: String;
}

export type ChessRow = (ChessPiece | null)[];

export interface ApplicationState {
  chess: ChessState;
}
export interface ChessState {
  board: ChessRow[];
  selectedSquare: Coordinates;
  potentialMovementState: Coordinates[];
  turn: Player;
  player1?: Player;
  player2?: Player;
}
export interface Coordinates {
  x: number;
  y: number;
}
export enum Player {
  WHITE = "white",
  BLACK = "black"
}
export enum Turn {
  ONE = "1",
  TWO = "2"
}
