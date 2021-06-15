import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import SearchDates from "../SearchDates/SearchDates";
import { Link } from "react-router-dom";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div className="banner">
      <div className="banner-search">
        <Button
          variant="outlined"
          className="banner-search-button"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Search Dates" : "hide"}
        </Button>
        {/* Date Picker Toggle */}
        {!showSearch && <SearchDates />}
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Link to="/search" className="link">
          <Button variant="outlined">Explore Nearby</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
