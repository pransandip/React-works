import { useState } from "react";
import "../App.css";

export default function ChangeDate() {
  const [date, setDate] = useState(new Date());
  const [intvl, setIntvl] = useState();

  const handelChange = () => {
    let interval = setInterval(() => {
      setDate(new Date()); // updating state every second
    }, 1000);
    setIntvl(interval); // updating state once when this Func is clicked
  };

  return (
    <div className="App">
      <h1>{date.toLocaleTimeString()}</h1>
      <button
        style={{
          width: "100px",
          hight: "20px",
          background: "skyblue",
          cursor: "pointer",
        }}
        onClick={handelChange}
      >
        start
      </button>
      <button
        style={{
          width: "100px",
          hight: "20px",
          background: "skyblue",
          cursor: "pointer",
        }}
        onClick={() => clearInterval(intvl)}
      >
        stop
      </button>
    </div>
  );
}
