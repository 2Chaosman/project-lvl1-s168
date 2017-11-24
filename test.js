import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, startGame } from './src/index';

const brainCalc = () => {

  const askQuestion = () => {
    let randomMathSymbol = randomSymbol();
    let pair = cons(getRandomNumber(), getRandomNumber());
    return ${car(pair)} + ${randomMathSymbol} + ${cdr(pair)};
  }

  const calc = (askQuestion) =>{

      const correctAnswer = 0;

      switch (randomMathSymbol) {
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
    const answer = calc(randomMathSymbol, pair);
    return [question, answer];
  }
startGame('Calc number:', getGameData);
};

/*export default () => {
  const gameDescription = '';
  return startGame(gameDescription, getGameData);
}*/

brainCalc();
