import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmitYourCode from "../submit-your-score/SubmitYourCode";

// components
import logoImage from "./logo.png";
import Word from "../../UI/word/Word";
import Widget from "../../UI/widgets/Widget";
import Accuracy from "./calculations/Accuracy";
import Timer from "./calculations/Timer";
import Error from "./calculations/Error";

// * Importing Random strings
import getRandomText from "../../../Helpers/get.random.text";

const MainTyping = (props) => {
  // reading data from session object
  let tempObj = JSON.parse(localStorage.localDBInfo);

  // get random text
  const wordCloud = getRandomText();

  // reading from env file
  const SECONDS = process.env.REACT_APP_SECONDS || 20;

  /*------ Defined State -------*/
  const [userInput, setUserInput] = useState("");
  const [countCorrectSymbols, setCountCorrectSymbols] = useState(0);
  const [countWrongSymbols, setCountWrongSymbols] = useState(0);
  const [countTotalEnteredSymbols, setCountTotalEnteredSymbols] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(SECONDS);
  const [startCounting, setStartCounting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [finishedOnTime, setFinishedOnTime] = useState(false);
  const [error, setError] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [wpm, setWPM] = useState("");
  const [cpm, setCPM] = useState("");

  // Convert to Word Tokens
  const getWordCloud = () => wordCloud.split("");

  // Defined ref
  const cloud = useRef(getWordCloud());

  /*------- Processing user input -------*/
  const processInput = (value) => {
    // * stop
    if (value.length > cloud.current.length) {
      return;
    }
    // * start timer
    if (!startCounting) {
      setStartCounting(true);
    }
    // * update userInput
    setUserInput(value);

    // * count correct character
    setCountCorrectSymbols(
      value.split("").filter((char, i) => char === cloud.current[i]).length
    );

    // * count wrong character
    setCountWrongSymbols(
      value.split("").filter((char, i) => char !== cloud.current[i]).length
    );

    // * count entered character
    setCountTotalEnteredSymbols(value.split("").length);

    if (value.length === cloud.current.length) {
      // overflow
      setStartCounting(false);
      setFinishedOnTime(true);
      setOpenModal(true);
    }
  };

  // setting session object
  useEffect(() => {
    let seconds = process.env.REACT_APP_SECONDS - timeElapsed;
    let newObj = {
      ...tempObj,
      seconds: seconds,
      errors: error,
      accuracy: accuracy,
      wpm: wpm,
      cpm: cpm,
    };
    localStorage.setItem("localDBInfo", JSON.stringify(newObj));
  }, [timeElapsed, tempObj, error, accuracy, wpm, cpm]);

  return (
    <React.Fragment>
      {openModal ? (
        <SubmitYourCode LOGOUT={props.LOGOUT} />
      ) : (
        <section className="type-test type-test2">
          <div className="container">
            <div className="type-t-details">
              <div className="type-test-content">
                <div className="logo">
                  <img src={logoImage} alt="" loading="lazy" />
                </div>
                <h1>Test Your Typing Speed</h1>
                <div className="typing-input">
                  <Widget>
                    <Timer
                      startCounting={startCounting}
                      timeElapsed={timeElapsed}
                      setTimeElapsed={setTimeElapsed}
                      setOpenModal={setOpenModal}
                    />
                    <h6>seconds</h6>
                  </Widget>
                  <Widget>
                    <Error
                      totalCharCount={cloud.current.length}
                      countWrongSymbols={countWrongSymbols}
                      setError={setError}
                    />
                    <h6>% errors</h6>
                  </Widget>
                  <Widget>
                    <Accuracy
                      timeElapsed={timeElapsed}
                      totalCharCount={cloud.current.length}
                      countCorrectSymbols={countCorrectSymbols}
                      countTotalEnteredSymbols={countTotalEnteredSymbols}
                      setAccuracy={setAccuracy}
                      setWPM={setWPM}
                      setCPM={setCPM}
                    />
                    <h6>% accuracy</h6>
                  </Widget>
                </div>
                <div className="typing-text">
                  <div className="text-box">
                    <p>
                      {cloud.current.map((word, index) => {
                        let color, bgColor;
                        if (index < userInput.length) {
                          bgColor =
                            word === userInput[index]
                              ? "transparent"
                              : "hsl(0,100%,50%)";
                          color = word === userInput[index] ? "green" : null;
                        }
                        return (
                          <Word
                            text={word}
                            key={index}
                            color={color}
                            bgColor={bgColor}
                          />
                        );
                      })}
                    </p>
                  </div>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Start Typing..."
                    readOnly={openModal}
                    value={userInput}
                    onPaste={(e) => e.preventDefault()}
                    onChange={(e) => processInput(e.target.value)}
                  ></textarea>
                </div>
                <p className="copyright">
                  Copyright 2022. All Rights Reserved.{" "}
                  <Link to={"/main-typing"}>Privacy policy</Link> |{" "}
                  <Link to={"/main-typing"}>Disclaimer</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default MainTyping;
