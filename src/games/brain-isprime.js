#!/usr/bin/env node

import {
  getRandomNumber,
} from '../utils';
import startGame from '../index';

const askQuestion = () => getRandomNumber(100);

const checkForPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const question = askQuestion();
  const answer = checkForPrime(question);
  return [question, answer];
};

export default () => {
  const gameDescription = 'Is this number prime?';
  return startGame(gameDescription, getGameData);
};
