#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  cons,
  car,
  cdr
} from 'hexlet-pairs';
import {
  getRandomNumber,
  startGame
} from '..';

const askQuestion = () => {
  return getRandomNumber(10);
}

const isEven = (number) => {
  return (number % 2 === 0) ? 'yes' : 'no';
}

const getGameData = () => {
  const question = askQuestion();
  const answer = isEven(question);
  return [question, answer];
}

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  return startGame(gameDescription, getGameData);
};
