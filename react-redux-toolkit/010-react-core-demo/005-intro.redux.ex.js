import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// ACTION constants key:value pairs
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT_BY_AMOUNT: "incrementByAmount",
};
Object.freeze(ACTION);

// reducer functions
const reducer = (state = { amount: 1 }, action) => {
  if (action.type === ACTION.INCREMENT) {
    return { amount: state.amount + 1 };
  }
  if (action.type === ACTION.DECREMENT) {
    return { amount: state.amount - 1 };
  }
  if (action.type === ACTION.INCREMENT_BY_AMOUNT) {
    return { amount: state.amount + action.payload };
  }
  return state;
};

// creating store
const store = createStore(reducer, applyMiddleware(logger.default));
console.log(store); // store object

// ACTION creators
function increment() {
  return { type: ACTION.INCREMENT };
}
function decrement() {
  return { type: ACTION.DECREMENT };
}
function incrementByAmount(value) {
  return { type: ACTION.INCREMENT_BY_AMOUNT, payload: value };
}

// dispatched action
setInterval(() => store.dispatch(increment()), 3000);
