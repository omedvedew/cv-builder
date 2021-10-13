import * as React from "react";
import { ModalProps } from "./modal.interface";
import "./modal.scss";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
      className="modal-wrapper"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
