import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

let name = '';

const askForName = () => {
  console.log('Welcome to the Brain Games!');

  name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`)
  return name;
};

const brainEven = () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

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

const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomSymbol = () => {
    const symbols = '+-*';
    const rand = Math.floor(Math.random() * symbols.length);
    return symbols[rand];
  };

  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let randomMathSymbol = randomSymbol();
  let pair = cons(num1, num2);
  let attempt = 0;
  let rightAnswer = 0;

  const getNewRandoms = () => {
    num1 = getRandomNumber();
    num2 = getRandomNumber();
    randomMathSymbol = randomSymbol();
    pair = cons(num1, num2);
  };

  while (attempt < 3) {
    console.log(`Question: ${car(pair)} ${randomMathSymbol} ${cdr(pair)} `)
    let answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    switch (randomMathSymbol) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    case '*':
      rightAnswer = num1 * num2;
      break;
    }
    
    if (rightAnswer === Number(answer)) {
      console.log("Correct!");
      getNewRandoms();
      attempt += 1;
    } else {
      console.log(`${answer} is wrong! Right answer is ${rightAnswer}`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { askForName, brainEven, brainCalc };
