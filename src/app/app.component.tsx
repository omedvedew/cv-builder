import * as React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Dashboard, Header, Landing } from "./modules";

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {}, [dispatch]);

  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/">
        {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Landing} />
      <Route path="/dashboard" exact component={Dashboard} />
    </BrowserRouter>
  );
};

export { App };
