import { Board } from '../types';

export const fromNumberMatrix = (matrix: number[][]): Board => {
  let idCounter = 0;

  return matrix.map((row) =>
    row.map((value) => (value === 0 ? null : { id: idCounter++, value }))
  );
};

export const toNumberMatrix = (board: Board): number[][] => {
  return board.map((row) => row.map((tile) => (tile ? tile.value : 0)));
};
