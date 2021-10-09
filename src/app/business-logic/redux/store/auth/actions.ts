import { make } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";

const getUser = make("[auth] getUser").stage(
  "success",
  (payload: CurrentUser) => payload
);

export { getUser };
