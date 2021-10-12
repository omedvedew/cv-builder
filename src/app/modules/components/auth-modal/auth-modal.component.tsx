import * as React from "react";
import { AuthModalProps } from "./auth-modal.interface";

const AuthModal: React.FC<AuthModalProps> = ({ openBasicAuthModal }) => (
  <div className="userCntainer">
    <a href="http://localhost:5000/auth/google" className="btn btn-primary">
      Sign in with Google
    </a>
    <button className="btn btn-primary" onClick={openBasicAuthModal}>
      BasicAuth
    </button>
  </div>
);

export { AuthModal };
