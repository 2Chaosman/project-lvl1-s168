#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, showResults } from '..';

const brainCalc = () => {
  const name = greetings('What is the result of the expression?');

  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let pair = cons(cons(num1, num2), randomMathSymbol);
  let randomMathSymbol = randomSymbol();
  let attempt = 0;
  let correctAnswer = 0;

  while (attempt < 3) {
    console.log(`Question: ${car(pair)} ${randomMathSymbol} ${cdr(pair)} `);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    switch (randomMathSymbol) {
      case '+':
        correctAnswer = car(pair) + cdr(pair);
        break;
      case '-':
        correctAnswer = car(pair) - cdr(pair);
        break;
      case '*':
        correctAnswer = car(pair) * cdr(pair);
        break;
    }

    pair = getNewRandoms(pair);
    randomMathSymbol = randomSymbol();

    if (correctAnswer === Number(answer)){
      console.log("Correct!");
      attempt += 1;
    } else {
        console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`)
        return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

brainCalc();
