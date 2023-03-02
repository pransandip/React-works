import { useEffect } from "react";

const Error = (props) => {
  const { totalWordCount, wrongWords, setError } = props;

  const error = wrongWords >= totalWordCount ? totalWordCount : wrongWords;

  useEffect(() => {
    setError(error);
  }, [error, setError]);

  return <h5>{wrongWords >= totalWordCount ? totalWordCount : wrongWords}</h5>;
};

export default Error;
