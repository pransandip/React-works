import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(logger, thunk);

const store = createStore(RootReducer, middlewareEnhancer);
export default store;
