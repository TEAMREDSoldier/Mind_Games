#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playEvenGame } from '../src/even-game.js';

const playerName = readlineSync.question('May I have your name? ');
playEvenGame(playerName);
