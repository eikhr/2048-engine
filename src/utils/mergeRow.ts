// returns merged row and the earned score
import { Tile, TileRow } from '../types';

const mergeRow = (row: TileRow): [TileRow, number] => {
  const newTiles: Tile[] = [];
  const nulls: null[] = [];
  let score = 0;

  let mergeableTileIndex = null;
  for (const tile of row) {
    if (tile !== null) {
      if (
        mergeableTileIndex !== null &&
        newTiles[mergeableTileIndex].value === tile.value
      ) {
        newTiles[mergeableTileIndex] = {
          id: newTiles[mergeableTileIndex].id,
          value: tile.value * 2,
          mergedId: tile.id,
        };
        nulls.push(null);
        score += tile.value * 2;
      } else {
        mergeableTileIndex = newTiles.push(tile) - 1;
      }
    } else {
      nulls.push(null);
    }
  }

  return [[...newTiles, ...nulls], score];
};

export default mergeRow;
