import { CVFormValues } from "../../cv-build-flow-modal.interface";

export interface Stage2Props {
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: (values: CVFormValues) => void;
}
