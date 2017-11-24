#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings,
  getRandomNumber,
  showResults,
  getNewRandoms,
  startGame
} from '..';
import {
  cons,
  car,
  cdr,
  toString
} from 'hexlet-pairs';


const askQuestion = () => {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  return cons(num1, num2);
}

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

const getGameData = () => {
  const question = askQuestion();
  const answer = gcd(car(question), cdr(question));
  return [toString(question), answer];
}

export default () => {
  const gameDescription = '';
  return startGame(gameDescription, getGameData);
}
