import { reducer } from "redux-chill";
import { logIn } from ".";
import { CurrentUser } from "../../../../typescript/types";
import { getUser, logOut, signUp } from "./actions";
import { AuthState } from "./state";

const state = new AuthState();
export const auth = reducer(state)
  .on(getUser.success, (state, payload: CurrentUser) => {
    state.currentUser = payload;
  })
  .on(signUp.success, (state, payload: CurrentUser) => {
    state.currentUser = payload;
  })
  .on(logOut.success, (state, payload: CurrentUser) => {
    state.currentUser = payload;
  })
  .on(logIn.success, (state, payload: CurrentUser) => {
    state.currentUser = payload;
  });
