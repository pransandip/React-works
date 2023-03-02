import { Fragment } from "react";
import { Link } from "react-router-dom";
import FormInput from "./form-input/FormInput";
import logoImage from "./logo.png";

const Login = () => {
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
              <FormInput />
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

export default Login;
