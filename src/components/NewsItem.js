import React, { Component } from "react";

export default class NewsItem extends Component {
  darkLight = (color) => {
    if (color === "dark") {
      return {
        backgroundColor: "#3e3e40",
        color: "white",
        width: "18rem",
      };
    } else {
      return {
        backgroundColor: "white",
        color: "black",
        width: "18rem",
      };
    }
  };
  render() {
    let { title, description, imageUrl, url, author, date, sourceName } =
      this.props;
    return (
      <>
        <div className="card my-2" style={this.darkLight(this.props.theme)}>
          <img
            src={
              imageUrl === null
                ? "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ left: "15%" }}
              >
                {sourceName}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <span className="badge badge-pill badge-success">Success</span>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted-left">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toLocaleTimeString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              More
            </a>
          </div>
        </div>
      </>
    );
  }
}
