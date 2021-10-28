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

export type Resume = {
  firstName?: string;
  lastName?: string;
  location?: { country: string; city: string };
  contacts?: { email: string; [key: string]: string };
  intro?: string;
  techSkills?: Array<string>;
  softSkills?: Array<string>;
  experience?: {
    [name: string]: {
      company: string;
      period: { from: string; to: string };
      position: string;
      duties?: string;
    };
  };
  education?: {
    [name: string]: {
      edu: string;
      period: { from: string; to: string };
      specialization: string;
      achievements?: string;
    };
  };
  background?: string;
  userId: string;
};
