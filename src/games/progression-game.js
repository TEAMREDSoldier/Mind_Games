import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const generateProgression = (progressionLength, firstElement, progressionStep) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + progressionStep * i);
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const roundGenerator = () => {
  const progressionLength = 10;
  const firstElement = randoMumbers(1, 10);
  const progressionStep = randoMumbers(2, 10);

  const progression = generateProgression(progressionLength, firstElement, progressionStep);

  const randomIndex = randoMumbers(0, progression.length - 1);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenElement.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, roundGenerator);
};