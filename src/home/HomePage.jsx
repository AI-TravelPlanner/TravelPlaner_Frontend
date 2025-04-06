import React from "react";
import ImageCarousel from "./ImageCarcousel";
import FlightGrid from "./FlightGrid";
import CustomerGrid from "./CustomerGrid";

const HomePage = () => {
  return (
    <div>
      {/* Image Carousel component */}
      <ImageCarousel />
      <FlightGrid />
      <CustomerGrid />
    </div>
  );
};

export default HomePage;
