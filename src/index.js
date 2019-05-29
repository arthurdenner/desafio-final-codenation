import React from "react";
import ReactDOM from "react-dom";
import Routers from "../src/router/Routers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../src/redux/rootReducers";
import thunk from 'redux-thunk';


let store = createStore(
  rootReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("root")
);
