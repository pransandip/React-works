import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "./logo.png";
import Button from "../../UI/Button/Button";
import axios from "../../../Api/axios";

// Helper functions
import storage from "../../../Helpers/storage";
import { getURLSearchParams } from "../../../Helpers/get.URLSearchParams";
import { popup } from "../../../Helpers/notification";

const SubmitYourCode = ({ LOGOUT }) => {
  //* To read data from localStorage object send empty object as default parameter
  let tempObj = storage.get("localDBInfo", {});

  // Defined ref
  const submittedScoreID = useRef("");

  //* update status field to db
  const updateStatusHandler = async () => {
    const params = await getURLSearchParams({
      id: submittedScoreID.current,
      status: "submitted",
    });
    const res = await axios.post("api/score/update-status", params);
    if (res) {
      if (res.status === 201 && res.data.status === "Ok") {
        popup("code submitted successfully");
      } else if (res.status === 200) {
        popup(res.data.message);
      }
    } else {
      console.log("err");
    }
  };

  //* submit score to db on page load
  useEffect(() => {
    const scoreSubmitHandler = async () => {
      const params = await getURLSearchParams(tempObj);
      const res = await axios.post("api/score/submit-score", params);
      if (res) {
        if (res.status === 201 && res.data.status === "Ok") {
          console.log("code submitted successfully");
          submittedScoreID.current = res.data.result.id;
        } else if (res.status === 200) {
          console.log(res.data.message);
        }
      } else {
        console.log("err");
      }
    };
    scoreSubmitHandler();
  }, [tempObj]);

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
                <Button
                  onClick={() => {
                    updateStatusHandler();
                    LOGOUT();
                  }}
                >
                  submit your score
                </Button>
              </div>
              <p className="copyright">
                Copyright 2022. All Rights Reserved.{" "}
                <Link to={"/submit-your-score"}>Privacy policy</Link> |{" "}
                <Link to={"/submit-your-score"}>Disclaimer</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SubmitYourCode;
