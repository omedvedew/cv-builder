import { reducer } from "redux-chill";
import { appInit } from "./actions";
import { GeneralState } from "./state";

export const general = reducer(new GeneralState()).on(
  appInit.success,
  (state, payload: boolean) => {
    state.appStatus = payload;
  }
);
