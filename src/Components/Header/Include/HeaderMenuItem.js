import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./HeaderMenuItem.scss";

class HeaderMenuItem extends Component {
  getNavLinkClass(path) {
    return this.props.location.pathname === path ? "active" : "";
  }

  render() {
    return (
      <li className={this.getNavLinkClass(this.props.target)}>
        <NavLink
          className="header__menu__item"
          exact={true}
          to={this.props.target}
        >
          {this.props.name}
        </NavLink>
      </li>
    );
  }
}
HeaderMenuItem = withRouter(HeaderMenuItem);

export default HeaderMenuItem;
