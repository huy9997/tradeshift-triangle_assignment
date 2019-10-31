import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Triangle from "../screens/triangle";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Triangle} />
  </BrowserRouter>
);

export default Routes;
