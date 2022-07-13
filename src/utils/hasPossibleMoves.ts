import { Board } from '../types';

const hasPossibleMoves = (board: Board): boolean => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === null) {
        return true;
      }
      if (row > 0 && board[row][col]?.value === board[row - 1][col]?.value) {
        return true;
      }
      if (col > 0 && board[row][col]?.value === board[row][col - 1]?.value) {
        return true;
      }
    }
  }
  return false;
};

export default hasPossibleMoves;
