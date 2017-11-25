#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings,
  getRandomNumber,
  showResults,
  getNewRandoms,
  makeListofNumbers,
  startGame
} from '..';
import {
  cons,
  car,
  cdr,
  toString
} from 'hexlet-pairs';

const askQuestion = () => {
  return getRandomNumber(1000);
}

const balance = (str) => {
  let arr = makeListofNumbers(str);

  const balanceArr = (arr) => {
    arr = arr.sort((a, b) => a - b);
    let biggestNumber = Number(arr[arr.length - 1]);
    let smallestNumber = Number(arr[0]);

    if (biggestNumber - smallestNumber <= 1) {
      return arr;
    } else {
      arr[0] = smallestNumber + 1;
      arr[arr.length - 1] = biggestNumber - 1;
      return balanceArr(arr);
    }
  };
  arr = balanceArr(arr);
  arr = arr.join('');
  return arr;
};

const getGameData = () => {
  const question = askQuestion();
  const answer = balance(question);
  return [question, answer];
}

export default () => {
  const gameDescription = 'Balance the given number.'
  return startGame(gameDescription, getGameData);
}
