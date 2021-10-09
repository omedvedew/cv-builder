import * as React from "react";
import { useDispatch } from "react-redux";
import bannerImage from "../../../../assets/poster-builder.png";
import "./landing.scss";

const Landing: React.FC = () => {
  const dispatch = useDispatch();

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
          {/* {currentUser ? (
            <div className="userContainer">{JSON.stringify(currentUser)}</div>
          ) : (
            <a
              href="http://localhost:5000/auth/google"
              className="btn btn-primary"
            >
              Sign in with Google
            </a>
          )} */}
        </div>
      </div>
    </>
  );
};

export { Landing };
