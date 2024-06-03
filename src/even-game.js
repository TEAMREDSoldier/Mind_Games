import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = (playerName, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

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

export { playEvenGame };
