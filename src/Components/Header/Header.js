import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import HeaderMenu from "./Include/HeaderMenu";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <HeaderMenu />
      </div>
    );
  }
}

export default Header;
