import { useState } from "react";
import { DefaultPropsBasics } from "./components/PropsBasics";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Card from "./UI/Card";

export default function App() {
  const [count, setCount] = useState(0);

  // return React.createElement(
  //   "div",
  //   { className: "card" },
  //   React.createElement("h2", {}, "Let's get started!")
  // );

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Card title="Effect Basics">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Card>
      <Card title="Props Basics">
        <DefaultPropsBasics />
        <DefaultPropsBasics name="alex" age={29} address="london, 60053" />
      </Card>
    </>
  );
}
