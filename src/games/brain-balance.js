#!/usr/bin/env node
import {
  getRandomNumber,
  makeListOfNumbers,
  startGame,
} from '../utils';
import {
  startGame,
} from '../index';

const askQuestion = () => getRandomNumber(1000);

const balance = (str) => {
  let arr = makeListOfNumbers(str);

  const balanceArr = (newArr) => {
    newArr = newArr.sort((a, b) => a - b);
    const biggestNumber = Number(newArr[newArr.length - 1]);
    const smallestNumber = Number(newArr[0]);

    if (biggestNumber - smallestNumber <= 1) {
      return newArr;
    } else {
      newArr[0] = smallestNumber + 1;
      newArr[arr.length - 1] = biggestNumber - 1;
      return balanceArr(newArr);
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
};

export default () => {
  const gameDescription = 'Balance the given number.';
  return startGame(gameDescription, getGameData);
};
