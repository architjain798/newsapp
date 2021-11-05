import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page: 1,
      maxPage: 1,
      loading: false,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }-NewsTak`;
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=1edaf62ee96e415d8660ac6179516a7a&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
      .then((data) => {
        this.setState({
          loading: true,
        });
        return data.json();
      })
      .then((data) => {
        this.setState({
          article: data.articles,
          loading: false,
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
    window.scrollTo(0, 0);
    fetch(
      `https://newsapi.org/v2/top-headlines?&category=${
        this.props.category
      }&apiKey=1edaf62ee96e415d8660ac6179516a7a&country=${
        this.props.country
      }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    )
      .then((data) => {
        this.setState({
          loading: true,
        });
        return data.json();
      })
      .then((data) => {
        this.setState({
          article: data.articles,
          page: this.state.page + 1,
          loading: false,
        });
      })
      .catch((e) => console.log(e));
  };

  prevPage = () => {
    window.scrollTo(0, 0);
    if (this.state.page > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?&category=${
          this.props.category
        }&apiKey=1edaf62ee96e415d8660ac6179516a7a&country=${
          this.props.country
        }&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      )
        .then((data) => {
          this.setState({
            loading: true,
          });
          return data.json();
        })
        .then((data) => {
          this.setState({
            article: data.articles,
            page: this.state.page - 1,
            loading: false,
          });
        })
        .catch((e) => console.log(e));
    }
  };
  darkLight = (color) => {
    if (color === "dark") {
      return {
        backgroundColor: "black",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "white",
        color: "black",
      };
    }
  };
  render() {
    return (
      <div
        className="container my-3 text-center"
        style={this.darkLight(this.props.theme)}
      >
        <h2>
          {`NewTak Top News from ${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
          } `}{" "}
          !!!
        </h2>
        {this.state.loading && <Loader />}
        <div className="row">
          {this.state.article != null &&
            this.state.article
              .filter((element) => {
                if (element.title.toLowerCase().includes(this.props.searchItem))
                  return element;
              })
              .map((element, index) => {
                return (
                  <>
                    <div className="col-md-4">
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        sourceName={element.source.name}
                        key={index}
                        theme={this.props.theme}
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
