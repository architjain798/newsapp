import React, { Component } from "react";
import loading from "../images/loading.gif";
import lightLoading from "../images/loading_light.gif";
export default class Loader extends Component {
  render() {
    if (this.props.theme === "light") {
      return (
        <div>
          <img src={loading} alt="error" />
        </div>
      );
    } else {
      return (
        <div>
          <img src={lightLoading} alt="error" />
        </div>
      );
    }
  }
}
