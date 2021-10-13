export type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  errorMessage?: string;
};

export type TechSkill = {
  techSkills: Array<{
    name: string;
    label: "techSkill";
  }>;
  errorMessage?: string;
};

export type SoftSkill = {
  softSkills: Array<{
    name: string;
    label: "softSkill";
  }>;
  errorMessage?: string;
};
