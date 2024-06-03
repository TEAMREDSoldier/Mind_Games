import startGame from '../index.js';

const getRandomNumbers = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

const gameDescription = 'Find the greatest common divisor of given numbers';

const generateRoundsData = () => {
  const firstNumber = getRandomNumbers();
  const secondNumber = getRandomNumbers();

  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatestCommonDivisor.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRoundsData);
};