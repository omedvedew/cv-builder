import * as React from "react";
import { BasicAuthModalProps } from "./basic-auth-modal.interface";
import { Formik } from "formik";

const BasicAuthModal: React.FC<BasicAuthModalProps> = ({
  onSubmit,
  onClose,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
          if (onClose) {
            onClose();
          }
        }}
      >
        {({ setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="InputEmail1" className="form-label">
                Email address
              </label>
              <input
                required
                placeholder="Enter your email."
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("email", e.currentTarget.value)
                }
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password1" className="form-label">
                Password
              </label>
              <input
                required
                placeholder="Enter your password."
                type="password"
                className="form-control"
                id="InputPassword1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("password", e.currentTarget.value)
                }
              />
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export { BasicAuthModal };
