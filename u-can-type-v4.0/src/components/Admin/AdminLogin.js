import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "./logo.png";
import Card from "../UI/card/Card";
import axios from "../../Api/axios";
import { errorPopup, popup } from "../../Helpers/notification";
import { getURLSearchParams } from "../../Helpers/get.URLSearchParams";

// Importing CSS
import classes from "./AdminLogin.module.css";
import Validation from "../UI/validation/Validation";
import Button from "../UI/Button/Button";
import storage from "../../Helpers/storage";

const AdminLogin = () => {
  const navigate = useNavigate();

  // Defined state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passWError, setPassWError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [loginValidationError, setLoginValidationError] = useState(false);
  const [loginValidationErrorMsg, setLoginValidationErrorMsg] = useState("");

  // form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const params = await getURLSearchParams({ email, password });
    try {
      const res = await axios.post("api/user/login", params);
      if (res) {
        if (
          res.status === 201 &&
          res.data.status === "Ok" &&
          res.data.logUser.isAdmin === "true"
        ) {
          popup("Admin Login Successfully");
          storage.set("adminLoginInfo", "true");
          // navigate
          setTimeout(() => {
            navigate(`/admin-dashboard`);
          }, 1000);
        } else if (res.status === 200) {
          setLoginValidationError(true);
          setLoginValidationErrorMsg(res.data.message);
        } else {
          errorPopup("You are not Admin");
        }
      } else {
        console.log("err");
      }
    } catch (err) {
      errorPopup("Network error");
      console.log(err);
    }
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

  //* On page Load logout
  useEffect(() => {
    storage.remove("adminLoginInfo");
  }, []);

  return (
    <Fragment>
      <section className="login-bg">
        <div className="row login-bg-content">
          <div className="col-lg-6 col-md-6 col-12 login-left">
            <div className="logo">
              <img src={logoImage} alt="" loading="lazy" />
            </div>
            <div className="login-details">
              <h2>Check Your Online </h2>
              <h1>Typing Speed </h1>
              <Card>
                <h3>Admin Login</h3>
                {loginValidationError && (
                  <p
                    style={{
                      color: "rgb(220, 53, 69)",
                      fontSize: "17px",
                      fontWeight: "400",
                      marginTop: "-16px",
                    }}
                  >
                    {loginValidationErrorMsg}
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
                    {emailError && (
                      <Validation>Enter a valid email address</Validation>
                    )}
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
                      onBlur={() =>
                        setPasswordIsValid(password.trim().length > 6)
                      }
                      onKeyUp={() => setPassWError(password.trim().length <= 6)}
                    />
                    {passWError && (
                      <Validation>
                        Password must be more than six character long
                      </Validation>
                    )}
                  </div>
                  <Button type="submit" disabled={!formIsValid}>
                    Login
                  </Button>
                </form>
              </Card>
            </div>
            <p className="copyright">
              Copyright 2022. All Rights Reserved.{" "}
              <Link to={"/"}>Privacy policy</Link> |{" "}
              <Link to={"/"}>Disclaimer</Link>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 login-right"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminLogin;
