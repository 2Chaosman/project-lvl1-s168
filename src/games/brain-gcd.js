#!/usr/bin/env node
import {
  cons,
  car,
  cdr,
  toString,
} from 'hexlet-pairs';
import {
  getRandomNumber,
} from '../utils';
import {
  startGame,
} from '../index';

const askQuestion = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  return cons(num1, num2);
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const question = askQuestion();
  const answer = gcd(car(question), cdr(question));
  return [toString(question), answer];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers';
  return startGame(gameDescription, getGameData);
};
