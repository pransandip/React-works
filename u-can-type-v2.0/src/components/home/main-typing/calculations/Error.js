import { useEffect } from "react";

const Error = (props) => {
  const { totalCharCount, countWrongSymbols, setError } = props;

  // calculate error
  const error = (countWrongSymbols / totalCharCount) * 100;

  useEffect(() => {
    setError(error.toFixed(0));
  }, [error, setError]);

  return <h5>{error.toFixed(0)}</h5>;
};

export default Error;
