import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Protected from "./Auth/Protected";
import Login from "./components/login/Login";
import MainTyping from "./components/home/main-typing/MainTyping";
import StartTyping from "./components/home/start-typing/StartTyping";
import SubmitYourCode from "./components/home/submit-your-score/SubmitYourCode";
import SignUp from "./components/signup/SignUp";

function App() {
  const localDBInfo = Object.create({});
  localDBInfo["seconds"] = "";
  localDBInfo["accuracy"] = "";
  localDBInfo["errors"] = "";
  localDBInfo["wpm"] = "";
  localDBInfo["cpm"] = "";

  useEffect(() => {
    localStorage.setItem("localDBInfo", JSON.stringify(localDBInfo));
  }, [localDBInfo]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/start-typing"
          element={<Protected Component={StartTyping} />}
        />
        <Route
          path="/main-typing"
          element={<Protected Component={MainTyping} />}
        />
        <Route
          path="/submit-your-score"
          element={<Protected Component={SubmitYourCode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
