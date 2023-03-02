import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "./components/pages/header/Header";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  // Define Ref
  const challenge = useRef(null);
  const solution = useRef(null);
  const flowerLifecycle = useRef(null);
  const contactUs = useRef(null);

  // Define Ref team page
  const challenge_ = useRef(null);
  const solution_ = useRef(null);
  const flowerLifecycle_ = useRef(null);

  // Define state
  const [matchURL, setMatchURL] = useState(false);

  // Scroll to section Handler
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  console.log({ matchURL });
  console.log({ challenge, solution, flowerLifecycle });
  return (
    <Router>
      <ReactNotifications />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Header
              scrollToSection={scrollToSection}
              challenge={challenge}
              solution={solution}
              flowerLifecycle={flowerLifecycle}
              contactUs={contactUs}
              matchURL={matchURL}
              challenge_={challenge_}
              solution_={solution_}
              flowerLifecycle_={flowerLifecycle_}
            />
          }
        >
          <Route
            index
            element={
              <Home
                challenge={challenge}
                solution={solution}
                flowerLifecycle={flowerLifecycle}
                contactUs={contactUs}
              />
            }
          />
          <Route
            path="/team"
            element={<Team contactUs={contactUs} setMatchURL={setMatchURL} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
