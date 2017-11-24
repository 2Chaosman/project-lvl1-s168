#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber } from '..';


const brainEven = () => {

  const askQuestion = () => {
    return getRandomNumber();
  }

  const isEven = (number) => {
    return (number % 2 === 0) ? 'yes' : 'no';
  }

  const getGameData = () => {
    const question = askQuestion();
    const answer = isEven(question);
    return [question, answer]
  }



export default () => {
  const gameDescription = '';
  return startGame(gameDescription, getGameData);
};
