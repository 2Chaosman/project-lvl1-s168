import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, startGame } from './src/index';

const brainCalc = () => {

  const askQuestion = () => {
    let randomMathSymbol = randomSymbol();
    let pair = cons(getRandomNumber(), getRandomNumber());
    let result;
    return [car(pair), randomMathSymbol, cdr(pair)];
  }

  const randomSymbol = askQuestion()[1];

  const calc = (list) =>{

      let correctAnswer = 0;

      switch (randomSymbol) {
      case '+':
        correctAnswer = car(pair) + cdr(pair);
        return correctAnswer;
      case '-':
        correctAnswer = car(pair) - cdr(pair);
        return correctAnswer;
      case '*':
        correctAnswer = car(pair) * cdr(pair);
        return correctAnswer;
    }
  }

  const getGameData = () => {
    const question = askQuestion();
    const answer = calc(question);
    return [question, answer];
  }

};

export default () => {
  const gameDescription = '';
  return startGame(gameDescription, getGameData);
}
