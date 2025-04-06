import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import TravelForm from "./TravelForm";

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
                trip information will be displayed here
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
