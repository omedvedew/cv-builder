import * as React from "react";
import { useDispatch } from "react-redux";
import {
  getAllSoftSkills,
  getAllTechSkills,
} from "../../../business-logic/redux/store/dashboard";
import "./dashboard.scss";
import Example from "../../../../assets/Free-Modern-Professional-Resume-Template.jpg";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document) {
      document.title = "Dashboard | CV-Builder";
    }
  }, []);
  return (
    <div className="dashboard-wrapper">
      <div className="container">
        <div className="d-grid gap-2">
          <a href="/" className="btn btn-outline-dark">
            Go somewhere
          </a>
        </div>
        <h1>Dashboard</h1>
        <button onClick={() => dispatch(getAllSoftSkills())}>SS</button>
        <button onClick={() => dispatch(getAllTechSkills())}>TS</button>
        <div className="ready-cvs">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Example} className="card-img-top" alt="cv-example" />
            <div className="card-body">
              <h5 className="card-title">Developer</h5>
              <p className="card-text">John Doe</p>
              <p className="card-text">13/10/2021</p>
              <div className="d-grid gap-2">
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
