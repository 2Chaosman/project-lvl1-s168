import readlineSync from 'readline-sync';
import {
  cons,
  car,
  cdr,
  toString
} from 'hexlet-pairs';

const greetings = (gameDescription) => {
  console.log(`Welcome to the Brain Games!\n${gameDescription}`);
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`)
  return name;
};

const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 10)
  return num;
};

const randomSymbol = () => {
  const symbols = '+-*';
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const getNewRandoms = () => {
  let symbol = randomSymbol();
  let a = getRandomNumber();
  let b = getRandomNumber();
  return [symbol, cons(a, b)];
};

const listToString = (list) => {
    let result = '';
    for (let i = 0; i < list.length; i++) {
      result += list[i] ;
    }
    return result;
  };

const startGame = (gameDescription, getGameData) => {
  const name = greetings(gameDescription);
  let attempt = 0;

  while (attempt < 3) {
    let gameData = getGameData();
    let question = gameData[0];
    let correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    if (correctAnswer.toString() === answer) {
      console.log("Correct!");
      attempt += 1;
    } else {
      console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`)
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export {
  greetings,
  randomSymbol,
  getRandomNumber,
  getNewRandoms,
  listToString,
  startGame
};
