import { Component } from "react";
import Header from "../Components/Header/Header";
import AuthorizedUserRoutes from "../Routes/AuthorizedUserRoutes";

class AuthorizedUserView extends Component {
  render() {
    return (
      <div>
        <Header />
        <AuthorizedUserRoutes />
      </div>
    );
  }
}

export default AuthorizedUserView;
