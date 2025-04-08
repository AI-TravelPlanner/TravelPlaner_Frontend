import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const HotelCard = ({ hotelDetails }) => {
  // This component will display the hotel information in a card format

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div
      className={cn(
        "cursor-pointer w-full h-full min-h-0 min-w-0 dark:border-gray-700 bg-white dark:bg-gray-800"
      )}
      onClick={handleFlip}
    >
      <motion.div
        className="relative preserve-3d duration-300 hover:scale-105"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full rounded-lg shadow-xl border px-3 grid grid-row-3"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Activity"
            className="w-full h-auto object-cover"
          />
          <h2 className="font-bold">{hotelDetails.hotelName}</h2>
          <p className="text-xs text-gray-600">
            {hotelDetails.pricePerNight}/Night
          </p>
          <p className="text-xs text-gray-600">{hotelDetails.location}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HotelCard;
