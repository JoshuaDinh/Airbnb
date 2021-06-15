import React from "react";
import "./search.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Search = () => {
  return (
    <div className="search">
      <div className="search-info">
        <p>62 stays - 25 august to 30</p>
        <h1>stays nearby</h1>
        <Link className="link">
          <Button className="search-button" variant="outlined">
            Type of place
          </Button>
        </Link>
        <Link className="link">
          <Button className="search-button" variant="outlined">
            Price
          </Button>
        </Link>
        <Link className="link">
          <Button className="search-button" variant="outlined">
            Rooms and beds
          </Button>
        </Link>
        <Link className="link">
          <Button className="search-button" variant="outlined">
            More filters
          </Button>
        </Link>
      </div>
    </div>
  );
};
