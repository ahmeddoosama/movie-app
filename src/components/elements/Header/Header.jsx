import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header-content">
        <img
          className="main-header-logo"
          src="./images/reactMovie_logo.png"
          alt="movie-logo"
        />
        <img
          className="tmdb-logo"
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
        />
      </div>
    </header>
  );
};

export default Header;
