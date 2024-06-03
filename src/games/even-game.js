import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRounds = () => {
  const question = randoMumbers();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};