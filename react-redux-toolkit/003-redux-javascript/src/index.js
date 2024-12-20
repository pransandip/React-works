import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//* Action constants key:value pairs
const Action = {
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
Object.freeze(Action);

//* create store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//* log history
const history = [];

//* reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case Action.GET_ACC_USER_FULFILLED:
      return { amount: action.payload, pending: false };

    case Action.GET_ACC_USER_REJECTED:
      return { ...state, error: action.error, pending: false };

    case Action.GET_ACC_USER_PENDING:
      return { ...state, pending: true };

    case Action.INCREMENT:
      return { amount: state.amount + 1 };

    case Action.DECREMENT:
      return { amount: state.amount - 1 };

    case Action.INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case Action.INCREMENT_BONUS:
      return { points: state.points + 1 };

    case Action.INCREMENT_BY_AMOUNT:
      //* extra cases linked to account reducer
      if (action.payload >= 100) return { points: state.points + 1 };

    default:
      return state;
  }
}

//* Action creator
const getUserAccount = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
};
const getUserAccountFulfilled = (value) => ({
  type: Action.GET_ACC_USER_FULFILLED,
  payload: value,
});
const getUserAccountRejected = (error) => ({
  type: Action.GET_ACC_USER_REJECTED,
  error: error,
});
const getUserAccountPending = () => ({
  type: Action.GET_ACC_USER_PENDING,
});

const increment = () => ({ type: Action.INCREMENT });
const incrementByAmount = (value) => {
  return { type: Action.INCREMENT_BY_AMOUNT, payload: value };
};

const incrementBonus = () => ({ type: Action.INCREMENT_BONUS });

//* dispatch actions
setTimeout(() => {
  store.dispatch(getUserAccount(2));
  // store.dispatch(increment());
  // store.dispatch(incrementByAmount(100));
  // store.dispatch(incrementBonus());
}, 2000);

//* subscribe(): some changes on store means (on reducers) its fires and run
// store.subscribe(() => {
//   // history.push(store.getState());
//   // console.log(history);
//   // global state
//   console.log(store.getState());
// });
