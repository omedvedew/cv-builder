import { CVFormValues } from "../../cv-build-flow-modal.interface";

export interface Stage6Props {
  onClose: () => void;
  onBack: () => void;
  onSubmit: () => void;
  values?: CVFormValues;
}
