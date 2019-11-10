export interface ChessPiece {
  team: String;
  piece: String;
}

type ChessRow = (ChessPiece | null)[];

export interface ChessState {
  board: ChessRow[];
}
export interface Coordinates {
  x: number;
  y: number;
}
