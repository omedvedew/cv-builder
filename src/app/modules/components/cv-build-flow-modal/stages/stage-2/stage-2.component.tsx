import { Formik } from "formik";
import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../business-logic/redux/config";
import { useClickAway } from "../../../../../utils";
import { Stage2Props } from "./stage-2.interface";
import { v4 as uuid } from "uuid";

const Stage2: React.FC<Stage2Props> = ({
  onSubmit,
  onClose,
  onBack,
  onNext,
}) => {
  const { skills } = useSelector((state: State) => state.dashboard);
  const [isTechSkillsOpen, setIsTechSkillsOpen] =
    React.useState<boolean>(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] =
    React.useState<boolean>(false);

  const techRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const softRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  useClickAway(techRef, () => setIsTechSkillsOpen(false), isTechSkillsOpen);
  useClickAway(softRef, () => setIsSoftSkillsOpen(false), isSoftSkillsOpen);

  return (
    <>
      <div className="stage-content">
        <h3>Stage-2: Skills</h3>
        <Formik
          initialValues={
            {
              techSkills: [],
              softSkills: [],
            } as { techSkills: Array<string>; softSkills: Array<string> }
          }
          onSubmit={(values) => {
            onSubmit(values);
            onNext();
          }}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-field select-field tech-skills">
                <label htmlFor="techSkills" className="form-label">
                  Tech Skills:{" "}
                  {values?.techSkills?.length > 0 &&
                    values.techSkills.map((item) => (
                      <button
                        style={{ fontSize: "12px" }}
                        type="button"
                        onClick={() =>
                          setFieldValue(
                            "techSkills",
                            values?.techSkills.filter((val) => val !== item)
                          )
                        }
                        className="btn btn-outline-info"
                        key={uuid()}
                      >
                        {item}
                        &nbsp;&nbsp;&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    ))}
                </label>
                <input
                  readOnly
                  type="text"
                  className="form-control select-input"
                  id="techSkills"
                  placeholder="E.g React"
                  onClick={() => setIsTechSkillsOpen(true)}
                />
                {skills?.techSkills?.length > 0 && isTechSkillsOpen === true && (
                  <div ref={techRef} className="options-container">
                    {skills.techSkills.map(
                      (item: { id: string; name: string }) => (
                        <span
                          key={uuid()}
                          onClick={() => {
                            if (!values?.techSkills.includes(item.name)) {
                              setFieldValue("techSkills", [
                                ...values.techSkills,
                                item.name,
                              ]);
                            }
                            setIsTechSkillsOpen(false);
                          }}
                        >
                          {item.name}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="form-field select-field soft-skills">
                <label htmlFor="softSkills" className="form-label">
                  Soft Skills:{" "}
                  {values?.softSkills?.length > 0 &&
                    values.softSkills.map((item) => (
                      <button
                        style={{ fontSize: "12px" }}
                        type="button"
                        onClick={() =>
                          setFieldValue(
                            "softSkills",
                            values?.softSkills.filter((val) => val !== item)
                          )
                        }
                        className="btn btn-outline-info"
                        key={uuid()}
                      >
                        {item}
                        &nbsp;&nbsp;&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    ))}
                </label>
                <input
                  readOnly
                  type="text"
                  className="form-control select-input"
                  id="softSkills"
                  placeholder="E.g Patience"
                  onClick={() => setIsSoftSkillsOpen(true)}
                />
                {skills?.softSkills?.length > 0 && isSoftSkillsOpen === true && (
                  <div ref={softRef} className="options-container">
                    {skills.softSkills.map(
                      (item: { id: string; name: string }) => (
                        <span
                          key={uuid()}
                          onClick={() => {
                            if (!values?.softSkills.includes(item.name)) {
                              setFieldValue("softSkills", [
                                ...values.softSkills,
                                item.name,
                              ]);
                            }
                            setIsSoftSkillsOpen(false);
                          }}
                        >
                          {item.name}
                        </span>
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
