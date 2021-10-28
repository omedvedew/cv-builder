import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSoftSkills,
  getAllTechSkills,
  saveCV,
} from "../../../business-logic/redux/store/dashboard";
import {
  CVBuiledFlowModalProps,
  CVFormValues,
} from "./cv-build-flow-modal.interface";
import { Stage1, Stage2, Stage3, Stage4, Stage5, Stage6 } from "./stages";
import "./cv-build-flow-modal.scss";
import { State } from "../../../business-logic/redux/config";

const CVBuildFlowModal: React.FC<CVBuiledFlowModalProps> = ({ onClose }) => {
  const { currentUser } = useSelector((state: State) => state.auth);
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

    case 3:
      return (
        <Stage3
          onClose={onClose}
          onBack={() => setCurrentStage(2)}
          onNext={() => setCurrentStage(4)}
          onSubmit={handleSubmit}
        />
      );

    case 4:
      return (
        <Stage4
          onClose={onClose}
          onBack={() => setCurrentStage(3)}
          onNext={() => setCurrentStage(5)}
          onSubmit={handleSubmit}
        />
      );

    case 5:
      return (
        <Stage5
          onClose={onClose}
          onBack={() => setCurrentStage(4)}
          onNext={() => setCurrentStage(6)}
          onSubmit={handleSubmit}
        />
      );

    case 6:
      return (
        <Stage6
          onClose={onClose}
          onBack={() => setCurrentStage(4)}
          onSubmit={() => {
            console.log(formValues);
            if (currentUser?.id) {
              dispatch(saveCV({ ...formValues, userId: currentUser.id }));
            }
            setCurrentStage(7);
          }}
          values={formValues}
        />
      );

    case 7:
      return (
        <>
          <div className="stage-content" style={{ marginBottom: "20px" }}>
            <div className="alert alert-success" role="alert">
              Your CV was successfuly generated!
            </div>
            <button
              onClick={() => {
                if (onClose) {
                  setCurrentStage(1);
                  onClose();
                }
              }}
              className="btn btn-primary"
            >
              close
            </button>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </>
      );

    default:
      return <></>;
  }
};

export { CVBuildFlowModal };
