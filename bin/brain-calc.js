#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playCalcGame } from '../src/calc-game.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
playCalcGame(playerName);