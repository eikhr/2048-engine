import { Board } from '../types';

const getHighestTileValue = (board: Board): number => {
  return board
    .flat()
    .reduce((max, tile) => (tile && tile.value > max ? tile.value : max), 0);
};

export default getHighestTileValue;
