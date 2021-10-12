import { make } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";

const getUser = make("[auth] getUser").stage(
  "success",
  (payload: CurrentUser) => payload
);

const signUp = make("[auth] basicSignUp")
  .stage(
    (payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) => payload
  )
  .stage("success", (payload) => payload);

const logOut = make("[auth] logOut").stage(
  "success",
  (payload: CurrentUser) => payload
);

const logIn = make("[auth] logIn")
  .stage((payload: { email: string; password: string }) => payload)
  .stage("success", (payload: CurrentUser) => payload);

export { getUser, signUp, logOut, logIn };
