import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore as reduxCreateStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApiService, HttpService } from "../services";
import { rootReducer, rootSagas, SagasContext } from "./config";
import { History } from "history";
import { run } from "redux-chill";

export const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = reduxCreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const http = new HttpService();
  const context: SagasContext = {
    history,
    api: new ApiService(http),
  };

  run(sagaMiddleware, rootSagas, context);
  return store;
};
