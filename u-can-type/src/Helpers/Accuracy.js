import { useEffect } from "react";

const Accuracy = (props) => {
  const { timeElapsed, totalWordCount, correctWords, setAccuracy, setWPM } =
    props;

  // calculate WPM
  const minutes = (process.env.REACT_APP_SECONDS - timeElapsed) / 60;
  const WPM = (correctWords / minutes || 0).toFixed(1);

  // calculate accuracy
  const accuracy = (correctWords / totalWordCount) * 100;

  useEffect(() => {
    setAccuracy(accuracy.toFixed(0));
    setWPM(WPM);
  }, [accuracy, WPM, setAccuracy, setWPM]);

  return <h5>{accuracy.toFixed(0)}</h5>;
};

export default Accuracy;
