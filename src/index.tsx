import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./app/app.component";
import { createStore } from "./app/business-logic";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/core.scss";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
