import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history),
  ),
);

export default store;
