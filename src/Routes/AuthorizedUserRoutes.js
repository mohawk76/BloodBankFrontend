import React, { Component } from "react";
import { Route } from "react-router-dom";

class AuthorizedUserRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          Home
        </Route>
      </div>
    );
  }
}

export default AuthorizedUserRoutes;
