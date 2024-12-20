import { useReducer } from "react";
import "./ReducerEx.css";

// reducer it's a pure function its takes state and a action
const initialState = 10;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") return state + 1; // not creating new object updating same state
  if (action.type === "DECREMENT") return state - 1;
};

const ReducerEx1 = () => {
  // Define useReducer Hook it will take reducer function and a initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <span> </span>
      <h1 id="h1State">{state}</h1>
      <span> </span>
      <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </div>
  );
};

export default ReducerEx1;
