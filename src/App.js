import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  state = {
    theme: "light",
    searchText: "",
    progress: "",
  };
  //APIKey = process.env.REACT_APP_API_KEY;
  APIKey = "7a6cc76f520e4a9d9551dc2a1c3b9e82";
  toChangeTheme = (currentTheme) => {
    if (currentTheme === "light") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
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

  setProgress = (progressValue) => {
    this.setState({
      progress: progressValue,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={4}
          />
          <NavBar
            themeChange={this.toChangeTheme}
            theme={this.state.theme}
            searchItem={this.searchItem}
          />
          <Switch>
            <Route path="/business">
              <News
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
                APIKey={this.APIKey}
                setProgress={this.setProgress}
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
