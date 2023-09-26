import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();
  const [countdown, setCountdown] = useState(getCountdown(countDownDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(countDownDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return countdown;
};

const formatTime = (value: number) => {
  return value < 10 ? `0${value}` : value.toString();
};

const getCountdown = (countDownDate: number) => {
  const now = new Date().getTime();
  const timeLeft = Math.max(0, countDownDate - now);

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return {
    hours: formatTime(hours),
    minutes: formatTime(minutes),
    seconds: formatTime(seconds),
  };
};

export { useCountdown };
