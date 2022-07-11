import { Board } from '../types';

const getEmptyTileCoords = (board: Board): [number, number][] => {
  const numRows = board.length;
  const numCols = board[0].length;

  const emptyTileCoords: [number, number][] = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (board[row][col] === null) {
        emptyTileCoords.push([row, col]);
      }
    }
  }

  return emptyTileCoords;
};

export default getEmptyTileCoords;
