import { GameState, MutableGameState } from '../types';

const deepCopyGameState = (gameState: GameState): MutableGameState => {
  return {
    ...gameState,
    score: gameState.score,
    board: gameState.board.map((row) => row.slice()),
    rngNumber: gameState.rngNumber,
  };
};

export default deepCopyGameState;
