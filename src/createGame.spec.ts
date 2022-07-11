import createGame from './createGame';
import { Direction, MoveType } from './types';

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
});
