import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../homepage/Homepage";
import Auth from "../authPage/Auth";
import Create from "../createPage/CreatePage";
import Edit from "../editPage/EditPage";
import View from "../viewPage/ViewPage";
import Alert from "../../components/alert/Alert";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert></Alert>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={Auth}></Route>
        <PrivateRoute exact path="/create" component={Create}></PrivateRoute>
        <PrivateRoute exact path="/view/:id" component={View}></PrivateRoute>
        <PrivateRoute exact path="/edit/:id" component={Edit}></PrivateRoute>
      </Switch>
    </section>
  );
};

export default Routes;
