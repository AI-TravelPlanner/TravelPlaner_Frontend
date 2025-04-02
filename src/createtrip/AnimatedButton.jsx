import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TravelForm from "./TravelForm";

function AnimatedButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ x: "-50%" }} // Initial position for centering
      animate={{
        x: isClicked ? "50vw" : "-50%", // Animate to the right (50% of the viewport width) or back to the center
      }}
      transition={{ type: "spring", stiffness: 100 }}
      className="absolute top-1/2 -translate-y-1/2" // Position the div in the center vertically
    >
      {isClicked ? (
        <motion.button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsClicked(false)} // Resets when clicked again
        >
          I'm a Button!
        </motion.button>
      ) : (
        <motion.div>
          <TravelForm handleAnimate={setIsClicked} />
        </motion.div>
      )}
    </motion.div>
  );
}

export default AnimatedButton;
