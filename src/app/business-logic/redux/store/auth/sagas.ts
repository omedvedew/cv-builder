import { call, put } from "@redux-saga/core/effects";
import { Saga } from "redux-chill";
import { CurrentUser } from "../../../../typescript/types";
import { SagasContext } from "../../config";
import { getUser } from "./actions";

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
}
