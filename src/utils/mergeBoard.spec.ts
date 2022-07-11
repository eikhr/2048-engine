import mergeBoard, {
  normalizeBoard,
  reverseNormalizeBoard,
} from './mergeBoard';
import { Direction } from '../types';

describe('normalizeBoard', () => {
  const tile1 = { id: '1', value: 2 };
  const tile2 = { id: '2', value: 2 };
  const tile3 = { id: '3', value: 16 };
  const tile4 = { id: '4', value: 16 };

  const testBoard = [
    [tile1, tile2, null, null],
    [null, null, null, null],
    [null, tile3, null, null],
    [null, null, null, tile4],
  ];

  it('should not change the board if direction is left', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.LEFT);

    expect(normalizedBoard).toEqual(testBoard);
  });

  it('should rotate the board to the right if direction is down', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.DOWN);

    expect(normalizedBoard).toEqual([
      [null, null, null, tile1],
      [null, tile3, null, tile2],
      [null, null, null, null],
      [tile4, null, null, null],
    ]);
  });

  it('should rotate the board to the left if direction is up', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.UP);

    expect(normalizedBoard).toEqual([
      [null, null, null, tile4],
      [null, null, null, null],
      [tile2, null, tile3, null],
      [tile1, null, null, null],
    ]);
  });

  it('should mirror the board to the right if direction is right', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.RIGHT);

    expect(normalizedBoard).toEqual([
      [null, null, tile2, tile1],
      [null, null, null, null],
      [null, null, tile3, null],
      [tile4, null, null, null],
    ]);
  });

  it('should reverse normalize back to the same board LEFT', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.LEFT);
    const originalBoard = reverseNormalizeBoard(
      normalizedBoard,
      Direction.LEFT
    );
    expect(originalBoard).toEqual(testBoard);
  });

  it('should reverse normalize back to the same board RIGHT', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.RIGHT);
    const originalBoard = reverseNormalizeBoard(
      normalizedBoard,
      Direction.RIGHT
    );
    expect(originalBoard).toEqual(testBoard);
  });

  it('should reverse normalize back to the same board UP', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.UP);
    const originalBoard = reverseNormalizeBoard(normalizedBoard, Direction.UP);
    expect(originalBoard).toEqual(testBoard);
  });

  it('should reverse normalize back to the same board DOWN', () => {
    const normalizedBoard = normalizeBoard(testBoard, Direction.DOWN);
    const originalBoard = reverseNormalizeBoard(
      normalizedBoard,
      Direction.DOWN
    );
    expect(originalBoard).toEqual(testBoard);
  });
});

describe('mergeBoard', () => {
  it('should merge two tiles to the left', () => {
    const tile1 = { id: '1', value: 2 };
    const tile2 = { id: '2', value: 2 };

    const board = [
      [tile1, tile2, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.LEFT);

    expect(newBoard).toEqual([
      [{ id: '1', value: 4 }, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
    expect(score).toEqual(4);
  });

  it('should merge two tiles down', () => {
    const tile1 = { id: '1', value: 2 };
    const tile2 = { id: '2', value: 2 };

    const board = [
      [tile1, null, null, null],
      [tile2, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.DOWN);

    expect(newBoard).toEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [{ id: '2', value: 4 }, null, null, null],
    ]);
    expect(score).toEqual(4);
  });

  it('should merge two tiles up', () => {
    const tile1 = { id: '1', value: 2 };
    const tile2 = { id: '2', value: 2 };

    const board = [
      [tile1, null, null, null],
      [tile2, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.UP);

    expect(newBoard).toEqual([
      [{ id: '1', value: 4 }, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
    expect(score).toEqual(4);
  });

  it('should merge crowded board correctly', () => {
    const tile2_1 = { id: '2_1', value: 2 };
    const tile2_2 = { id: '2_2', value: 2 };
    const tile2_3 = { id: '2_3', value: 2 };
    const tile2_4 = { id: '2_4', value: 2 };
    const tile4_1 = { id: '4_1', value: 4 };
    const tile4_2 = { id: '4_2', value: 4 };
    const tile4_3 = { id: '4_3', value: 4 };
    const tile4_4 = { id: '4_4', value: 4 };
    const tile8_1 = { id: '8_1', value: 8 };
    const tile8_2 = { id: '8_2', value: 8 };
    const tile8_3 = { id: '8_3', value: 8 };
    const tile8_4 = { id: '8_4', value: 8 };
    const tile16 = { id: '16', value: 16 };
    const tile32 = { id: '32', value: 32 };

    const board = [
      [tile4_3, tile2_1, tile2_3, tile2_4],
      [tile4_1, tile8_1, tile2_2, tile4_4],
      [tile4_2, tile8_2, tile8_3, tile8_4],
      [tile16, tile32, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.DOWN);

    expect(newBoard).toEqual([
      [null, null, null, null],
      [tile4_3, tile2_1, null, tile2_4],
      [
        { id: '4_2', value: 8 },
        { id: '8_2', value: 16 },
        { id: '2_2', value: 4 },
        tile4_4,
      ],
      [tile16, tile32, tile8_3, tile8_4],
    ]);
  });
});
