import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <div className="home-section">
        <Card src="" title="" description="" />
        <Card src="" title="" description="" />
        <Card src="" title="" description="" />
      </div>
      <div className="home-section">
        <Card src="" title="" description="" />
        <Card src="" title="" description="" />
        <Card src="" title="" description="" />
      </div>
    </div>
  );
};

export default Home;
