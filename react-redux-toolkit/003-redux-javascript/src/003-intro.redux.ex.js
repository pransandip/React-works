import { createStore } from "redux";

// store
const store = createStore(reducer);

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  return state;
}

// subscribe function
store.subscribe(() => {
  console.log(store.getState());
});

// dispatched action
setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
