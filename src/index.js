#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = (gameDescription) => {
  console.log(`Welcome to the Brain Games!\n${gameDescription}`);
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const startGame = (gameDescription, getGameData) => {
  const name = greetings(gameDescription);
  let attempt = 0;

  while (attempt < 3) {
    const gameData = getGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    if (correctAnswer.toString() === answer) {
      console.log('Correct!');
      attempt += 1;
    } else {
      console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  greetings,
  startGame,
};
