import React, { useState, useEffect } from 'react';
import '../../../styles/styles.scss';

export const Timer = ({
  setTimer,
  timeEnd,
  setTimeEnd,
  isPhoneCodeSuccess,
}) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);

  const codeTimeEnd = minutes === 0 && seconds === 0;

  useEffect(() => {
    if (codeTimeEnd) {
      setTimer(false);
      setTimeEnd('timeEnd');
    } else if (isPhoneCodeSuccess) {
      setTimer(false);
    }
  });
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="code_time">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
