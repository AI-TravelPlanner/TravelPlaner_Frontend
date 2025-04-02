/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const SubHeader = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex justify-center bg-linear-to-b from-red-200 via-pink-400 to-rose-600"
    >
      <section className="w-[80vw] flex flex-col md:flex-row justify-center items-center gap-10 p-6 m-5 md:p-16 bg-gray-200 rounded-4xl">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="src/assets/hero-img/earth.png"
            alt="Globe image"
            className="w-full max-w-[300px] bg-transparent"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col text-center md:text-left space-y-7"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-gray-900 text-3xl md:text-4xl font-bold">
            Discover Hidden Gems and Unforgettable Experiences
          </h1>

          {/* Subheading */}
          <p className="text-orange-600 font-bold">
            Your Next Adventure Awaits
          </p>

          {/* Description */}
          <p className="text-gray-800 text-lg">
            We help you uncover the perfect moments when breathtaking
            destinations reveal their hidden gems or exciting travel
            opportunities arise. From planning your dream getaway to discovering
            unforgettable experiences, we're here to guide you every step of the
            way and make your journey as seamless and inspiring as possible.
          </p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-5 mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            {/* Get Started Button */}
            <Button className="p-6 px-8 w-auto rounded-2xl shadow-md bg-blue-700 text-white border-2 border-transparent transition-all duration-500 hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer">
              Get Started
            </Button>

            {/* Learn More Button */}
            <Button className="p-6 px-8 w-auto rounded-2xl shadow-md bg-blue-700 text-white border-2 border-transparent transition-all duration-500 hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SubHeader;
