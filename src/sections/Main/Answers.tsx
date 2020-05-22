import React from 'react';
import { Button } from 'react-bootstrap';
import { Answer } from 'sections/Main/Answer';
import { shuffle } from 'lodash';

export const Answers: React.FC<AnswerProps> = ({ answers, handleClick }) => {
  const shuffledAnswers = shuffle(answers);

  return (
    <>
      <Button onClick={handleClick}>{shuffledAnswers[0].choice}</Button>
      <Button onClick={handleClick}>{shuffledAnswers[1].choice}</Button>
      <Button onClick={handleClick}>{shuffledAnswers[2].choice}</Button>
      <Button onClick={handleClick}>{shuffledAnswers[3].choice}</Button>
    </>
  );
};

interface AnswerProps {
  answers: Answer[];
  handleClick: () => void;
}
