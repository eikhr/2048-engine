import { fromNumberMatrix } from './numberMatrix';
import compareBoards from './compareBoards';

describe('compareBoards', () => {
  it('should return true if boards are the same', () => {
    const board1 = fromNumberMatrix([
      [2, 4],
      [0, 2],
    ]);
    const board2 = fromNumberMatrix([
      [2, 4],
      [0, 2],
    ]);

    expect(compareBoards(board1, board2)).toBe(true);
  });

  it('should return false if boards are different', () => {
    const board1 = fromNumberMatrix([
      [2, 4],
      [0, 0],
    ]);
    const board2 = fromNumberMatrix([
      [2, 4],
      [0, 2],
    ]);

    expect(compareBoards(board1, board2)).toBe(false);
  });

  it('should return false if a tile has different value', () => {
    const board1 = fromNumberMatrix([
      [2, 4],
      [0, 4],
    ]);
    const board2 = fromNumberMatrix([
      [2, 4],
      [0, 2],
    ]);

    expect(compareBoards(board1, board2)).toBe(false);
  });

  it('should return false if a tile has different id', () => {
    const board1 = [
      [{ value: 2, id: '1' }, null],
      [null, null],
    ];
    const board2 = [
      [{ value: 2, id: '2' }, null],
      [null, null],
    ];

    expect(compareBoards(board1, board2)).toBe(false);
  });
});
