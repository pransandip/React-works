import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// ACTION constants key:value pairs
const ACTION = {
  INIT: "init",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT_BY_AMOUNT: "incrementByAmount",
};
Object.freeze(ACTION);

// reducer functions
const reducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case ACTION.INIT:
      return { amount: action.payload };

    case ACTION.INCREMENT:
      return { amount: state.amount + 1 };

    case ACTION.DECREMENT:
      return { amount: state.amount - 1 };

    case ACTION.INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
};

// Async API call
async function getUser() {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  return data;
}

console.log(await getUser());

// ACTION creators
function initUser(value) {
  return { type: ACTION.INIT, payload: value };
}
function increment() {
  return { type: ACTION.INCREMENT };
}
function decrement() {
  return { type: ACTION.DECREMENT };
}
function incrementByAmount(value) {
  return { type: ACTION.INCREMENT_BY_AMOUNT, payload: value };
}

// creating store
const store = createStore(reducer, applyMiddleware(logger.default));
console.log(store); // store object

// dispatched action
setTimeout(() => store.dispatch(initUser(100)), 2000);
