#!/usr/bin/env node
import {
  getRandomNumber,
} from '../utils';
import {
  startGame,
} from '../index';

const askQuestion = () => getRandomNumber(10);

const checkForEven = (number) => number % 2 === 0 ? 'yes' : 'no';

const getGameData = () => {
  const question = askQuestion();
  const answer = checkForEven(question);
  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  return startGame(gameDescription, getGameData);
};
