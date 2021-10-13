import { call, put } from "@redux-saga/core/effects";
import { Saga } from "redux-chill";
import { SoftSkill, TechSkill } from "../../../../typescript/types";
import { SagasContext } from "../../config";
import { getAllSoftSkills, getAllTechSkills } from "./actions";

export class DashboardSaga {
  @Saga(getAllTechSkills)
  public *getAllTechSkills(_: any, { api }: SagasContext) {
    try {
      const response: TechSkill = yield call(api.dashboard.getAllTechSkills);
      yield put(getAllTechSkills.success(response));
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }

  @Saga(getAllSoftSkills)
  public *getAllSoftSkills(_: any, { api }: SagasContext) {
    try {
      const response: SoftSkill = yield call(api.dashboard.getAllSoftSkills);
      yield put(getAllSoftSkills.success(response));
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }
}
