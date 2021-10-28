import { reducer } from "redux-chill";
import { Resume, SoftSkill, TechSkill } from "../../../../typescript/types";
import { getAllSoftSkills, getAllTechSkills, getCVs, saveCV } from "./actions";
import { DashboardState } from "./state";

const state = new DashboardState();
const dashboard = reducer(state)
  .on(getAllTechSkills.success, (state, payload: TechSkill) => {
    state.skills = { ...state.skills, ...payload };
  })
  .on(getAllSoftSkills.success, (state, payload: SoftSkill) => {
    state.skills = { ...state.skills, ...payload };
  })
  .on(saveCV.success, (state, payload: Resume) => {
    state.resumes = [...state.resumes, payload];
  })
  .on(getCVs.success, (state, payload: Array<Resume>) => {
    state.resumes = [...state.resumes, ...payload];
  });

export { dashboard };
