import React, { Component } from "react";
import "./HeaderMenu.scss";
import HeaderMenuItem from "./HeaderMenuItem";

class HeaderMenu extends Component {
  render() {
    return (
      <nav className="header__menu">
        <ul>
          <HeaderMenuItem name="Strona główna" target="/" />
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;
