import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BasicAuthModal, Modal, LoginModal } from "../../components";
import { State } from "../../../business-logic/redux/config";
import { CurrentUser } from "../../../typescript/types";
import "./header.scss";
import {
  logIn,
  logOut,
  signUp,
} from "../../../business-logic/redux/store/auth";

const Header: React.FC = () => {
  const { currentUser } = useSelector((state: State) => state.auth) as {
    currentUser: CurrentUser;
  };
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    React.useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSubmit = (values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    dispatch(signUp(values));
  };

  const handleLogin = (values: { email: string; password: string }) => {
    dispatch(logIn(values));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container container-fluid">
          <div className="col-md-8">
            <div className="collapse navbar-collapse">
              <Link className="navbar-brand" to="/">
                CV-Builder
              </Link>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                {currentUser?.id && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div
            style={{ display: "flex" }}
            className="col-md-4 justify-content-md-end"
          >
            {currentUser?.id ? (
              <button
                type="button"
                onClick={() => dispatch(logOut())}
                className="btn btn-outline-light"
              >
                Log out
              </button>
            ) : (
              <>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    onClick={() => setIsLoginModalOpen(true)}
                    className="btn btn-outline-light"
                  >
                    LogIn
                  </button>
                  <a
                    type="button"
                    href="/auth/google"
                    className="btn btn-outline-light"
                  >
                    LogIn with Google
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-outline-light"
                  >
                    SignUp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <Modal
        title="Sign Up"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        children={
          <BasicAuthModal
            onSubmit={handleSubmit}
            onClose={() => setIsModalOpen(false)}
          />
        }
      />
      <Modal
        title="Login"
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        children={
          <LoginModal
            onSubmit={handleLogin}
            onClose={() => setIsLoginModalOpen(false)}
          />
        }
      />
    </header>
  );
};

export { Header };
