import { MutableGameState } from '../types';
import { create, RandomSeed } from 'random-seed';

const getRng = (gameState: MutableGameState): RandomSeed => {
  if (gameState.rngNumber) {
    gameState.rngNumber++;
    return create(String(gameState.rngNumber));
  } else {
    return create();
  }
};

export default getRng;
