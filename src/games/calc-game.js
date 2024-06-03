import startGame from '../index.js';

const getRandomNumbers = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getResultOfExpression = (firstValue, operator, secondValue) => {
  return eval(`${firstValue} ${operator} ${secondValue}`);
};

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateRounds = () => {
  const firstNumber = getRandomNumbers(1, 25);
  const secondNumber = getRandomNumbers(1, 25);
  const operator = operators[getRandomNumbers(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};