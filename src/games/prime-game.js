import startGame from '../index.js';

const getRandomNumbers = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRounds = () => {
  const question = getRandomNumbers();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};