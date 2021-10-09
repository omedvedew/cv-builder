import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import bannerImage from "../../../../assets/poster-builder.png";
import { State } from "../../../business-logic/redux/config";
import { getUser } from "../../../business-logic/redux/store/auth";
import { CurrentUser } from "../../../typescript/types";
import "./landing.scss";

const Landing: React.FC = () => {
  const { currentUser } = useSelector((state: State) => state.auth) as {
    currentUser: CurrentUser;
  };
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(getUser());
  React.useEffect(() => {}, [dispatch]);
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
          <h2>Landing</h2>
          {currentUser ? (
            <div className="userContainer">
              <h3>Welcome, {currentUser.firstName}!</h3>
              <p>Let's start your CV creation.</p>
              <button
                className="btn btn-primary"
                onClick={() => history.push("/dashboard")}
              >
                Go to dashboard
              </button>
            </div>
          ) : (
            <a
              href="http://localhost:5000/auth/google"
              className="btn btn-primary"
            >
              Sign in with Google
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export { Landing };
