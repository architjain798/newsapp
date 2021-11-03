import React, { Component } from "react";
import loading from "../images/loading.gif";
export default class Loader extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="error" />
      </div>
    );
  }
}
