import { useReducer } from "react";
import { reducer } from "./reducers";
import "./ReducerEx.css";

const ReducerEx2 = () => {
  // Define useReducer Hook it will take reducer function and a initial state
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <h1 id="h1State">{state}</h1>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <span> </span>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
};

export default ReducerEx2;
