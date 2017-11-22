#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber } from '..';


const brainEven = () => {
  const name = greetings('Answer "yes" if number even otherwise answer "no".')

  let number = getRandomNumber();
  let attempt = 0;

  while (attempt < 3) {
    console.log(`Question: ${number}`);
    let answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);
    if (
      (answer === 'yes' && number % 2 === 0) ||
      (answer === 'no' && number % 2 !== 0)
    ) {
      console.log('Correct!');
      number = getRandomNumber();
      attempt += 1;
    } else {
      console.log(`'${answer}' is wrong. Correct is ${(number % 2 === 0) ? "'yes'" : "'no'"}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
