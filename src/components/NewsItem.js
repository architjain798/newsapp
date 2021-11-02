import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <>
        <div className="card my-2" style={{ width: "18rem" }}>
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
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
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
