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

  it('should merge two tiles to the right', () => {
    const tile1 = { id: '1', value: 2 };
    const tile2 = { id: '2', value: 2 };

    const board = [
      [tile1, tile2, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.RIGHT);

    expect(newBoard).toEqual([
      [null, null, null, { id: '2', value: 4 }],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
    expect(score).toEqual(4);
  });

  it('should merge two tiles to the right', () => {
    const tile1 = { id: '1', value: 2 };
    const tile2 = { id: '2', value: 2 };

    const board = [
      [tile1, tile2, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    const [newBoard, score] = mergeBoard(board, Direction.RIGHT);

    expect(newBoard).toEqual([
      [null, null, null, { id: '2', value: 4 }],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
    expect(score).toEqual(4);
  });
});
