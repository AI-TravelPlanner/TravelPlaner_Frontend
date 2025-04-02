import React from "react";
import ImageCarousel from "./ImageCarcousel";
import FlightGrid from "./FlightGrid";

const HomePage = () => {
  return (
    <div>
      {/* Image Carousel component */}
      <ImageCarousel />
      <FlightGrid />
    </div>
  );
};

export default HomePage;
