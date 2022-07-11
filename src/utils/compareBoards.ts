import { Board } from '../types';

const compareBoards = (board1: Board, board2: Board) => {
  if (board1.length !== board2.length) return false;
  if (board1[0].length !== board2[0].length) return false;

  for (let i = 0; i < board1.length; i++) {
    for (let j = 0; j < board1[i].length; j++) {
      if (board1[i][j]?.value !== board2[i][j]?.value) {
        return false;
      }
      if (board1[i][j]?.id !== board2[i][j]?.id) {
        return false;
      }
    }
  }

  return true;
};

export default compareBoards;
