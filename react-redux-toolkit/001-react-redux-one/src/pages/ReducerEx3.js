import { useReducer } from "react";
import "./ReducerEx.css";

// reducer it's a pure function its takes state and a action
const initialState = {
  firstNumber: 0,
  secondNumber: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstNumber: state.firstNumber + action.payload };
    case "decrement":
      return { ...state, firstNumber: state.firstNumber - action.payload };
    case "increment 5":
      return { ...state, firstNumber: state.firstNumber + action.payload };
    case "decrement 5":
      return { ...state, firstNumber: state.firstNumber - action.payload };
    case "increment2":
      return { ...state, secondNumber: state.secondNumber + action.payload };
    case "decrement2":
      return { ...state, secondNumber: state.secondNumber - action.payload };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

export default function ReducerEx3() {
  // Define useReducer Hook it will take reducer function and a initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ paddingBottom: "60px" }}>
      <h1 id="h1State">{state.firstNumber}</h1>
      <h1 id="h1State">{state.secondNumber}</h1>
      <br />
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        INCREMENT
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        DECREMENT
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment 5", payload: 5 })}
      >
        INCREMENT 5
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement 5", payload: 5 })}
      >
        DECREMENT 5
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment2", payload: 1 })}
      >
        2ND COUNTER +
      </button>
      <span> </span>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement2", payload: 1 })}
      >
        2ND COUNTER -
      </button>
      <span> </span>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        RESET
      </button>
    </div>
  );
}
