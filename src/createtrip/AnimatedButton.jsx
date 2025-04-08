import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import TravelForm from "./TravelForm";
import HotelCard from "./tripComponents/HotelCard";
import WeatherCard from "./tripComponents/WeatherCard";
import InfoDisplayCard from "./tripComponents/InfoDisplayCard";

function AnimatedButton({
  setIsFormOpen,
  setPlanTripFromGeminiJson,
  planTripFromGeminiJson,
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div>
      <AnimatePresence mode="wait">
        {setIsFormOpen(isClicked)}
        {isClicked ? (
          <>
            <motion.button
              key="button"
              exit={{ opacity: 0 }}
              className="px-4 py-2 text-sm md:text-base lg:text-lg bg-blue-500 text-white rounded absolute right-2"
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, x: 0 }} // Starts from off-screen to the right
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20, // Adds a smooth effect for the animation
              }}
              onClick={() => setIsClicked(false)} // Resets when clicked again
            >
              I'm a Button!
            </motion.button>

            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20, // Adds a smooth effect for the animation
              }}
              exit={{ opacity: 0 }}
            >
              <InfoDisplayCard
                planTripFromGeminiJson={planTripFromGeminiJson}
              />
            </motion.div>
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
            <InfoDisplayCard />
          </motion.div >
      </>
      ) : (
      <motion.div
      // onClick={() => setIsClicked(true)}
      >
        <TravelForm
          setPlanTripFromGeminiJson={setPlanTripFromGeminiJson}
          handleAnimate={setIsClicked}
        />
      </motion.div>
      )
        }
    </AnimatePresence >
    </motion.div >
  );
}

export default AnimatedButton;
