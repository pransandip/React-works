import classes from "./Word.module.css";

const Word = (props) => {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className={classes.correct}>{text} </span>;
  }

  if (correct === false) {
    return <span className={classes.incorrect}>{text} </span>;
  }

  if (active) {
    return <span className={classes.active}>{text} </span>;
  }

  return <span>{text} </span>;
};

export default Word;
