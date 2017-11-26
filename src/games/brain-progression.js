#!/usr/bin/env node

import {
  getRandomNumber,
  convertListToString,
  progression,
} from '../utils';
import startGame from '../index';

const askQuestion = () => {
  const newProgression = progression();
  const missedPossition = getRandomNumber(10);
  const missedNum = newProgression[missedPossition];
  newProgression[missedPossition] = '..';
  return [newProgression, missedNum];
};

const getGameData = () => {
  const qa = askQuestion()
  const question = qa[0];
  const answer = qa[1];
  return [convertListToString(question), answer];
};

export default () => {
  const gameDescription = 'What number is missing in this progression?';
  return startGame(gameDescription, getGameData);
};
