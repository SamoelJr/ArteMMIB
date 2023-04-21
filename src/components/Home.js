import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Destinations from "../components/Destinations";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Destinations />
      <Reviews />
    </div>
  );
};

export default Home;
