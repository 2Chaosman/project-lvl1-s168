#!/usr/bin/env node

const getRandomNumber = (difficulty) => {
  const num = Math.floor(Math.random() * difficulty);
  return num;
};

const randomSymbol = () => {
  const symbols = '+-*';
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const convertListToString = (list) => {
  let result = '';
  for (let i = 0; i < list.length; i += 1) {
    result += list[i];
  }
  return result;
};

const makeListOfNumbers = (num) => {
  const convertedNum = num.toString();
  const arr = convertedNum.split('');
  return arr;
};

export {
  getRandomNumber,
  randomSymbol,
  convertListToString,
  makeListOfNumbers,
};
