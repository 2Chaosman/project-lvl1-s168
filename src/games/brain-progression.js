#!/usr/bin/env node

import {
  getRandomNumber,
  convertListToString,
} from '../utils';
import startGame from '../index';

const askQuestion = () => {
  const step = getRandomNumber(10);

  const result = [getRandomNumber(10)];

  for (let i = 0; i < 10; i += 1) {
    result.push(result[i] + step);
  }
  const missedNumber = getRandomNumber(10);
  result[missedNumber] = '..';
  return result;
};

const findMissedNumber = (list) => {
  let step;
  let pos;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === '..') {
      pos = i;
    }
  }

  if (pos === 1) {
    step = list[3] - list[2];
    return list[pos - 1] + step;
  }
  step = list[pos - 1] - list[pos - 2];
  return list[pos - 1] + step;
};

const getGameData = () => {
  const question = askQuestion();
  const answer = findMissedNumber(question);
  return [convertListToString(question), answer];
};

export default () => {
  const gameDescription = 'What number is missing in this progression?';
  return startGame(gameDescription, getGameData);
};
