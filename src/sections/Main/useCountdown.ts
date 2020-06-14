import { useEffect, useState } from 'react';
import { Question } from './models/Question';

const QUESTION_TIMER = 5;

export const useCountdown = (cb: () => void, question: Question) => {
  const [countdown, setCountdown] = useState(QUESTION_TIMER);

  const restartTimer = () => {
    setCountdown(QUESTION_TIMER);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      cb();

      restartTimer();
    }

    return () => clearInterval(interval);
  }, [countdown, cb]);

  useEffect(() => {
    restartTimer();
  }, [question]);

  return {
    restartTimer,
  };
};
