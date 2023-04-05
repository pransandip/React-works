import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./form-input/FormInput";
import logoImage from "./logo.png";

// Helper functions
import { getURLSearchParams } from "../../Helpers/get.URLSearchParams";
import storage from "../../Helpers/storage";
import { popup, errorPopup } from "../../Helpers/notification";
import axios from "../../Api/axios";

const Login = () => {
  const navigate = useNavigate();

  //* reading data from local object
  let tempObj = storage.get("localDBInfo", {});

  // Defined state
  const [loginValidationError, setLoginValidationError] = useState(false);
  const [loginValidationErrorMsg, setLoginValidationErrorMsg] = useState("");

  //* Login handler
  const loginHandler = async (loginObj) => {
    const params = await getURLSearchParams(loginObj);
    try {
      const res = await axios.post("api/user/login", params);
      if (res) {
        if (res.status === 201 && res.data.status === "Ok") {
          popup("Login Successfully");
          storage.set("localDBInfo", {
            ...tempObj,
            userId: res.data.logUser.id,
          });
          storage.set("rememberMeData", loginObj);
          storage.set("login", "true");
          setTimeout(() => {
            navigate("/start-typing");
          }, 1000);
        } else if (res.status === 200) {
          setLoginValidationError(true);
          setLoginValidationErrorMsg(res.data.message);
        }
      } else {
        console.log("err");
      }
    } catch (err) {
      errorPopup("Network error");
      console.log(err);
    }
  };

  //* If loggedIn navigate: start-typing
  useEffect(() => {
    const login = storage.get("login");
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
              <FormInput
                onLogin={loginHandler}
                loginValidationError={loginValidationError}
                loginValidationErrorMsg={loginValidationErrorMsg}
              />
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
