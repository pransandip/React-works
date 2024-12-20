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
  GET_ACC_USER_PENDING: "account/getUser/pending",
  GET_ACC_USER_FULFILLED: "account/getUser/fulfilled",
  GET_ACC_USER_REJECTED: "account/getUser/rejected",
  // bonus actions
  INCREMENT_BONUS: "bonus/increment",
};
Object.freeze(ACTION);

// reducer functions
const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case ACTION.GET_ACC_USER_FULFILLED:
      return { amount: action.payload, pending: false };

    case ACTION.GET_ACC_USER_REJECTED:
      return { ...state, error: action.error, pending: false };

    case ACTION.GET_ACC_USER_PENDING:
      return { ...state, pending: true };

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
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}

// ACTION creators
// account
function getUserAccountPending() {
  return { type: ACTION.GET_ACC_USER_PENDING };
}
function getUserAccountFulfilled(value) {
  return { type: ACTION.GET_ACC_USER_FULFILLED, payload: value };
}
function getUserAccountRejected(error) {
  return { type: ACTION.GET_ACC_USER_REJECTED, error: error };
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
setTimeout(() => store.dispatch(getUserAccount(2)), 2000);
