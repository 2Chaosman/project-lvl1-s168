#!/usr/bin/env node

import {
  getRandomNumber,
  makeListOfNumbers,
} from '../utils';
import startGame from '../index';

const askQuestion = () => getRandomNumber(1000);

const balance = (str) => {
  let arr = makeListOfNumbers(str);

  const balanceArr = (newArr) => {
    const sortedArr = newArr.sort((a, b) => a - b);
    const biggestNumber = Number(sortedArr[newArr.length - 1]);
    const smallestNumber = Number(sortedArr[0]);

    if (biggestNumber - smallestNumber <= 1) {
      return sortedArr;
    }

    sortedArr[0] = smallestNumber + 1;
    sortedArr[arr.length - 1] = biggestNumber - 1;
    return balanceArr(sortedArr);
  };
  arr = balanceArr(arr);
  arr = arr.join('');
  return arr;
};

const getGameData = () => {
  const question = askQuestion();
  const answer = balance(question);
  return [question, answer];
};

export default () => {
  const gameDescription = 'Balance the given number.';
  return startGame(gameDescription, getGameData);
};
