import React from "react";
import ImageCarousel from "./ImageCarcousel";
import FlightGrid from "./FlightGrid";
import CustomerGrid from "./CustomerGrid";
import StatsGrid from "./StatsGrid";
import StatCard from "./StatCard";
import { FaGlobe, FaPlane, FaUsers } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      {/* Image Carousel component */}
      <ImageCarousel />
      <FlightGrid />
      <CustomerGrid />
      <StatsGrid />
    </div>
  );
};

export default HomePage;
