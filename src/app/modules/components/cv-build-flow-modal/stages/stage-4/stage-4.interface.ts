import { CVFormValues } from "../../cv-build-flow-modal.interface";

export interface Stage4Props {
  onClose: () => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: (values: CVFormValues) => void;
}
