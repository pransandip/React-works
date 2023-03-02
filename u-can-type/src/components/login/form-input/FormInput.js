import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Validation from "../../UI/validation/Validation";
import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";

// Importing CSS
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  // Defined state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passWError, setPassWError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  // * Input field validation
  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("checking!");
      setFormIsValid(email.includes("@") && password.trim().length > 6); // checking in onChange: to show btn
    }, 500);

    return () => {
      // console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [email, password]);

  return (
    <Card>
      <h3>Login to your account</h3>
      <form onSubmit={submitHandler}>
        <div
          className={`form-group ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailIsValid(email.includes("@"))}
            onKeyUp={() => setEmailError(!email.includes("@"))}
          />
          {emailError && <Validation>Enter a valid email address</Validation>}
        </div>
        <div
          className={`form-group ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordIsValid(password.trim().length > 6)}
            onKeyUp={() => setPassWError(password.trim().length <= 6)}
          />
          {passWError && (
            <Validation>
              Password must be more than six character long
            </Validation>
          )}
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
          <Link to={"/"}>Forgot Your Password?</Link>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          login
        </Button>
        <p className="new-ac">
          Don't have an account? <Link to={"/"}>Sign Up Now?</Link>
        </p>
      </form>
    </Card>
  );
};

export default FormInput;