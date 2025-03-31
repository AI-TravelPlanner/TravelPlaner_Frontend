/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { HiArrowLongDown } from "react-icons/hi2";

// Array holding the URLs of travel images for the carousel
const travelImagesArr = [
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2560&auto=format&fit=crop&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=2560&auto=format&fit=crop&q=60",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?w=900&auto=format&fit=crop&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=900&auto=format&fit=crop&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=2560&auto=format&fit=crop&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=2560&auto=format&fit=crop&q=60",
  },
];

export function ImageCarousel() {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to control arrow visibility
  const [arrowVisible, setArrowVisible] = useState(false);

  // Auto-slide functionality: Changes the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? travelImagesArr.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === travelImagesArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Scroll to the next section (smooth scroll)
  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
      {/* Image Carousel: Handles the transition of images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.div
            // Ensures a new image is rendered for each slide change
            key={currentIndex}
            // Initial position for animation (off-screen to the right)
            initial={{ x: "100%", opacity: 1 }}
            // Final position for animation (center of screen)
            animate={{ x: "0%", opacity: 1 }}
            // Exit animation (off-screen to the left)
            exit={{ x: "-100%", opacity: 1 }}
            // Defines the animation speed and easing
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              // Dynamic background image
              backgroundImage: `url(${travelImagesArr[currentIndex].url})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Text & Arrow: Displayed on top of the image carousel */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-6 lg:px-20"
        // Initial fade-in position (50px down)
        initial={{ opacity: 0, y: 50 }}
        // Final position (centered)
        animate={{ opacity: 1, y: 0 }}
        // Defines the animation speed and delay
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {/* Heading: Title text */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl p-5 font-bold bg-gradient-to-r from-red-700 via-red-500 to-orange-400 bg-clip-text text-transparent">
          Set your destination with us
        </h1>

        {/* Description Text */}
        <p className="text-lg md:text-xl mt-9 max-w-2xl">
          Discover new horizons and plan your next adventure with ease - Your
          journey ✈️ starts here.
        </p>

        {/* Down Arrow: Appears after a short delay */}

        <HiArrowLongDown
          className="size-8 text-white text-3xl cursor-pointer mt-20 animate-bounce animate-bounce-faster"
          onClick={scrollToNextSection} // Scrolls to the next section when clicked
        />
      </motion.div>

      {/* Previous Slide Button: Arrow on the left to navigate to the previous slide */}
      <div className="hidden group-hover:block absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Next Slide Button: Arrow on the right to navigate to the next slide */}
      <div className="hidden group-hover:block absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Slide Indicators: Dots for each slide */}
      <div className="absolute bottom-4 flex space-x-2">
        {travelImagesArr.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)} // Navigates to the specific slide
            className={`cursor-pointer text-3xl transition-all ${
              // Highlight the active slide
              slideIndex === currentIndex ? "text-white" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCarousel;
