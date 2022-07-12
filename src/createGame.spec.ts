import createGame from './createGame';
import { Direction, GameData, MoveType } from './types';
import { toNumberMatrix } from './utils/numberMatrix';

describe('createGame', () => {
  it('initializes game with expected values', () => {
    const game = createGame();

    expect(game.moveLog).toEqual([]);
    expect(game.randomSeed).not.toBeUndefined();
    expect(
      game.currentState.board
        .flat()
        .reduce((num, tile) => (tile ? num + 1 : num), 0)
    ).toBe(2);
    expect(game.currentState.score).toBe(0);
    expect(game.currentState.totalTileCount).toBe(2);
  });

  it('move function executes move', () => {
    const game = createGame({ randomSeed: 1 });

    game.move(Direction.UP);

    expect(game.moveLog).toEqual([
      { type: MoveType.STANDARD, direction: Direction.UP },
    ]);
  });

  it('creating a game with supplied game data (incl. move log) results in correct state', () => {
    const game = createGame(testGameData);

    expect(game.currentState.score).toEqual(1660);

    expect(game.currentState.totalTileCount).toEqual(92);

    expect(toNumberMatrix(game.currentState.board)).toEqual(
      testGameNumberMatrix
    );

    expect(game.randomSeed).toEqual(testGameData.randomSeed);
    expect(game.moveLog).toEqual(testGameData.moveLog);
  });
});

export const testGameNumberMatrix = [
  [4, 0, 4, 0],
  [4, 0, 0, 0],
  [16, 256, 0, 0],
  [4, 16, 4, 0],
];

const testGameData: GameData = {
  randomSeed: 537805,
  moveLog: [
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.UP,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.RIGHT,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.DOWN,
    },
    {
      type: MoveType.STANDARD,
      direction: Direction.LEFT,
    },
  ],
};
