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
};
