#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, getRandomNumber, gdc, showResults, getNewRandoms } from '..';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const brainGcd = () => {
  const name = greetings('Find the greatest common divisor of given numbers.');


  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let pair = cons(num1, num2);

  let attempt = 0;
  let correctAnswer = 0;

  while (attempt < 3) {
    console.log(`Question: ${car(pair)} ${cdr(pair)}`);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    correctAnswer = gdc(car(pair), cdr(pair))
    pair = getNewRandoms(pair);

    if (correctAnswer === Number(answer)){
      console.log("Correct!");
      attempt += 1;
    } else {
        console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`)
        return;
    }
  }
  console.log(`Congratulation, ${name}`)
};

export default brainGcd;
