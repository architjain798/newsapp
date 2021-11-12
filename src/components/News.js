import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
      totalResults: "",
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }-NewsTak`;
  }
  componentDidMount() {
    this.props.setProgress(5);
    fetch(
      `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=7a6cc76f520e4a9d9551dc2a1c3b9e82&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
      .then((data) => {
        this.setState({
          loading: true,
        });
        return data.json();
      })
      .then((data) => {
        this.props.setProgress(50);
        this.setState({
          article: data.articles,
          totalResults: data.totalResults,
          //
        });
        return data;
      })
      .then((data) => {
        this.props.setProgress(100);
        this.setState({
          maxPage: Math.ceil(data.totalResults / this.state.article.length),
          loading: false,
        });
        console.log(this.state.article.length + "-----" + this.state.maxPage);
      })
      .catch((e) => console.log(e));
  }

  nextPage = () => {
    //window.scrollTo(0, 0);
    fetch(
      `https://newsapi.org/v2/top-headlines?&category=${
        this.props.category
      }&apiKey=7a6cc76f520e4a9d9551dc2a1c3b9e82&country=${
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
          article: this.state.article.concat(data.articles),
          page: this.state.page + 1,
          loading: false,
        });
      })
      .catch((e) => console.log(e));
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
  fetchMoreData = async () => {
    this.nextPage();
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
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.page !== this.state.maxPage}
          loader={<Loader theme={this.props.theme} />}
        >
          <div className="container row">
            {this.state.article != null &&
              this.state.article
                .filter((element) => {
                  if (
                    element.title.toLowerCase().includes(this.props.searchItem)
                  )
                    return element;
                  return false;
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
        </InfiniteScroll>
      </div>
    );
  }
}
