import React from "react";
import "./card.css";

const Card = ({ src, title, desctiption, price }) => {
  return (
    <div className="card">
      <img src={src} alt="#" className="card-img" />{" "}
      <div className="card-info"></div>
    </div>
  );
};

export default Card;
