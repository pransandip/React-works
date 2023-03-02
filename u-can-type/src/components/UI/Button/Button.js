const Button = (props) => {
  return (
    <button
      {...props}
      className={`btn btn-primary ${props.className}`}
      type={props.type || "button"}
    ></button>
  );
};

export default Button;
