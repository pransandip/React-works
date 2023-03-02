import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

// components
import Accuracy from "../../../Helpers/Accuracy";
import Timer from "../../../Helpers/Timer";
import Error from "../../../Helpers/Error";
import Widget from "../../UI/widgets/Widget";
import Word from "../../UI/word/Word";
import logoImage from "./logo.png";

// * Importing localised strings
import strings from "../../../Language/word_cloud.json";

const MainTyping = () => {
  const navigate = useNavigate();

  // reading data from session object
  let tempObj = JSON.parse(localStorage.localDBInfo);

  // Making copy of word_vec
  const wordCloud = strings.word_vec;

  const SECONDS = process.env.REACT_APP_SECONDS || 10;

  /*------ Defined State -------*/
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(SECONDS);
  const [startCounting, setStartCounting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [finishedInTime, setFinishedInTime] = useState(false);
  const [error, setError] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const [wpm, setWPM] = useState("");

  // Convert to Word Tokens
  const getWordCloud = () => wordCloud.split(" ");

  // Defined ref
  const cloud = useRef(getWordCloud());

  /*------- Processing user input -------*/
  const processInput = (value) => {
    // * stop
    if (activeWordIndex === cloud.current.length) {
      return;
    }
    // * start timer
    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      // the user has finished this word
      if (activeWordIndex === cloud.current.length - 1) {
        // overflow
        setStartCounting(false);
        setFinishedInTime(true);
        setOpenModal(true);
      }

      setActiveWordIndex((index) => index + 1);
      setUserInput((data) => data + " ");

      // correct word
      setCorrectWordArray((data) => {
        //const word = value.trim();
        const inputWords = value.split(" "); // splitting the input string array
        const word = inputWords[inputWords.length - 2]; // taking 2nd last element of the array
        const newResult = [...data];
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  };

  // timeout
  useEffect(() => {
    if (openModal) {
      swal({
        title: finishedInTime ? "Success" : "Timeout",
        text: finishedInTime
          ? "Congrats! you finish it within time, Please! check your score"
          : "Please! check your score",
        icon: finishedInTime ? "success" : "error",
        buttons: {
          restart: {
            text: "RESTART",
            value: "restart",
          },
          catch: {
            text: "SCORE",
            value: "score",
          },
        },
      }).then((value) => {
        if (value === "restart") {
          window.location.reload(true);
        }
        if (value === "score") {
          navigate("/submit-your-score");
        }
      });
    }
  }, [navigate, openModal, finishedInTime]);

  // setting session object
  useEffect(() => {
    let seconds = process.env.REACT_APP_SECONDS - timeElapsed;
    let newObj = {
      ...tempObj,
      seconds: seconds,
      errors: error,
      accuracy: accuracy,
      wpm: wpm,
    };
    localStorage.setItem("localDBInfo", JSON.stringify(newObj));
  }, [timeElapsed, tempObj, error, accuracy, wpm]);

  return (
    <React.Fragment>
      <section className="type-test type-test2">
        <div className="container">
          <div className="type-t-details">
            <div className="type-test-content">
              <div className="logo">
                <img src={logoImage} alt="" />
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
                    wrongWords={correctWordArray.filter((item) => !item).length}
                    setError={setError}
                  />
                  <h6>errors</h6>
                </Widget>
                <Widget>
                  <Accuracy
                    timeElapsed={timeElapsed}
                    totalWordCount={cloud.current.length}
                    correctWords={correctWordArray.filter(Boolean).length}
                    setAccuracy={setAccuracy}
                    setWPM={setWPM}
                  />
                  <h6>% accuracy</h6>
                </Widget>
              </div>
              <div className="typing-text">
                <div className="text-box">
                  <p>
                    {cloud.current.map((word, index) => {
                      return (
                        <Word
                          text={word}
                          key={index}
                          active={index === activeWordIndex}
                          correct={correctWordArray[index]}
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
                    if (e.key === "Backspace") {
                      e.preventDefault();
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
    </React.Fragment>
  );
};

export default MainTyping;
