// Action creators
export const incNumber = (value) => ({ type: "INCREMENT", payload: value });
export const decNumber = (value) => ({ type: "DECREMENT", payload: value });

// Action Object key value pairs
export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
