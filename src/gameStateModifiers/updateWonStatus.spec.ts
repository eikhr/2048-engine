import { fromNumberMatrix } from '../utils/numberMatrix';
import updateWonStatus from './updateWonStatus';

describe('shiftAndMerge', () => {
  it('should update status.isWon to true if there is a 2048 tile', () => {
    const board = fromNumberMatrix([
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 2048],
    ]);

    const initialState = {
      status: {
        hasPossibleMoves: true,
        isWon: false,
      },
      score: 4,
      board,
    };

    const newState = updateWonStatus(initialState);

    expect(newState.status.isWon).toBe(true);
  });

  it('should update status.isWon to true if there is a 4096 tile', () => {
    const board = fromNumberMatrix([
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 4096, 32, 64],
      [16, 32, 64, 0],
    ]);

    const initialState = {
      status: {
        hasPossibleMoves: true,
        isWon: false,
      },
      score: 4,
      board,
    };

    const newState = updateWonStatus(initialState);

    expect(newState.status.isWon).toBe(true);
  });

  it('should update status.isWon to false if all tiles are smaller than 2048', () => {
    const board = fromNumberMatrix([
      [2, 4, 8, 16],
      [4, 8, 16, 32],
      [8, 16, 32, 64],
      [16, 32, 64, 0],
    ]);

    const initialState = {
      status: {
        hasPossibleMoves: true,
        isWon: true,
      },
      score: 4,
      board,
    };

    const newState = updateWonStatus(initialState);

    expect(newState.status.isWon).toBe(false);
  });
});
