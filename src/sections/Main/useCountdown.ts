import { useEffect, useState } from 'react';

const QUESTION_TIMER = 3;

export const useCountdown = (cb: () => void) => {
  const [countdown, setCountdown] = useState(QUESTION_TIMER);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);

    if (countdown === 0) {
      cb();

      setCountdown(QUESTION_TIMER);
    }

    return () => clearInterval(interval);
  }, [countdown, cb]);
};
