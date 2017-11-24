#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, getRandomNumber, gdc, showResults, getNewRandoms } from '..';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const brainGcd = () => {

  const askQuestion = () => {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    return [num1, num2];
  }

  const gdc = (a, b) => {
    if (a === 0) {
      return a;
    } else {
      return gdc(b, a % b);
    }
  }

  const getGameData = () => {
    const question = askQuestion();
    const answer = gdc(question)
    return [question, answer];
  }

  export default () => {
    const gameDescription = '';
    return startGame(gameDescription, getGameData);
  }
}
