import { call, put } from "@redux-saga/core/effects";
import { Saga } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";
import { SagasContext } from "../../config";
import { getUser, signUp } from "./actions";

export class AuthSaga {
  @Saga(getUser)
  public *getUser(_: any, { api, history }: SagasContext) {
    try {
      const response: CurrentUser = yield call(api.auth.getUser);
      yield put(getUser.success(response));
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }

  @Saga(signUp)
  public *signUp(
    payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
    { api }: SagasContext
  ) {
    try {
      const response: unknown = yield call(api.auth.signUp, payload);
      if (response) {
        yield put(signUp.success(payload));
      }
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }
}
