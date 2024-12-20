export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1; // not creating new object updating same state
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};
