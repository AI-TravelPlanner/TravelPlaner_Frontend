import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StatCard from "@/home/StatCard";
import { FaPlane, FaGlobe, FaUsers } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      {/* FOR TESTING THE STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        <StatCard
          image={FaPlane}
          firstLabel="23,000+"
          secondLabel="Travel Experiences"
        />
        <StatCard
          image={FaGlobe}
          firstLabel="40+"
          secondLabel="Countries"
        />
        <StatCard
          image={FaUsers}
          firstLabel="10,000+"
          secondLabel="Happy Travelers"
        />
      </div>
      {/* END OF STAT CARDS */}
      <Footer />
    </div>
  );
};

export default Layout;
