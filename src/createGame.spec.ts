import createGame from './createGame';

describe('createGame', () => {
  it('initializes game with expected values', () => {
    const game = createGame();

    expect(game.moveLog).toEqual([]);
    expect(game.randomSeed).not.toBeUndefined();
    expect(
      game.initialBoard.flat().reduce((num, tile) => (tile ? num + 1 : num), 0)
    ).toBe(2);
    expect(game.currentState.board).toEqual(game.initialBoard);
    expect(game.currentState.score).toBe(0);
    expect(game.currentState.totalTileCount).toBe(2);
  });
});
