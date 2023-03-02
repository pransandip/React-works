const Validation = (props) => {
  const styleError = {
    color: "rgb(255 155 30)",
    fontSize: "11px",
    fontWeight: "500",
    // position: "absolute",
  };
  return <small style={{ ...styleError }} {...props}></small>;
};

export default Validation;
