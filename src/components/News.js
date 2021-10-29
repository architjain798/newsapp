import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?apiKey=7a6cc76f520e4a9d9551dc2a1c3b9e82&country=in"
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          article: data.articles,
        });
        console.log(this.state.article);
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="container my-3 text-center">
        <h2>NewTak Top News!!!</h2>
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <>
                <div className="col-md-4">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
