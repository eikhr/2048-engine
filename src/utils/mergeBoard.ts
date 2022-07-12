import { Board, Direction, Tile, TileRow } from '../types';
import mergeRow from './mergeRow';

export const normalizeBoard = (board: Board, direction: Direction): Board => {
  if (direction === Direction.LEFT) {
    return board;
  }

  const numRows = board.length;
  const numCols = board[0].length;

  const normalizedBoard: (Tile | null)[][] = [...Array(numRows)].map(() =>
    Array(numCols).fill(null)
  );

  const boardTileMapper: (tile: Tile, row: number, col: number) => void =
    direction === Direction.UP
      ? (tile, row, col) => (normalizedBoard[numCols - 1 - col][row] = tile)
      : direction === Direction.DOWN
      ? (tile, row, col) => (normalizedBoard[col][numRows - 1 - row] = tile)
      : (tile, row, col) => (normalizedBoard[row][numCols - 1 - col] = tile);

  for (const [r, row] of board.entries()) {
    for (const [c, tile] of row.entries()) {
      tile && boardTileMapper(tile, r, c);
    }
  }

  return normalizedBoard;
};

export const reverseNormalizeBoard = (
  board: Board,
  direction: Direction
): Board => {
  switch (direction) {
    case Direction.UP:
      return normalizeBoard(board, Direction.DOWN);
    case Direction.DOWN:
      return normalizeBoard(board, Direction.UP);
    default:
      return normalizeBoard(board, direction);
  }
};

// returns merged board and the earned score
const mergeBoard = (board: Board, direction: Direction): [Board, number] => {
  const normalizedBoard = normalizeBoard(board, direction);

  const newBoard: TileRow[] = [];
  let score = 0;

  for (const row of normalizedBoard) {
    const [newRow, newScore] = mergeRow(row);
    newBoard.push(newRow);
    score += newScore;
  }

  return [reverseNormalizeBoard(newBoard, direction), score];
};

export default mergeBoard;
