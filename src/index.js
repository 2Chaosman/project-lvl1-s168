import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const greetings = (gameDescription) => {
  console.log(`Welcome to the Brain Games!\n${gameDescription}`);
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`)
  return name;
};

const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 100)
  return num;
};

const randomSymbol = () => {
  const symbols = '+-*';
  const rand = Math.floor(Math.random() * symbols.length);
  return symbols[rand];
};

const getNewRandoms = (pair) => {
  let a = car(pair);
  let b = cdr(pair);
  a = getRandomNumber();
  b = getRandomNumber();
  return cons(a, b);
};

const gdc = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gdc(b, a % b);
  }
}

const startGame = (question, game, pair) => {
  let attempt = 0;

  while (attempt < 3) {
  let correctAnswer = game();
  console.log(question);
  const answer = readlineSync.prompt();
  console.log(`Your answer: ${answer}`);

  if (correctAnswer.toString() === answer){
    console.log("Correct!");
    attempt += 1;
  } else {
      console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`)
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { greetings, randomSymbol, getRandomNumber, getNewRandoms, gdc, startGame };
