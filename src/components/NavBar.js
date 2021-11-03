import React, { Component } from "react";

export default class NavBar extends Component {
  handleTheme = () => {
    if (this.props.theme === "light") {
      this.props.themeChange("dark");
    } else {
      this.props.themeChange("light");
    }
  };
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.theme} bg-${this.props.theme}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsTak
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.handleTheme}
                />
                <label
                  className={`form-check-label text-${
                    this.props.theme === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {this.props.theme === "light" ? "Dark" : "Light"}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
