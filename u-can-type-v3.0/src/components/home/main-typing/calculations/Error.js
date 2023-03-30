import { useEffect } from "react";

const Error = (props) => {
  const { totalWordCount, wrongWords, setError } = props;

  // calculate error
  const error = wrongWords >= totalWordCount ? totalWordCount : wrongWords;

  useEffect(() => {
    setError(error.toFixed(0));
  }, [error, setError]);

  return <h5>{error}</h5>;
};

export default Error;
