import React from 'react';
import { Button } from 'react-bootstrap';
import { Answer } from 'sections/Main/Answer';

export const Answers: React.FC<AnswerProps> = ({ answers }) => (
  <>
    <Button>{answers[0].choice}</Button>
    <Button>{answers[1].choice}</Button>
    <Button>{answers[2].choice}</Button>
    <Button>{answers[3].choice}</Button>
  </>
);

interface AnswerProps {
  answers: Answer[];
}
