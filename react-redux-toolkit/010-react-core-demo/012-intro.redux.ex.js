import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

// ACTION constants key:value pairs
const ACTION = {
  // account actions
  INIT: "account/init",
  INCREMENT: "account/increment",
  DECREMENT: "account/decrement",
  INCREMENT_BY_AMOUNT: "account/incrementByAmount",
  // bonus actions
  INCREMENT_BONUS: "bonus/increment",
};
Object.freeze(ACTION);

// reducer functions
const accountReducer = (state = { amount: 1 }, action) => {
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

const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case ACTION.INCREMENT_BONUS:
      return { points: state.points + 1 };

    // extra cases
    case ACTION.INCREMENT_BY_AMOUNT:
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      }

    default:
      return state;
  }
};

// Async ACTION creators
function getUserAccount(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data?.amount));
  };
}

// ACTION creators
// account
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
//bonus
const incrementBonus = () => ({ type: ACTION.INCREMENT_BONUS });

// creating store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);
// console.log(store); // store object

// dispatched action
setTimeout(() => store.dispatch(getUserAccount(1)), 2000);
