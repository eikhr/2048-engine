export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export interface Tile {
  readonly value: number;
  readonly id: string | number;
}

export type TileRow = readonly (Tile | null)[];
export type Board = readonly TileRow[];

export interface GameState {
  board: Board;
  score: number;
}

export interface GameData {
  currentState: GameState;
  initialBoard: Board;
  moveLog: Direction[];
}
