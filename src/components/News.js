import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      maxPage: 1,
    };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=1edaf62ee96e415d8660ac6179516a7a&country=in&page=${this.state.page}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          article: data.articles,
        });
        return data;
      })
      .then((data) => {
        this.setState({
          maxPage: Math.ceil(data.totalResults / this.state.article.length),
        });
        console.log(this.state.article.length + "-----" + this.state.maxPage);
      })
      .catch((e) => console.log(e));
  }

  nextPage = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=1edaf62ee96e415d8660ac6179516a7a&country=in&page=${
        this.state.page + 1
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          article: data.articles,
          page: this.state.page + 1,
        });
      })
      .catch((e) => console.log(e));
  };

  prevPage = () => {
    if (this.state.page > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=1edaf62ee96e415d8660ac6179516a7a&country=in&page=${
          this.state.page - 1
        }`
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            article: data.articles,
            page: this.state.page - 1,
          });
        })
        .catch((e) => console.log(e));
    }
  };

  render() {
    return (
      <div className="container my-3 text-center">
        <h2>NewTak Top News!!!</h2>
        <div className="row">
          {this.state.article != null &&
            this.state.article.map((element, index) => {
              return (
                <>
                  <div className="col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      key={index}
                    />
                  </div>
                </>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.prevPage}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.nextPage}
            disabled={this.state.page >= this.state.maxPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
