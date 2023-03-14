const Button = (props) => {
  return (
    <button
      {...props}
      className="btn btn-primary"
      type={props.type || "button"}
    ></button>
  );
};

export default Button;
