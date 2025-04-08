import React from "react";
import ImageCarousel from "./ImageCarcousel";
import FlightGrid from "./FlightGrid";
import CustomerGrid from "./CustomerGrid";
import StatsGrid from "./StatsGrid";
import StatCard from "./StatCard";
import { FaGlobe, FaPlane, FaUsers } from "react-icons/fa";
import SubHeader from "./SubHeader";
import TravelWebsite from "./Top-Rated";

const HomePage = () => {
  return (
    <div>
      {/* Image Carousel component */}
      <ImageCarousel />
      <StatsGrid />
      <SubHeader />
      <TravelWebsite/>
      <FlightGrid />
      <CustomerGrid />
      
    </div>
  );
};

export default HomePage;
