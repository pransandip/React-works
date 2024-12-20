import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middlewareEnhancer);
export default store;
