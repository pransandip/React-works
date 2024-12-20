import { createStore } from "redux";

// store
const store = createStore(reducer);

const history = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  return state;
}

// subscribe function
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// dispatched action
setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
