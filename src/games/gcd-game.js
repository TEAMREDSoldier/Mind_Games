import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

const gameDescription = 'Find the greatest common divisor of given numbers';

const generateRounds = () => {
  const firstNumber = randoMumbers();
  const secondNumber = randoMumbers();

  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatestCommonDivisor.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};