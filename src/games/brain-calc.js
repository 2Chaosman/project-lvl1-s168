import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, listToString, startGame } from '..';

  const askQuestion = () => {
    let randomMathSymbol = randomSymbol();
    let pair = cons(getRandomNumber(10), getRandomNumber(10));
    let result;
    return [car(pair), randomMathSymbol, cdr(pair)];
  }

  const calc = (list) =>{
      let correctAnswer = 0;
      const mathSymbol = list[1];
      const num1 = list[0];
      const num2 = list[2];

      switch (mathSymbol) {
      case '+':
        correctAnswer = num1 + num2;
        return correctAnswer;
      case '-':
        correctAnswer = num1 - num2;
        return correctAnswer;
      case '*':
        correctAnswer = num1 * num2;
        return correctAnswer;
    }
  }

  const getGameData = () => {
    const question = askQuestion();
    const answer = calc(question);
    return [listToString(question), answer];
  }

export default () => {
  const gameDescription = 'What is the result of the expression?';
  return startGame(gameDescription, getGameData);
}
