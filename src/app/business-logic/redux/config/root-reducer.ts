import { combineReducers } from "redux";
import { auth, AuthState } from "../store/auth";
import { dashboard, DashboardState } from "../store/dashboard";
import { general, GeneralState } from "../store/general";

export const rootReducer = combineReducers({
  auth,
  general,
  dashboard,
});

export type State = {
  auth: AuthState;
  general: GeneralState;
  dashboard: DashboardState;
};
