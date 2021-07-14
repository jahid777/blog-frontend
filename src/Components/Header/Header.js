import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg" style={{ color: "black" }}>
          BLOG
        </span>
      </div>
      <img
        className="headerImg"
        src="https://www.go-businessfinance.com/wp-content/uploads/2020/04/blog.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
