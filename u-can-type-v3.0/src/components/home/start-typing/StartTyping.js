import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import logoImage from "./logo.png";

const StartTyping = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="type-test">
        <div className="container">
          <div className="type-t-details">
            <div className="type-test-content">
              <div className="logo">
                <img src={logoImage} alt="" loading="lazy" />
              </div>
              <h1>Test Your Typing Speed</h1>
              {/* <div className="typing-input">
                <div className="typing-input-box">
                  <h5>{process.env.REACT_APP_SECONDS}</h5>
                  <h6>seconds</h6>
                </div>
                <div className="typing-input-box">
                  <h5>100</h5>
                  <h6>errors</h6>
                </div>
                <div className="typing-input-box">
                  <h5>100</h5>
                  <h6>% accuracy</h6>
                </div>
              </div> */}
              <div className="typing-btn">
                <Button onClick={() => navigate("/main-typing")}>
                  start typing
                </Button>
              </div>
              <p className="copyright">
                Copyright 2022. All Rights Reserved.{" "}
                <Link to={"/start-typing"}>Privacy policy</Link> |{" "}
                <Link to={"/start-typing"}>Disclaimer</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StartTyping;
