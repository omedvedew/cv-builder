import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.scss";
import Example from "../../../../assets/Free-Modern-Professional-Resume-Template.jpg";
import { CVBuildFlowModal, CVCard, Modal } from "../../components";
import { State } from "../../../business-logic/redux/config";
import { getCVs } from "../../../business-logic/redux/store/dashboard";

const Dashboard: React.FC = () => {
  const { resumes } = useSelector((state: State) => state.dashboard);
  const { currentUser } = useSelector((state: State) => state.auth);
  const [isFlowModalOpen, setIsFlowModalOpen] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document && currentUser) {
      document.title = "Dashboard | CV-Builder";
      dispatch(getCVs(currentUser.id));
    }
  }, []);
  return (
    <div className="dashboard-wrapper">
      <div className="container">
        <div className="d-grid gap-2 add-cv-container">
          <button
            onClick={() => setIsFlowModalOpen(true)}
            className="btn btn-outline-success"
          >
            + Add resume
          </button>
        </div>
        <h1>Dashboard</h1>

        {/* READY CVS */}
        <div className="ready-cvs">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Example} className="card-img-top" alt="cv-example" />
            <div className="card-body">
              <div className="info">
                <h5 className="card-title">Developer</h5>
                <p className="card-text">John Doe</p>
                <p className="card-text">13/10/2021</p>
              </div>
              <div className="d-grid gap-2">
                <a href="/" className="btn btn-primary">
                  Review
                </a>
              </div>
            </div>
          </div>

          {resumes?.length > 0 &&
            resumes.map(({ firstName, lastName, background }, i) => (
              <CVCard
                key={i.toString()}
                title="Position"
                name={`${firstName} ${lastName}`}
                image={background}
              />
            ))}
        </div>
      </div>

      <Modal
        isOpen={isFlowModalOpen}
        onClose={() => setIsFlowModalOpen(false)}
        title="CV-Builder"
        large
        children={
          <CVBuildFlowModal onClose={() => setIsFlowModalOpen(false)} />
        }
      />
    </div>
  );
};

export { Dashboard };
