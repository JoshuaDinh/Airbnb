import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";
import "./home.css";
import roomOne from "../images/room-1.jpg";
import roomTwo from "../images/room-2.jpg";
import roomThree from "../images/room-3.jpg";
import houseOne from "../images/house-1.jpg";
import houseTwo from "../images/house-2.jpg";
import houseThree from "../images/house-3.jpg";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-section">
        <Card
          src={houseOne}
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src={houseTwo}
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family"
        />
        <Card
          src={houseThree}
          title="Unique Stays"
          description="Spaces that are more that just a place to sleep"
        />
      </div>
      <div className="home-section">
        <Card
          src={roomOne}
          title="Studio"
          description="Enjoy amazing sites downtown in the heart of San Diego"
          price="$157/night"
        />
        <Card
          src={roomTwo}
          title="1 Bedroom apartment"
          description="Cozy and quiant, perfect home getaway"
          price="$190/night"
        />
        <Card
          src={roomThree}
          title="2 Bedroom House"
          description="Superhost with great amenities and fabulous shopping center nearby"
          price="$220/night"
        />
      </div>
    </div>
  );
};

export default Home;
