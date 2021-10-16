import * as React from "react";
import { useDispatch } from "react-redux";
import {
  getAllSoftSkills,
  getAllTechSkills,
} from "../../../business-logic/redux/store/dashboard";
import {
  CVBuiledFlowModalProps,
  CVFormValues,
} from "./cv-build-flow-modal.interface";
import { Stage1, Stage2 } from "./stages";

const CVBuildFlowModal: React.FC<CVBuiledFlowModalProps> = ({ onClose }) => {
  const [currentStage, setCurrentStage] = React.useState<number>(1);
  const [formValues, setFormValues] = React.useState<CVFormValues>();

  const dispatch = useDispatch();

  const handleSubmit = (values: CVFormValues) => {
    setFormValues((prevState) => ({ ...prevState, ...values }));
  };

  React.useEffect(() => {
    dispatch(getAllTechSkills());
    dispatch(getAllSoftSkills());
  }, [dispatch]);

  React.useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  switch (currentStage) {
    case 1:
      return (
        <Stage1
          onClose={onClose}
          onNext={() => setCurrentStage(2)}
          onSubmit={handleSubmit}
        />
      );

    case 2:
      return (
        <Stage2
          onClose={onClose}
          onBack={() => setCurrentStage(1)}
          onNext={() => setCurrentStage(3)}
          onSubmit={handleSubmit}
        />
      );

    default:
      return <></>;
  }
};

export { CVBuildFlowModal };
