import React from "react";
import ImageCarousel from "./ImageCarcousel";
import CustomerGrid from "./CustomerGrid";

const HomePage = () => {
  return (
    <div>
      {/* Image Carousel component */}
      <ImageCarousel />
      <CustomerGrid />
    </div>
  );
};

export default HomePage;
