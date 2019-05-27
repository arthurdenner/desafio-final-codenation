import React from "react";
import ReactDOM from "react-dom";
import Routers from "../src/router/Routers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../src/redux/rootReducers";
import createSagaMiddleware from "redux-saga"; // SAGA
import rootSagas from "../src/redux/rootSagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("root")
);
