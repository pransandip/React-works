import { accountReducer } from "./account.reducer";
import { bonusReducer } from "./bonus.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  bonus: bonusReducer,
});

export default rootReducer;
