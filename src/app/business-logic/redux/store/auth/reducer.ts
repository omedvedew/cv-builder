import { reducer } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";
import { getUser, signUp } from "./actions";
import { AuthState } from "./state";

export const auth = reducer(new AuthState())
  .on(getUser.success, (state, payload: CurrentUser) => {
    state.currentUser = payload;
  })
  .on(signUp.success, (state, payload) => {
    state.currentUser = payload;
  });
