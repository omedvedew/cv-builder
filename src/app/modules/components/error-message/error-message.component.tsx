import * as React from "react";
import { ErrorMessageProps } from "./error-message.interface";

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  onClose,
  message,
  btnText,
}) => (
  <div className="container">
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
    <button onClick={onClose} className="btn btn-primary">
      {btnText}
    </button>
  </div>
);

export { ErrorMessage };
