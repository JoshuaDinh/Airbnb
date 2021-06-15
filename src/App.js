import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
