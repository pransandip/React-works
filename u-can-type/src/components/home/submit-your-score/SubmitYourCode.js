import React from "react";
import logoImage from "./logo.png";

const SubmitYourCode = () => {
  // reading data from session object
  let tempObj = JSON.parse(localStorage.localDBInfo);

  return (
    <React.Fragment>
      <section className="type-test">
        <div className="container">
          <div className="type-t-details">
            <div className="type-test-content">
              <div className="logo">
                <img src={logoImage} alt="" />
              </div>
              <h1>Test Your Typing Speed</h1>
              <div className="typing-input">
                <div className="typing-input-box">
                  <h5>{tempObj.seconds ? tempObj.seconds : 0}</h5>
                  <h6>seconds</h6>
                </div>
                <div className="typing-input-box">
                  <h5>{tempObj.wpm ? tempObj.wpm : 0}</h5>
                  <h6>wpm</h6>
                </div>
                <div className="typing-input-box">
                  <h5>{tempObj.cpm ? tempObj.cpm : 0}</h5>
                  <h6>cpm</h6>
                </div>
                <div className="typing-input-box">
                  <h5>{tempObj.errors ? tempObj.errors : 0}</h5>
                  <h6>errors</h6>
                </div>
                <div className="typing-input-box">
                  <h5>{tempObj.accuracy ? tempObj.accuracy : 0}</h5>
                  <h6>% accuracy</h6>
                </div>
              </div>
              <div className="typing-btn">
                <a href=".">submit your score</a>
              </div>
              <p className="copyright">
                Copyright 2022. All Rights Reserved.{" "}
                <a href=".">Privacy policy</a> | <a href=".">Disclaimer</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SubmitYourCode;
