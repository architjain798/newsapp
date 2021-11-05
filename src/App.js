import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  state = {
    theme: "light",
    searchText: "",
  };
  toChangeTheme = (currentTheme) => {
    this.setState({
      theme: currentTheme,
    });
  };
  searchItem = (inputText) => {
    console.log(inputText);
    this.setState({
      searchText: inputText,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar
            themeChange={this.toChangeTheme}
            theme={this.state.theme}
            searchItem={this.searchItem}
          />
          <Switch>
            <Route path="/business">
              <News
                key="business"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="business"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/sports">
              <News
                key="sports"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="sports"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/entertainment">
              <News
                key="entertainment"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="entertainment"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/health">
              <News
                key="health"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="health"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/science">
              <News
                key="science"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="science"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/technology">
              <News
                key="technology"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="technology"
                searchItem={this.state.searchText}
              />
            </Route>
            <Route path="/">
              <News
                key="technology"
                theme={this.state.theme}
                pageSize={6}
                country="in"
                category="general"
                searchItem={this.state.searchText}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
