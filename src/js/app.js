import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game';
import Character from './domain';

console.log('app worked');

const game = new Game();
game.start();