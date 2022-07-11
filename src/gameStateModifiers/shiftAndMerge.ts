import { Direction, GameStateModifier } from '../types';
import mergeBoard from '../utils/mergeBoard';

const shiftAndMerge =
  (direction: Direction): GameStateModifier =>
  (gameState) => {
    const [newBoard, earnedScore] = mergeBoard(gameState.board, direction);
    return {
      ...gameState,
      board: newBoard,
      score: gameState.score + earnedScore,
    };
  };

export default shiftAndMerge;
