import { make } from "redux-chill";
import { SoftSkill, TechSkill } from "../../../../typescript/types";

const getAllTechSkills = make("[dashboard] getAllTechSkills").stage(
  "success",
  (payload: TechSkill) => payload
);

const getAllSoftSkills = make("[dashBoard] getAllSoftSkills").stage(
  "success",
  (payload: SoftSkill) => payload
);

export { getAllTechSkills, getAllSoftSkills };
