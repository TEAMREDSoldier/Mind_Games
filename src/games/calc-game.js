import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const getResultOfExpression = (firstValue, operator, secondValue) => {
  return eval(`${firstValue} ${operator} ${secondValue}`);
};

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateRounds = () => {
  const firstNumber = randoMumbers(1, 25);
  const secondNumber = randoMumbers(1, 25);
  const operator = operators[randoMumbers(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};