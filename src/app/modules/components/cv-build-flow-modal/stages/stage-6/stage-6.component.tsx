import * as React from "react";
import { Stage6Props } from "./stage-6.interface";

const Stage6: React.FC<Stage6Props> = ({
  onBack,
  onClose,
  onSubmit,
  values,
}) => (
  <>
    <div className="stage-content form">
      <h3>Stage-6: Summary</h3>
      <div className="fullwidth summary">
        <div className="basic-info" style={{ marginBottom: "20px" }}>
          <h4>Basic info</h4>
          <p>First name: {values?.firstName}</p>
          <p>Last Name: {values?.lastName}</p>
          <p>
            Location: {values?.location?.city}, {values?.location?.country}
          </p>
          <h4>Contacts</h4>
          {Object.values(values?.contacts || {})?.length > 0 &&
            Object.keys(values?.contacts || {})?.map((item, i) => (
              <p key={i.toString() + item}>
                {item}: {Object.values(values?.contacts || {})[i]}
              </p>
            ))}
          {values?.intro && (
            <>
              <h4>Intro: </h4>
              <p>{values.intro}</p>
            </>
          )}
        </div>
        <div className="skills" style={{ marginBottom: "20px" }}>
          <h4>Tech skills: </h4>
          {values?.techSkills &&
            values.techSkills?.length > 0 &&
            values.techSkills.map((item) => <p key={item}>{item}</p>)}
          <h4>Soft skills: </h4>
          {values?.softSkills &&
            values.softSkills?.length > 0 &&
            values.softSkills.map((item) => <p key={item}>{item}</p>)}
        </div>
        <div className="experience" style={{ marginBottom: "20px" }}>
          <h4>Experience</h4>
          {Object.values(values?.experience || {})?.length > 0 &&
            Object.values(values?.experience || {}).map(
              ({ company, period, position, duties }, i) => (
                <div key={i.toString() + company}>
                  <p>Company: {company}</p>
                  <p>
                    Period: <br />
                    From: {period.from} <br />
                    To: {period.to}
                  </p>
                  <p>Position: {position}</p>
                  {duties && <p>Duties: {duties}</p>}
                </div>
              )
            )}
        </div>
        <div className="education" style={{ marginBottom: "20px" }}>
          <h4>Education</h4>
          {Object.values(values?.education || {})?.length > 0 &&
            Object.values(values?.education || {}).map(
              ({ period, specialization, achievements, edu }, i) => (
                <div key={i.toString() + edu}>
                  <p>Name: {edu}</p>
                  <p>
                    Period: <br />
                    From: {period.from} <br />
                    To: {period.to}
                  </p>
                  <p>Specialization: {specialization}</p>
                  {achievements && <p>Achievements: {achievements}</p>}
                </div>
              )
            )}
        </div>
        <div className="background">
          <h4>Background</h4>
          <img src={values?.background} alt="back" />
        </div>
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
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "96%" }}
        aria-valuenow={96}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  </>
);

export { Stage6 };
