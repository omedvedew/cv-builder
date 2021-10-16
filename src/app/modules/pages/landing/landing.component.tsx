import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Carousel, FlowDescription } from "../../components";
import bannerImage from "../../../../assets/poster-builder.png";
import { State } from "../../../business-logic/redux/config";
import { getUser } from "../../../business-logic/redux/store/auth";
import { CurrentUser } from "../../../typescript/types";
import "./landing.scss";
import One from "../../../../assets/107728685_100856581703923_5807569682165269738_n.jpg";
import Two from "../../../../assets/Free-Modern-Professional-Resume-Template.jpg";
import Four from "../../../../assets/preview.jpg";

const Landing: React.FC = () => {
  const { currentUser } = useSelector((state: State) => state.auth) as {
    currentUser: CurrentUser;
  };
  const history = useHistory();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  React.useEffect(() => {
    if (document) {
      document.title = "CV-Builder";
    }
  }, []);

  return (
    <>
      <div className="banner-wrapper">
        <div className="landing-banner">
          <div className="description-block">
            <h1 className="title">Welcome to CV-Builder</h1>
            <p className="description">
              This app is designed to make your CV creation easier and faster
              then whenever!
            </p>
            <h2>Enjoy!</h2>
          </div>
          <div className="image-block">
            <img src={bannerImage} alt="banner-img" />
          </div>
        </div>
      </div>
      <div className="landing-wrapper">
        <div className="container">
          {currentUser?.id && (
            <div className="user-container">
              <h3>Welcome, {currentUser.firstName}!</h3>
              <p>Let's start your CV creation.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  history.push("/dashboard");
                  window?.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Go to dashboard
              </button>
            </div>
          )}

          <FlowDescription />

          <Carousel
            slidesSrcs={[
              {
                src: One,
                alt: "1",
              },
              {
                src: Two,
                alt: "2",
              },
              { src: Four, alt: "4" },
            ]}
            title="Achieve a completed resume"
          />
        </div>
      </div>
    </>
  );
};

export { Landing };
