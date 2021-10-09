import { make } from "redux-chill";

const appInit = make("[general] appInit").stage(
  "success",
  (payload: boolean) => payload
);

export { appInit };
