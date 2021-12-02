import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import modalReducer from "./modal";
import authReducer from "./auth";
import departmentReducer from "./department";

export default function rootReducer(history) {
  return combineReducers({
    modal: modalReducer,
    auth: authReducer,
    department: departmentReducer,
    router: connectRouter(history),
  })
}
