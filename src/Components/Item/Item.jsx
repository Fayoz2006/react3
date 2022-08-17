import React from "react";
import "./Item.css";

const Item = () => {
  return (
    <div className="item">
      <b className="title">
        CityBound - An open sourse city simulation game in Rust
      </b>
      <div className="info">
        <i className="author">Alex Adams</i>
        <a href="https://www.apple.com">Read More</a>
      </div>
      <p className="date">28 Jan 2022</p>
    </div>
  );
};

export default Item