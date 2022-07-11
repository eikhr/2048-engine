import { RandomSeed } from 'random-seed';

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
  readonly board: Board;
  readonly score: number;
  // current random-seed (incremented for each rng-creation)
  readonly rngNumber?: number;
  // total number of tiles generated in the game
  readonly totalTileCount?: number;
}

type DeepWritable<T> = { -readonly [P in keyof T]: DeepWritable<T[P]> };

export type MutableGameState = DeepWritable<GameState>;

export type GameStateModifier = (state: GameState) => GameState;

export enum MoveType {
  STANDARD,
  BONUS,
}

export interface StandardMove {
  readonly type: MoveType.STANDARD;
  readonly direction: Direction;
}

export interface BonusMove {
  readonly type: MoveType.BONUS;
}

export type Move = StandardMove | BonusMove;

export interface GameData {
  readonly randomSeed: number;
  readonly moveLog: Move[];
}

export interface Game extends GameData {
  currentState: GameState;
  move: (direction: Direction) => GameState;
}
