import { reducer } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";
import { getUser } from "./actions";
import { AuthState } from "./state";

export const auth = reducer(new AuthState()).on(
  getUser.success,
  (state, payload: CurrentUser) => {
    state.currentUser = payload;
  }
);
