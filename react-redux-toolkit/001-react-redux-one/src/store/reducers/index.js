import { combineReducers } from "redux";
import changeTheNumber from "./counter/counter";

const RootReducer = combineReducers({
  counter: changeTheNumber,
});

export default RootReducer;
