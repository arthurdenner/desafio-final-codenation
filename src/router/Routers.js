import React from "react";
import { BrowserRouter as Router, Route , Switch, Redirect } from "react-router-dom";
import App from "../App";
import RepositorySeach from "../containers/RepositorySeach/RepositorySeach";

const Routers = () => (
  <Router>
    <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/repository' component={RepositorySeach} />
    <Redirect to='' />
    </Switch>
  </Router>
);

export default Routers;
