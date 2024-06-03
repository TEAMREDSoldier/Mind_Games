import startGame from '../index.js';

const getRandomNumbers = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRounds = () => {
  const question = getRandomNumbers();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};