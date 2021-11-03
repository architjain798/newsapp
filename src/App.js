import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Router>
          <NavBar themeChange={this.toChangeTheme} theme={this.state.theme} />
          <Switch>
            <Route path="/business">
              <News
                key="business"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="business"
              />
            </Route>
            <Route path="/sports">
              <News
                key="sports"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="sports"
              />
            </Route>
            <Route path="/entertainment">
              <News
                key="entertainment"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route path="/health">
              <News
                key="health"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="health"
              />
            </Route>
            <Route path="/science">
              <News
                key="science"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="science"
              />
            </Route>
            <Route path="/technology">
              <News
                key="technology"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="technology"
              />
            </Route>
            <Route path="/">
              <News
                key="technology"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
