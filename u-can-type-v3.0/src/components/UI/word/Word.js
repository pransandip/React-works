const Word = (props) => {
  const { text, color, bgColor } = props;

  return (
    <span style={{ color: color, backgroundColor: bgColor }}>{text} </span>
  );
};

export default Word;
