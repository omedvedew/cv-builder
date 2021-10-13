import { reducer } from "redux-chill";
import { SoftSkill, TechSkill } from "../../../../typescript/types";
import { getAllSoftSkills, getAllTechSkills } from "./actions";
import { DashboardState } from "./state";

const state = new DashboardState();
const dashboard = reducer(state)
  .on(getAllTechSkills.success, (state, payload: TechSkill) => {
    state.skills = { ...state.skills, ...payload };
  })
  .on(getAllSoftSkills.success, (state, payload: SoftSkill) => {
    state.skills = { ...state.skills, ...payload };
  });

export { dashboard };
