import { fromNumberMatrix, toNumberMatrix } from '../utils/numberMatrix';
import shiftAndMerge from './shiftAndMerge';
import { Direction } from '../types';

describe('shiftAndMerge', () => {
  const board = fromNumberMatrix([
    [2, 0, 4, 0],
    [2, 0, 4, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
  ]);

  const initialState = {
    score: 4,
    board,
  };

  it('should shift and merge tiles', () => {
    const { board } = shiftAndMerge(Direction.UP)(initialState);

    expect(toNumberMatrix(board)).toEqual([
      [4, 0, 8, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  it('should update score', () => {
    const { score } = shiftAndMerge(Direction.UP)(initialState);

    expect(score).toEqual(16);
  });
});
