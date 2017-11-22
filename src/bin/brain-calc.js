#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askForName, brainCalc } from '..';

askForName();
brainCalc();
