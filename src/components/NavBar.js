import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    searchBox: "",
  };
  handleTheme = () => {
    if (this.props.theme === "light") {
      this.props.themeChange("dark");
    } else {
      this.props.themeChange("light");
    }
  };
  onInputChange = (e) => {
    this.setState({
      searchBox: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.theme} bg-${this.props.theme}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsTak
            </Link>
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
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/business">
                    Business
                  </Link>
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
              <form className="d-flex mx-2">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.searchBox}
                  onChange={this.onInputChange}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.searchItem(this.state.searchBox)}
                  type="button"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
