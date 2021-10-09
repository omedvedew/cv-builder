import * as React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { State } from "../../../business-logic/redux/config";
import { CurrentUser } from "../../../typescript/types";
import "./header.scss";

const Header: React.FC = () => {
  const { currentUser } = useSelector((state: State) => state.auth) as {
    currentUser: CurrentUser;
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            CV-Builder
          </Link>

          <div className="collapse navbar-collapse">
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
      </nav>
    </header>
  );
};

export { Header };
