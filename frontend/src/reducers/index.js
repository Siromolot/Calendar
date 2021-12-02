import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import modalReducer from "./modal";
import authReducer from "./auth";
import departmentReducer from "./department";
import themeReducer from "./theme";

export default function rootReducer(history) {
  return combineReducers({
    modal: modalReducer,
    auth: authReducer,
    department: departmentReducer,
    theme: themeReducer,
    router: connectRouter(history),
  })
}
