import { put } from "@redux-saga/core/effects";
import { Saga } from "redux-chill";
import { appInit } from "./actions";

export class GeneralSaga {
  @Saga(appInit)
  public *appInit() {
    try {
      yield put(appInit.success(true));
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }
}
