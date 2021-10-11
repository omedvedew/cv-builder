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

export { getUser, signUp };
