import React, { useEffect } from "react";

const Timer = (props) => {
  const { startCounting, timeElapsed, setTimeElapsed, setOpenModal } = props;

  useEffect(() => {
    let interValId;
    if (startCounting) {
      interValId = setInterval(() => {
        // timeout
        if (timeElapsed <= 0) {
          setOpenModal(true);
          return;
        }
        setTimeElapsed((oldTime) => oldTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interValId);
    };
  }, [timeElapsed, startCounting, setTimeElapsed, setOpenModal]);

  return <h5>{timeElapsed}</h5>;
};

export default Timer;
