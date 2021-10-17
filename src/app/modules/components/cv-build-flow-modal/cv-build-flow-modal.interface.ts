export interface CVBuiledFlowModalProps {
  onClose: () => void;
}

export type CVFormValues = {
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
};
