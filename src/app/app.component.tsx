import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { State } from "./business-logic/redux/config";
import { appInit } from "./business-logic/redux/store/general";
import { Dashboard, Header, Landing } from "./modules";
import { CurrentUser } from "./typescript/types";

const App: React.FC = () => {
  const { currentUser } = useSelector((state: State) => state.auth) as {
    currentUser: CurrentUser;
  };
  const { appStatus } = useSelector((state: State) => state.general) as {
    appStatus: boolean;
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!appStatus) {
      dispatch(appInit());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Landing} />
      {currentUser?.id ? (
        <Route exact path="/dashboard" component={Dashboard} />
      ) : (
        <Redirect exact path="/dashboard" to="/home" />
      )}
    </BrowserRouter>
  );
};

export { App };
