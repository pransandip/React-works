import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../logo.png";
import Card from "../../UI/card/Card";
import Button from "../../UI/Button/Button";
import Validation from "../../UI/validation/Validation";

// Importing CSS
import classes from "./ForgotPassword.module.css";
import { getURLSearchParams } from "../../../Helpers/get.URLSearchParams";
import axios from "../../../Api/axios";
import { errorPopup } from "../../../Helpers/notification";

const ForgotPassword = () => {
  // Defined state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [emailValidationErrorMsg, setEmailValidationErrorMsg] = useState("");

  // form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      return;
    }
    const params = await getURLSearchParams({ email });
    try {
      const res = await axios.post("api/user/forgot-password", params);
      if (res) {
        if (res.status === 201 && res.data.status === "Ok") {
          setOpenModal(true);
        } else if (res.status === 200) {
          setEmailValidationError(true);
          setEmailValidationErrorMsg(res.data.message);
        }
      } else {
        console.log("err");
      }
    } catch (err) {
      errorPopup("Network error");
      console.log(err);
    }
  };

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
              {openModal ? (
                <Card>
                  <h3>Check your mail</h3>
                  <p style={{ color: "#fff" }}>
                    Please check your mail, we send you an email with
                    instructions on how to login with your new password.
                  </p>
                </Card>
              ) : (
                <Card>
                  <h3>Forgot Password</h3>
                  {emailValidationError && (
                    <p
                      style={{
                        color: "rgb(220, 53, 69)",
                        fontSize: "17px",
                        fontWeight: "400",
                        marginTop: "-16px",
                      }}
                    >
                      {emailValidationErrorMsg}
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
                        placeholder="Enter your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                        onBlur={() => setEmailIsValid(email.includes("@"))}
                        onKeyUp={() => setEmailError(!email.includes("@"))}
                      />
                      {emailError && (
                        <Validation>Enter a valid email address</Validation>
                      )}
                    </div>
                    <Button type="submit">send</Button>
                  </form>
                </Card>
              )}
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

export default ForgotPassword;
