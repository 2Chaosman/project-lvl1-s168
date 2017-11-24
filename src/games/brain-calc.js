import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, startGame } from './src/index';

const brainCalc = () => {

  const askQuestion = () => {
    let randomMathSymbol = randomSymbol();
    let pair = cons(getRandomNumber(), getRandomNumber());
    return [car(pair), randomMathSymbol, cdr(pair)];
  }

  const randomSymbol = askQuestion()[1];

  const calc = () =>{

      const correctAnswer = 0;

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
    const question = askQuestion()[0];
    const answer = calc(question);
    return [question, answer];
  }

};

export default () => {
  const gameDescription = '';
  return startGame(gameDescription, getGameData);
}
