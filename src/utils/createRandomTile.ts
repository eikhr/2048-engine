import { MutableGameState, Tile } from '../types';
import getRng from './getRng';

const createRandomTile = (gameState: MutableGameState): Tile => {
  if (!gameState.totalTileCount) {
    gameState.totalTileCount = 0;
  }

  const rng = getRng(gameState);

  return {
    value: rng.intBetween(1, 2) * 2,
    id: gameState.totalTileCount++,
  };
};

export default createRandomTile;
