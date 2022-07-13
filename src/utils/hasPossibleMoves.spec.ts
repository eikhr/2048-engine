import { fromNumberMatrix } from './numberMatrix';
import hasPossibleMoves from './hasPossibleMoves';

describe('hasPossibleMoves', () => {
  it('should return true if the board is mostly empty', () => {
    const board = fromNumberMatrix([
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(hasPossibleMoves(board)).toBe(true);
  });

  it('should return true if there is a blank space', () => {
    const board = fromNumberMatrix([
      [2, 8, 0, 4],
      [4, 16, 32, 8],
      [128, 2, 16, 2],
      [64, 4, 8, 4],
    ]);

    expect(hasPossibleMoves(board)).toBe(true);
  });

  it('should return true if two tiles can be merged', () => {
    const board = fromNumberMatrix([
      [2, 8, 4, 4],
      [4, 16, 32, 8],
      [128, 2, 16, 2],
      [64, 4, 8, 4],
    ]);

    expect(hasPossibleMoves(board)).toBe(true);
  });

  it('should return false if there are no possible moves', () => {
    const board = fromNumberMatrix([
      [2, 8, 2, 4],
      [4, 16, 32, 8],
      [128, 2, 16, 2],
      [64, 4, 8, 4],
    ]);

    expect(hasPossibleMoves(board)).toBe(false);
  });
});
