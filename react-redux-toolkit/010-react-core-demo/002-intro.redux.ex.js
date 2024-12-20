import { createStore } from "redux";

const history = [];

// reducer functions
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 }; // immutability

    // Wrong approach it will change initial state, but output will be correct
    // state.amount = state.amount + 1;
  }
  return state;
}

const store = createStore(reducer); // creating store
console.log(store); // store object

// subscribe function
store.subscribe(() => {
  // whenever reducer func execute this func also get executed
  history.push(store.getState());
  console.log(history);
});

// dispatched action
setInterval(() => store.dispatch({ type: "increment" }), 2000);
