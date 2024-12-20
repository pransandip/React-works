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

// creating store
const store = createStore(reducer, applyMiddleware(logger.default));
console.log(store); // store object

// Action creators
function increment() {
  return { type: "increment" };
}
function decrement() {
  return { type: "decrement" };
}
function incrementByAmount(value) {
  return { type: "incrementByAmount", payload: value };
}

// dispatched action
setInterval(() => store.dispatch(incrementByAmount(5)), 2000);
