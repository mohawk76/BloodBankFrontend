import "./Logo.scss";
import { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo--main">RCKiK</div>
        <div className="logo--sub">Bank krwi</div>
      </div>
    );
  }
}

export default Logo;
