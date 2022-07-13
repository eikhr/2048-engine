import { Direction, Game, GameData, GameState, MoveType } from './types';
import { fromNumberMatrix } from './utils/numberMatrix';
import addRandomTile from './gameStateModifiers/addRandomTile';
import pipe from './utils/pipe';
import dispatchMove from './dispatchMove';

const createGame = (gameData: Partial<GameData> = {}): Game => {
  const {
    randomSeed = Math.floor(Math.random() * 1000000) + 1,
    moveLog = [],
    boardMeta = { rows: 4, cols: 4 },
  } = gameData;

  const initialBoard = Array(boardMeta.rows).fill(
    Array(boardMeta.cols).fill(null)
  );

  const initializeGameState = pipe(addRandomTile, addRandomTile);

  const gameState: GameState = initializeGameState({
    board: initialBoard,
    score: 0,
    rngNumber: randomSeed,
    totalTileCount: 0,
  });

  function move(this: Game, direction: Direction): GameState {
    return dispatchMove(this, { type: MoveType.STANDARD, direction });
  }

  const game: Game = {
    currentState: gameState,
    boardMeta,
    randomSeed,
    moveLog: [],
    move,
  };

  for (const move of moveLog) {
    dispatchMove(game, move);
  }

  return game;
};

export default createGame;
