import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./form-input/FormInput";
import logoImage from "./logo.png";

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = (email, password) => {
    // console.log({ email, password });
    localStorage.setItem("login", true);
    navigate("/start-typing");
  };

  //* If logged in navigate: start-typing
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      navigate("/start-typing");
    }
  }, [navigate]);

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
              <FormInput onLogin={loginHandler} />
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
