import { fromNumberMatrix, toNumberMatrix } from './numberMatrix';
import { Board, Tile } from '../types';

describe('fromNumberMatrix', () => {
  const numberMatrix = [
    [2, 0, 4, 0],
    [2, 0, 4, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
  ];

  it('should return tiles with correct values', () => {
    const board = fromNumberMatrix(numberMatrix);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const tile = board[i][j];
        if (numberMatrix[i][j] !== 0) {
          expect(tile).not.toBeNull();
          expect((tile as Tile).value).toBe(numberMatrix[i][j]);
        } else {
          expect(tile).toBeNull();
          expect(numberMatrix[i][j]).toBe(0);
        }
      }
    }
  });

  it('should give each tile a unique id', () => {
    const ids = [];

    const board = fromNumberMatrix(numberMatrix);

    for (const row of board) {
      for (const tile of row) {
        if (tile) {
          expect(ids).not.toContain(tile.id);
          ids.push(tile.id);
        }
      }
    }
  });
});

describe('toNumberMatrix', () => {
  const board: Board = fromNumberMatrix([
    [2, 0, 4, 0],
    [2, 0, 4, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
  ]);

  it('should return a number matrix with correct values', () => {
    expect(toNumberMatrix(board)).toEqual([
      [2, 0, 4, 0],
      [2, 0, 4, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
    ]);
  });
});
