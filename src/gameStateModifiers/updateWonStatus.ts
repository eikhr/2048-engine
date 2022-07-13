import { GameState } from '../types';
import getHighestTileValue from '../utils/getHighestTileValue';

const updateWonStatus = ({ status, ...gameState }: GameState): GameState => ({
  ...gameState,
  status: {
    ...status,
    isWon: getHighestTileValue(gameState.board) >= 2048,
  },
});

export default updateWonStatus;
