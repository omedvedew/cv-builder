import { combineReducers } from "redux";
import { auth, AuthState } from "../store/auth";
import { general, GeneralState } from "../store/general";

export const rootReducer = combineReducers({
  auth,
  general,
});

export type State = {
  auth: AuthState;
  general: GeneralState;
};
