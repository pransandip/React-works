import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "./Helpers/storage";

import Protected from "./Auth/Protected";
import Login from "./components/login/Login";
import MainTyping from "./components/home/main-typing/MainTyping";
import StartTyping from "./components/home/start-typing/StartTyping";
import SubmitYourCode from "./components/home/submit-your-score/SubmitYourCode";
import SignUp from "./components/signup/SignUp";
import ForgotPassword from "./components/login/forgot-password/ForgotPassword";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  const localDBInfo = Object.create({});
  localDBInfo["seconds"] = "";
  localDBInfo["accuracy"] = "";
  localDBInfo["errors"] = "";
  localDBInfo["wpm"] = "";
  localDBInfo["cpm"] = "";
  localDBInfo["userId"] = "";

  useEffect(() => {
    storage.set("localDBInfo", localDBInfo);
  }, [localDBInfo]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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
