import { Direction, Game, GameData, GameState, MoveType } from './types';
import { fromNumberMatrix } from './utils/numberMatrix';
import addRandomTile from './gameStateModifiers/addRandomTile';
import pipe from './utils/pipe';
import dispatchMove from './dispatchMove';

const createGame = (gameData: Partial<GameData> = {}): Game => {
  const { randomSeed = Math.floor(Math.random() * 1000000) + 1, moveLog = [] } =
    gameData;

  const initialBoard = fromNumberMatrix([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const initializeGameState = pipe(addRandomTile, addRandomTile);

  let gameState: GameState = initializeGameState({
    board: initialBoard,
    score: 0,
    rngNumber: randomSeed,
    totalTileCount: 0,
  });

  function move(this: Game, direction: Direction): GameState {
    return dispatchMove(this, { type: MoveType.STANDARD, direction });
  }

  return {
    currentState: gameState,
    randomSeed,
    moveLog,
    move,
  };
};

export default createGame;
