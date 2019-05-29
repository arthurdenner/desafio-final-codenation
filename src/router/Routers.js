import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import RepositorySeach from "../containers/RepositorySeach/";

const Routers = () => (
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/repository' component={RepositorySeach} />
  </Router>
);

export default Routers;
