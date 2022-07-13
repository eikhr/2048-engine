import { fromNumberMatrix } from '../utils/numberMatrix';
import { GameState } from '../types';
import addRandomTile from './addRandomTile';

describe('addRandomTile', () => {
  const board = fromNumberMatrix([
    [2, 0, 4, 0],
    [2, 0, 4, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
  ]);

  const initialState: GameState = {
    status: {
      hasPossibleMoves: true,
      isWon: false,
    },
    score: 4,
    board,
  };

  it('throws an error if there is no space on the board', () => {
    const initialState = {
      status: {
        hasPossibleMoves: true,
        isWon: false,
      },
      score: 4,
      board: fromNumberMatrix([
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
      ]),
    };

    expect(() => addRandomTile(initialState)).toThrow();
  });

  it('should add one random tile', () => {
    const { board } = addRandomTile(initialState);

    let nonEqualTiles = 0;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== initialState.board[i][j]) {
          nonEqualTiles++;
        }
      }
    }

    expect(nonEqualTiles).toBe(1);
  });

  it('should be deterministic when supplied with random-seed', () => {
    let state: GameState = { ...initialState, rngNumber: 1000 };
    let newState: GameState;

    const assertAddedTile = (row: number, col: number, value: number) => {
      newState = addRandomTile(state);

      expect(state.board[row][col]).toBeNull();
      expect(newState.board[row][col]?.value).toBe(value);

      state = newState;
    };

    assertAddedTile(1, 3, 2);
    assertAddedTile(1, 1, 4);
    assertAddedTile(0, 3, 4);
    assertAddedTile(2, 3, 2);
  });
});
