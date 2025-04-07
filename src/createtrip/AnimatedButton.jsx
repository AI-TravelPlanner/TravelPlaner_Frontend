import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import TravelForm from "./TravelForm";
import HotelCard from "./tripComponents/HotelCard";
import WeatherCard from "./tripComponents/WeatherCard";

function AnimatedButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div>
      <AnimatePresence mode="wait">
        {isClicked ? (
          <>
            <motion.button
              key="button"
              initial={{ opacity: 0, y: -10, x: 10 }}
              exit={{ opacity: 0 }}
              className="px-4 py-2 text-sm md:text-base lg:text-lg bg-blue-500 text-white rounded"
              animate={{
                opacity: 1,
                y: 0,
                x: isClicked
                  ? "35vw" // Default for small screens (e.g., phone)
                  : "0%",
              }}
              transition={{ type: "spring", stiffness: 50 }}
              onClick={() => setIsClicked(false)} // Resets when clicked again
            >
              I'm a Button!
            </motion.button>

            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-[400px] w-full bg-white rounded-2xl shadow-md flex items-center justify-center"
            >
              <div className="text-gray-400 text-lg">
                {/* trip information will be displayed here */}
                {/* TESTING */}
                <HotelCard
                  hotelName="Sheraton"
                  hotelAddress="Hotel Address"
                  hotelRating="Hotel Rating"
                  hotelPrice="$100"
                  hotelImage="/src/assets/hotel-img/Sheraton.jpg"
                  hotelCheckInDate={new Date().toLocaleDateString()}
                  hotelCheckOutDate={new Date().toLocaleDateString()}
                  hotelRoomType="Deluxe Room"
                  hotelAmenities="Free Wi-Fi, Pool, Gym"
                  hotelBookingLink="www.example.com"
                  hotelContactNumber="123-456-7890"
                  hotelDescription="Hotel Description"
                  hotelNearbyAttractions="Nearby Attractions"
                />
                <WeatherCard
                  temperature={25}
                  weatherDescription="Rainy"
                />
                {/* END TESTING */}
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div onClick={() => setIsClicked(true)}>
            {/* <TravelForm /> */}
            <div className="grid justify-center  min-h-screen border-3 border-blue-600">
              <TravelForm handleAnimate={setIsClicked} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AnimatedButton;
