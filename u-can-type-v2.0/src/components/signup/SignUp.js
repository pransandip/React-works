import { Fragment } from "react";
import { Link } from "react-router-dom";
import CreateAccountForm from "./create-account-form/CreateAccountForm";
import logoImage from "./logo.png";

const SignUp = () => {
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
              <CreateAccountForm />
            </div>
            <p className="copyright">
              Copyright 2022. All Rights Reserved.{" "}
              <Link to={"/"}>Privacy policy</Link> |{" "}
              <Link to={"/"}>Disclaimer</Link>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 login-right sign-up"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
