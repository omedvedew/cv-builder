import { combineReducers } from "redux";
import { auth } from "../store/auth";
import { general } from "../store/general";

export const rootReducer = combineReducers({
  auth,
  general,
});

export type State = ReturnType<typeof rootReducer>;
