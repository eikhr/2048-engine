import { GameStateModifier, Tile } from '../types';
import getEmptyTileCoords from '../utils/getEmptyTileCoords';
import getRng from '../utils/getRng';
import createRandomTile from '../utils/createRandomTile';
import deepCopyGameState from '../utils/deepCopyGameState';

const addRandomTile: GameStateModifier = (gameState) => {
  const newState = deepCopyGameState(gameState);

  const emptyTileCoords = getEmptyTileCoords(newState.board);

  if (!emptyTileCoords.length) throw new Error('No empty tiles');

  const rng = getRng(newState);
  const randomCoordinate =
    emptyTileCoords[rng.intBetween(0, emptyTileCoords.length - 1)];

  newState.board[randomCoordinate[0]][randomCoordinate[1]] =
    createRandomTile(newState);

  return newState;
};

export default addRandomTile;
