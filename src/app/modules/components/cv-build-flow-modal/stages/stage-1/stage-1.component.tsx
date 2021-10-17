import { Formik } from "formik";
import * as React from "react";
import { Stage1Props } from "./stage-1.interface";

const Stage1: React.FC<Stage1Props> = ({ onClose, onNext, onSubmit }) => (
  <>
    <div className="stage-content">
      <h3>Stage-1: Basic Info</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          location: {
            country: "",
            city: "",
          },
          contacts: { email: "" },
          intro: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
          onNext();
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="form-field">
              <label htmlFor="firstName" className="form-label">
                First name:
              </label>
              <input
                required
                placeholder="Enter your first name."
                type="text"
                className="form-control"
                id="firstName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("firstName", e.currentTarget.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName" className="form-label">
                Last name:
              </label>
              <input
                required
                placeholder="Enter your last name."
                type="text"
                className="form-control"
                id="lastName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("lastName", e.currentTarget.value)
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="country" className="form-label">
                Country:
              </label>
              <input
                required
                placeholder="Enter your country."
                type="text"
                className="form-control"
                id="country"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("location", {
                    ...values.location,
                    country: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="city" className="form-label">
                City:
              </label>
              <input
                required
                placeholder="Enter your city."
                type="text"
                className="form-control"
                id="city"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("location", {
                    ...values.location,
                    city: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="basic-email" className="form-label">
                Email:
              </label>
              <input
                required
                placeholder="Enter your email."
                type="email"
                className="form-control"
                id="basic-email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("contacts", {
                    ...values.contacts,
                    email: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="linkedIn" className="form-label">
                LinkedIn:
              </label>
              <input
                placeholder="Enter your LinkedIn profile url."
                type="url"
                className="form-control"
                id="linkedIn"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("contacts", {
                    ...values.contacts,
                    linkedIn: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="skype" className="form-label">
                Skype:
              </label>
              <input
                placeholder="Enter your skype."
                type="url"
                className="form-control"
                id="skype"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("contacts", {
                    ...values.contacts,
                    skype: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="telegram" className="form-label">
                Telegram:
              </label>
              <input
                placeholder="Enter your telegram."
                type="text"
                className="form-control"
                id="telegram"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("contacts", {
                    ...values.contacts,
                    telegram: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-field fullwidth">
              <label htmlFor="intro" className="form-label">
                Short intro:
              </label>
              <textarea
                placeholder="Enter a short intro about you. Max 200 symbols."
                className="form-control"
                id="intro"
                maxLength={200}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFieldValue("intro", e.currentTarget.value)
                }
              />
            </div>
            <div className="form-field fullwidth controls">
              <button
                className="btn btn-outline-secondary"
                type="reset"
                onClick={onClose}
              >
                Cancel
              </button>
              <button className="btn btn-outline-primary" type="submit">
                Next
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "10%" }}
        aria-valuenow={10}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  </>
);

export { Stage1 };
