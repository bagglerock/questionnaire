import { shuffle } from 'lodash';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Answer } from 'sections/Main/Answer';
import { Answers } from 'sections/Main/Answers';
import { Question } from 'sections/Main/Question';
import { questionsRepository } from 'services/QuestionRepository';
import { useGame } from './useGame';

export const Main: React.FC = () => {
  const questions = questionsRepository.get();

  const { questionNumber, handleClick, gameIsOn, startGame } = useGame(questions);

  const shuffledQuestions = shuffle(questions);

  const question = shuffledQuestions[questionNumber];

  if (!gameIsOn) {
    return (
      <div className="start-menu">
        <Button onClick={startGame}>Start Game</Button>
      </div>
    );
  }

  return (
    <>
      <GameView question={question.question} answers={question.answers} handleClick={handleClick} />
    </>
  );
};

const GameView: React.FC<GameViewProps> = ({ question, answers, handleClick }) => (
  <>
    <div className="question-wrapper">
      <Question question={question} />
    </div>
    <div className="answer-wrapper">
      <Answers answers={answers} handleClick={handleClick} />
    </div>
  </>
);

interface GameViewProps {
  question: string;
  answers: Answer[];
  handleClick: () => void;
}
