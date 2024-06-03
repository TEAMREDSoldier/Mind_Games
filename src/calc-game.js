import readlineSync from 'readline-sync';

const operators = ['+', '-', '*'];

const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getResultOfExpression = (firstValue, operator, secondValue) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRoundData = () => {
  const firstNumber = getRandomNum(1, 25);
  const secondNumber = getRandomNum(1, 25);
  const operator = operators[getRandomNum(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

const playCalcGame = (playerName, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = generateRoundData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${playerName}!`);
};

export { playCalcGame };