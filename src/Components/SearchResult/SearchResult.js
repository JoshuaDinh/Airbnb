import React from "react";
import "./searchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({ src, location, description, star, price, title }) => {
  return (
    <div className="searchResult">
      <img src={src} alt="#" className="searchResult-img" />
      <div className="searchResult-info-container">
        <div className="searchResult-info-top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>______</p>
          <p>{description}</p>
        </div>
        <div className="searchResult-info-bottom">
          <div className="searchResult-star-container">
            <StarIcon className="searchResult-star" /> <p>{star}</p>
          </div>
          <p>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      <FavoriteBorderIcon className="searchResult-heart" />
    </div>
  );
};

export default SearchResult;
