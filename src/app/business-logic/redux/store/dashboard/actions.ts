import { make } from "redux-chill";
import { Resume, SoftSkill, TechSkill } from "../../../../typescript/types";

const getAllTechSkills = make("[dashboard] getAllTechSkills").stage(
  "success",
  (payload: TechSkill) => payload
);

const getAllSoftSkills = make("[dashBoard] getAllSoftSkills").stage(
  "success",
  (payload: SoftSkill) => payload
);

const saveCV = make("[dashboard] saveCV")
  .stage((payload: Resume) => payload)
  .stage("success", (payload: Resume) => payload);

const getCVs = make("[dashboard] getCVs")
  .stage((payload: string) => payload)
  .stage("success", (payload: Array<Resume>) => payload);

export { getAllTechSkills, getAllSoftSkills, saveCV, getCVs };
