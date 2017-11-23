import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, startGame } from './src/index';

const brainCalc = () => {
  const name = greetings('What is the result of the expression?');
  let randomMathSymbol = randomSymbol();
  let pair = cons(getRandomNumber(), getRandomNumber());
  const question = `Question: ${car(pair)} ${randomMathSymbol} ${cdr(pair)}`

  const calc = (randomMathSymbol, pair) =>{
      let correctAnswer = 0;

      switch (randomMathSymbol) {
      case '+':
        correctAnswer = car(pair) + cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;
      case '-':
        correctAnswer = car(pair) - cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;
      case '*':
        correctAnswer = car(pair) * cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;
    }
  }

  startGame(question, calc, pair);
};

brainCalc();
