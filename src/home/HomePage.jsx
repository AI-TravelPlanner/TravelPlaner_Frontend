/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      className="relative bg-gray-200 min-h-[70vh] flex justify-center items-center overflow-hidden p-10"
      style={{
        backgroundImage: "url('/src/assets/hero-img/map.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(197, 186, 186, 0.3)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-30"></div>

      <motion.div
        className="container mx-auto min-h-[70vh] flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row md:flex-col items-center justify-center text-center lg:text-left gap-y-8 lg:gap-x-20 relative">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-700 via-red-500 to-orange-400 bg-clip-text text-transparent text-center">
              Set your destination with us
            </h1>
            <p className="text-[#0047AB] text-lg lg:text-xl mb-6 p-10 text-center">
              Discover new horizons and plan your next adventure with ease -
              Your journey ✈️ starts here.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="../src/assets/hero-img/beach.jpeg"
              alt="Beach Image"
              loading="lazy"
              className="h-[50vh] w-[50vh] object-cover rounded-3xl hidden md:block"
            />
            <img
              src="../src/assets/hero-img/landmark.jpeg"
              alt="Landmark Image"
              loading="lazy"
              className="absolute h-[30vh] w-[30vh] object-cover rounded-2xl bottom-[170px] left-[0px] hidden md:block rotate-[-5deg]"
            />
            <img
              src="../src/assets/hero-img/plane.jpg"
              alt="Plane travel Image"
              loading="lazy"
              className="absolute h-[30vh] w-[30vh] object-cover rounded-2xl bottom-[230px] right-[0px] hidden md:block rotate-[10deg]"
            />
            <img
              src="../src/assets/hero-img/female-traveler.jpg"
              alt="Traveler Image"
              loading="lazy"
              className="absolute h-[30vh] w-[30vh] object-cover rounded-2xl top-[170px] right-[0px] hidden md:block rotate-[-5deg]"
            />
            <img
              src="../src/assets/hero-img/plane2.jpg"
              alt="Travel Image"
              loading="lazy"
              className="absolute h-[30vh] w-[30vh] object-cover rounded-2xl top-[230px] left-[0px] hidden md:block rotate-[10deg]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;
