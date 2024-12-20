import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// reducer functions
const reducer = (state = { amount: 1 }, action) => {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(logger.default)); // creating store
console.log(store); // store object

// dispatched action
setInterval(
  () => store.dispatch({ type: "incrementByAmount", payload: 4 }),
  3000
);
