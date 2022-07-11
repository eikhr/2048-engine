import { Game, GameData, GameState } from './types';
import { fromNumberMatrix } from './utils/numberMatrix';
import addRandomTile from './gameStateModifiers/addRandomTile';
import pipe from './utils/pipe';

const createGame = (gameData: Partial<GameData> = {}): Game => {
  const {
    initialBoard = fromNumberMatrix([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]),
    randomSeed = Math.floor(Math.random() * 1000000),
    moveLog = [],
  } = gameData;

  const initializeGameState = pipe(addRandomTile, addRandomTile);

  let gameState: GameState = initializeGameState({
    board: initialBoard,
    score: 0,
    rngNumber: randomSeed,
    totalTileCount: 0,
  });

  return {
    currentState: gameState,
    initialBoard: gameState.board,
    randomSeed,
    moveLog,
  };
};

export default createGame;
