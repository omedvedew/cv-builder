import { Formik } from "formik";
import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../business-logic/redux/config";
import { Stage2Props } from "./stage-2.interface";
import "./stage-2.scss";

const Stage2: React.FC<Stage2Props> = ({
  onSubmit,
  onClose,
  onBack,
  onNext,
}) => {
  const { skills } = useSelector((state: State) => state.dashboard);
  const [isTechSkillsOpen, setIsTechSkillsOpen] =
    React.useState<boolean>(false);
  const [slectedTechSkills, setSelectedTechSkills] =
    React.useState<Array<string>>();
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] =
    React.useState<boolean>(false);
  const [slectedSoftSkills, setSelectedSoftSkills] =
    React.useState<Array<string>>();

  return (
    <>
      <div className="stage-content">
        <h3>Stage-2: Skills</h3>
        <Formik
          initialValues={{
            techSkills: [],
            softSkills: [],
          }}
          onSubmit={(values) => {
            onSubmit(values);
            onNext();
          }}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-field select-field tech-skills">
                <label htmlFor="techSkills" className="form-label">
                  Tech Skills:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="techSkills"
                  placeholder="React"
                  onClick={() => setIsTechSkillsOpen(true)}
                />
                {skills?.techSkills?.length > 0 && isTechSkillsOpen === true && (
                  <div className="options-container">
                    {skills.techSkills.map(
                      (item: { id: string; name: string }) => (
                        <span key={item.id}>{item.name}</span>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="form-field select-field soft-skills">
                <label htmlFor="softSkills" className="form-label">
                  Soft Skills:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="softSkills"
                  placeholder="Patience"
                  onClick={() => setIsSoftSkillsOpen(true)}
                />
                {skills?.softSkills?.length > 0 && isSoftSkillsOpen === true && (
                  <div className="options-container">
                    {skills.softSkills.map(
                      (item: { id: string; name: string }) => (
                        <span key={item.id}>{item.name}</span>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="form-field fullwidth controls">
                <button
                  className="btn btn-outline-secondary"
                  type="reset"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <div>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={onBack}
                  >
                    Back
                  </button>
                  <button className="btn btn-outline-primary" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "32%" }}
          aria-valuenow={32}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  );
};

export { Stage2 };
