import { fromNumberMatrix } from '../utils/numberMatrix';
import updatePossibleMoves from './updatePossibleMoves';

describe('shiftAndMerge', () => {
  it('should update status.possibleMoves to false if there are no possible moves', () => {
    const board = fromNumberMatrix([
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 128],
    ]);

    const initialState = {
      status: {
        hasPossibleMoves: true,
        isWon: false,
      },
      score: 4,
      board,
    };

    const newState = updatePossibleMoves(initialState);

    expect(newState.status.hasPossibleMoves).toBe(false);
  });

  it('should update status.possibleMoves to true if there are possible moves', () => {
    const board = fromNumberMatrix([
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 0, 32, 64],
      [16, 32, 64, 0],
    ]);

    const initialState = {
      status: {
        hasPossibleMoves: false,
        isWon: false,
      },
      score: 4,
      board,
    };

    const newState = updatePossibleMoves(initialState);

    expect(newState.status.hasPossibleMoves).toBe(true);
  });
});
