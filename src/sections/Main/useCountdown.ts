import { useEffect, useState } from 'react';

const QUESTION_TIMER = 10;

export const useCountdown = (cb: () => void, questionPosition: number) => {
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
  }, [questionPosition]);

  return {
    countdown,
  };
};
