import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../homepage/Homepage";
import Auth from "../authPage/Auth";
import Form from "../formPage/Form";
import Edit from "../editPage/Edit";
import Alert from "../../components/alert/Alert";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert></Alert>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={Auth}></Route>
        <PrivateRoute exact path="/form" component={Form}></PrivateRoute>
        <PrivateRoute exact path="/edit/:id" component={Edit}></PrivateRoute>
      </Switch>
    </section>
  );
};

export default Routes;
