import { createStore } from "redux";

// reducer functions
const reducer = (state = { amount: 1 }, action) => {
  if (action.type === "increment") {
    return { amount: state.amount + 1 }; // immutability

    // Wrong approach it will mutate(change) initial state,but output will be correct
    // state.amount = state.amount + 1;
  }
  return state;
};

const store = createStore(reducer); // creating store
console.log(store); // store object

// dispatched action
store.dispatch({ type: "increment" });

// global state
console.log(store.getState());
