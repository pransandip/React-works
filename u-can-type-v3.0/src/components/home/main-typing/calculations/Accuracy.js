import { useEffect } from "react";

const Accuracy = (props) => {
  const {
    timeElapsed,
    totalWordCount,
    countCorrectWords,
    setAccuracy,
    setWPM,
    setCPM,
  } = props;

  // calculate WPM & CMP
  const minutes =
    (parseInt(process.env.REACT_APP_SECONDS) - parseInt(timeElapsed)) / 60;
  const WPM = countCorrectWords / minutes || 0;
  const CPM = (WPM * 5) / minutes || 0;

  // calculate accuracy
  const accuracy = (countCorrectWords / totalWordCount) * 100;

  useEffect(() => {
    setAccuracy(accuracy.toFixed(0));
    setWPM(WPM.toFixed(1));
    setCPM(CPM.toFixed(1));
  }, [accuracy, WPM, CPM, setAccuracy, setWPM, setCPM]);

  return <h5>{accuracy.toFixed(0)}</h5>;
};

export default Accuracy;
