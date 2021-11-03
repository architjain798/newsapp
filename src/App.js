import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  state = {
    theme: "light",
  };
  toChangeTheme = (currentTheme) => {
    this.setState({
      theme: currentTheme,
    });
  };
  render() {
    return (
      <div>
        <NavBar themeChange={this.toChangeTheme} theme={this.state.theme} />
        <News theme={this.state.theme} pageSize={6} />
      </div>
    );
  }
}
