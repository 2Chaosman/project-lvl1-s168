import readlineSync from 'readline-sync';
import { askForName, brainEven } from '..';

console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const name = askForName();

brainEven()
