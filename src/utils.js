#!/usr/bin/env node

const getRandomNumber = (difficulty) => {
  const num = Math.floor((Math.random() * (difficulty - 1)) + 1);
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
    result += `${list[i]} `;
  }
  return result;
};

const makeListOfNumbers = (num) => {
  const convertedNum = num.toString();
  const arr = convertedNum.split('');
  return arr;
};


const progression = () => {
  const step = getRandomNumber(10);
  const start = getRandomNumber(10);

  const makeProgression = (result, length) => {
    if (length === 10) {
      return result;
    }
    result.push(start + (step * length));
    return makeProgression(result, length + 1);
  };

  return makeProgression([start], 1);
};

export {
  getRandomNumber,
  randomSymbol,
  convertListToString,
  makeListOfNumbers,
  progression,
};
