#!/usr/bin/env node

import {
  getRandomNumber,
} from '../utils';
import startGame from '../index';

const askQuestion = () => getRandomNumber(100);

const isPrime = num => {
  if (num < 2) {
    return false;
  }

  const checkForPrime = divider => {
    if (divider > num - 1) {
      return true;
    }
    if (num % divider === 0) {
      return false;
    }
    return checkForPrime(divider + 1);
  }

  return checkForPrime(2);
}

const getGameData = () => {
  const question = askQuestion();
  const answer = checkForPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameDescription = 'Is this number prime?';
  return startGame(gameDescription, getGameData);
};
