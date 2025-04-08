import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react"; // Globe icon for travel
import TravelForm from "./TravelForm";
import InfoDisplayCard from "./tripComponents/InfoDisplayCard";

function AnimatedButton({
  setIsFormOpen,
  setPlanTripFromGeminiJson,
  planTripFromGeminiJson,
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {setIsFormOpen(isClicked)}
      {isClicked ? (
        <>
          <motion.button
            key="button"
            exit={{ opacity: 0 }}
            className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 focus:outline-none absolute right-2 "
            aria-label="Global Travel"
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
            <Globe size={24} />
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
            <InfoDisplayCard planTripFromGeminiJson={planTripFromGeminiJson} />
          </motion.div>
        </>
      ) : (
        <>
          <TravelForm
            setPlanTripFromGeminiJson={setPlanTripFromGeminiJson}
            handleAnimate={setIsClicked}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default AnimatedButton;
