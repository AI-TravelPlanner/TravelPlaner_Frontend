import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TravelForm from "./TravelForm";

function AnimatedButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      animate={{
        x: isClicked
          ? "35vw" // Default for small screens (e.g., phone)
          : "0%",
      }}
      transition={{ type: "spring", stiffness: 50 }}
      className="md:x-[40vw] lg:x-[40vw]"
    >
      {isClicked ? (
        <motion.button
          className="px-4 py-2 text-sm md:text-base lg:text-lg bg-blue-500 text-white rounded"
          onClick={() => setIsClicked(false)} // Resets when clicked again
        >
          I'm a Button!
        </motion.button>
      ) : (
        <motion.div onClick={() => setIsClicked(true)}>
          <TravelForm />
          {/* <TravelForm handleAnimate={setIsClicked} /> */}
        </motion.div>
      )}
    </motion.div>
  );
}

export default AnimatedButton;
