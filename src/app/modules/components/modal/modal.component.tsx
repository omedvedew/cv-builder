import * as React from "react";
import { ModalProps } from "./modal.interface";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1055,
        display: isOpen ? "block" : "none",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        outline: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
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
