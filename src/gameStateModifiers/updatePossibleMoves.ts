import hasPossibleMoves from '../utils/hasPossibleMoves';
import { GameState } from '../types';

const updatePossibleMoves = ({
  status,
  ...gameState
}: GameState): GameState => ({
  ...gameState,
  status: {
    ...status,
    hasPossibleMoves: hasPossibleMoves(gameState.board),
  },
});

export default updatePossibleMoves;
