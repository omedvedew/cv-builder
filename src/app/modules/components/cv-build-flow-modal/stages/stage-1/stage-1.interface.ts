import { CVFormValues } from "../../cv-build-flow-modal.interface";

export interface Stage1Props {
  onClose: () => void;
  onNext: () => void;
  onSubmit: (values: CVFormValues) => void;
}
