import React from 'react';
import { Button } from 'react-bootstrap';
import { Answer } from 'sections/Main/Answer';
import { shuffle } from 'lodash';

export const Answers: React.FC<AnswerProps> = ({ answers }) => {
  const shuffledAnswers = shuffle(answers);

  return (
    <>
      <Button>{shuffledAnswers[0].choice}</Button>
      <Button>{shuffledAnswers[1].choice}</Button>
      <Button>{shuffledAnswers[2].choice}</Button>
      <Button>{shuffledAnswers[3].choice}</Button>
    </>
  );
};

interface AnswerProps {
  answers: Answer[];
}
