import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  state = {
    theme: "light",
  };
  styleTheme = () => {
    if (this.state.theme === "light") {
      return {
        color: "white",
        backgroundColor: "black",
      };
    } else {
      return {
        color: "black",
        backgroundColor: "white",
      };
    }
  };
  toChangeTheme = (currentTheme) => {
    console.log("theme changed");
    this.setState({
      theme: currentTheme,
    });
  };
  render() {
    return (
      <div>
        <NavBar themeChange={this.toChangeTheme} theme={this.state.theme} />
        <News theme={this.state.theme} />
      </div>
    );
  }
}
