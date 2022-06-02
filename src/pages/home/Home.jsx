import React from "react";
import { HomeCarousel } from "./components/Carousel";
import { Filters } from "./components/Filters";
import { VideoListing } from "./components/VideoListing";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <HomeCarousel />
      <Filters />
      <VideoListing />
    </div>
  );
};

export { Home };
