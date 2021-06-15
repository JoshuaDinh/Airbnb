import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Search } from "./Pages/Search/Search";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <div className="app">
            <Home />
          </div>
        </Route>
        <Route path="/">
          <div className="app">
            <Search path="/search" />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
