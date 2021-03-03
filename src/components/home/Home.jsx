import React, { Component } from "react";
import HeroImage from './../elements/HeroImage/HeroImage';
import SearchBar from './../elements/SearchBar/SearchBar';
import FourColGrid from './../elements/FourColGrid/FourColGrid';
import MovieThumb from './../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from './../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from './../elements/Spinner/Spinner';
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
      </React.Fragment>
    );
  }
}

export default Home;