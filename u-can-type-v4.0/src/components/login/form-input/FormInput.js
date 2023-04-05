import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Validation from "../../UI/validation/Validation";
import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";
import storage from "../../../Helpers/storage";

// Importing CSS
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  // Defined state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passWError, setPassWError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin({ email, password, rememberMeStatus: checked });
  };

  // Input field validation
  useEffect(() => {
    const identifier = setTimeout(() => {
      // "checking!" it on onChange(): to show btn
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
      // "CLEAN UP"
      clearTimeout(identifier);
    };
  }, [email, password]);

  // Remember me handler
  useEffect(() => {
    const rememberMe = storage.get("rememberMeData", {});
    if (rememberMe?.rememberMeStatus) {
      setEmail(rememberMe?.email);
      setPassword(rememberMe?.password);
      setChecked(rememberMe?.rememberMeStatus);
    } else {
      storage.remove("rememberMeData");
    }
  }, []);

  return (
    <Card>
      <h3>Login to your account</h3>
      {props?.loginValidationError && (
        <p
          style={{
            color: "rgb(220, 53, 69)",
            fontSize: "17px",
            fontWeight: "400",
            marginTop: "-16px",
          }}
        >
          {props?.loginValidationErrorMsg}
        </p>
      )}
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
            autoComplete="nope"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
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
            autoComplete="nope"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
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
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
          <Link to={"/forgot-password"}>Forgot Your Password?</Link>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          login
        </Button>
        <p className="new-ac">
          Don't have an account? <Link to={"/signup"}>Sign Up Now?</Link>
        </p>
      </form>
    </Card>
  );
};

export default FormInput;
