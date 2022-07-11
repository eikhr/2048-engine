import { fromNumberMatrix } from './numberMatrix';
import getEmptyTileCoords from './getEmptyTileCoords';

describe('getEmptyTileCoords', () => {
  it('should return coords of all empty tiles', () => {
    const board = fromNumberMatrix([
      [2, 0, 4, 0],
      [2, 0, 4, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
    ]);

    const emptyCoords = getEmptyTileCoords(board);

    expect(emptyCoords).toContainEqual([0, 1]);
    expect(emptyCoords).toContainEqual([0, 3]);
    expect(emptyCoords).toContainEqual([1, 3]);
    expect(emptyCoords).toContainEqual([1, 3]);
    expect(emptyCoords).toContainEqual([2, 0]);
    expect(emptyCoords).toContainEqual([2, 1]);
    expect(emptyCoords).toContainEqual([2, 2]);
    expect(emptyCoords).toContainEqual([2, 3]);
    expect(emptyCoords).toContainEqual([3, 1]);
    expect(emptyCoords).toContainEqual([3, 2]);
    expect(emptyCoords).toContainEqual([3, 3]);
  });
});
