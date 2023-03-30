import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SubmitYourCode from "../submit-your-score/SubmitYourCode";

// components
import logoImage from "./logo.png";
import Word from "../../UI/word/Word";
import Widget from "../../UI/widgets/Widget";
import Accuracy from "./calculations/Accuracy";
import Timer from "./calculations/Timer";
import Error from "./calculations/Error";
import storage from "../../../Helpers/storage";

// * Importing Random strings
import getRandomText from "../../../Helpers/get.random.text";

const MainTyping = (props) => {
  // reading data from session object
  let tempObj = storage.get("localDBInfo", {});

  // get random text
  const wordCloud = getRandomText();

  // reading from env file
  const SECONDS = process.env.REACT_APP_SECONDS || 250;

  /*------ Defined State -------*/
  const [userInput, setUserInput] = useState("");
  const [userInputArray, setUserInputArray] = useState([]);
  const [spaceCheck, setSpaceCheck] = useState(false);
  const [countCorrectSymbols, setCountCorrectSymbols] = useState(0);

  const [timeElapsed, setTimeElapsed] = useState(SECONDS);
  const [startCounting, setStartCounting] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [accuracy, setAccuracy] = useState("");
  const [error, setError] = useState("");
  const [wpm, setWPM] = useState("");
  const [cpm, setCPM] = useState("");

  // Convert to Word Tokens
  const getWordCloud = () => wordCloud.split(" ");

  // Defined ref
  const cloud = useRef(getWordCloud());

  /*------- Processing user input -------*/
  const processInput = (value) => {
    // * inputWords array always ends with extra space element ["abc", ""] like this.
    const inputWords = value.split(" ");

    // * stop
    // if (inputWords.length > cloud.current.length + 1) {
    //   return;
    // }

    // * true when last element is empty
    setSpaceCheck(inputWords[inputWords.length - 1] === "");

    if (value.endsWith(" ")) {
      // the user has finished this word
      const input = value.trim();

      setUserInputArray(input.split(" "));
    }

    // * start timer
    if (!startCounting) {
      setStartCounting(true);
    }

    // * update userInput
    setUserInput(value);

    // * count correct character
    setCountCorrectSymbols(
      value.split(" ").filter((word, i) => word === cloud.current[i]).length
    );

    if (inputWords.length === cloud.current.length + 1) {
      // overflow
      setStartCounting(false);
      setTimeout(() => {
        setOpenModal(true);
      }, 500);
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
    storage.set("localDBInfo", newObj);
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
                      totalWordCount={cloud.current.length}
                      wrongWords={
                        userInputArray.filter(
                          (word, i) => word !== cloud.current[i]
                        ).length
                      }
                      setError={setError}
                    />
                    <h6>errors</h6>
                  </Widget>
                  <Widget>
                    <Accuracy
                      timeElapsed={timeElapsed}
                      totalWordCount={cloud.current.length}
                      countCorrectWords={countCorrectSymbols}
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
                        if (index < userInputArray.length) {
                          bgColor =
                            word === userInputArray[index]
                              ? "transparent"
                              : "hsl(0,100%,50%)";
                          color =
                            word === userInputArray[index] ? "green" : null;
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
                    onKeyDown={(e) => {
                      if (e.key === " ") {
                        if (spaceCheck) {
                          e.preventDefault();
                        }
                      }
                      if (e.key === "Backspace") {
                        if (
                          userInputArray[0] &&
                          userInputArray.length === 1 &&
                          userInput === ""
                        ) {
                          setUserInputArray([]);
                        }
                      }
                    }}
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
