import { accountReducer } from "./account/account.reducer";
import { bonusReducer } from "./bonus/bonus.reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  account: accountReducer,
  bonus: bonusReducer,
});

export default RootReducer;
