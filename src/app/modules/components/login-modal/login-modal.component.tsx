import { Formik } from "formik";
import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../business-logic/redux/config";
import { ErrorMessage } from "../error-message";
import { LoginModalProps } from "./login-modal.interface";

const LoginModal: React.FC<LoginModalProps> = ({ onSubmit, onClose }) => {
  const { currentUser } = useSelector((state: State) => state.auth);
  const [showErrorMessage, setShowErrorMessage] = React.useState<boolean>(
    currentUser?.errorMessage ? true : false
  );

  React.useEffect(() => {
    setShowErrorMessage(currentUser?.errorMessage ? true : false);
    if (currentUser?.id) {
      if (onClose) {
        onClose();
      }
    } else {
      setShowErrorMessage(currentUser?.errorMessage ? true : false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  return (
    <>
      {showErrorMessage === true ? (
        <ErrorMessage
          btnText="Try again"
          message={currentUser?.errorMessage || ""}
          onClose={() => setShowErrorMessage(false)}
        />
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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
      )}
    </>
  );
};

export { LoginModal };
