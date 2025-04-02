import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';

const CustomerTestimonial = ({
    testimonial,
    customerImage,
    customerName,
    tripType,
    tripLocation,
    rating,
    className,
}) => {

    const [isFlipped, setFlipped] = useState(false);
    const [isAnimating, setAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setFlipped(!isFlipped)
            setAnimating(true)
        }
    }

    return (
        <div
            className={cn("w-[100%] h-64 perspective-1000 cursor-pointer", className)}
            onClick={handleFlip}
        >
            <motion.div
                className="relative w-full h-full preserve-3d duration-300 hover:scale-105"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onAnimationComplete={() => setAnimating(false)}
                style={{
                    transformStyle: "preserve-3d"
                }}
            >

                {/* Front Side */}
                <div className={cn(
                    "absolute w-[100%] p-6 bg-white rounded-lg shadow-sm border border-gray-500",
                    "dark:bg-gray-800 dark:border-gray-700 bg-[#D9D9D9]",
                    "flex flex-col h-full"
                )}
                    style={{
                        backfaceVisibility: "hidden"
                    }}
                >
                    {/* Quote icon */}
                    <FaQuoteLeft className="w-8 h-8 text-black dark:text-blue-400" />

                    {/* Testimonial text */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">
                        {testimonial}
                    </p>

                    {/* Customer info */}
                    <div className="mt-auto flex items-center">
                        <img
                            src={customerImage}
                            alt={customerName}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <span className="font-medium text-gray-800 dark:text-white">
                            {customerName}
                        </span>
                        {/* Star Rating */}
                        <div className="flex text-yellow-500 px-5">
                            {Array.from({ length: rating }, (_, i) => (
                                <FaStar key={i} className="w-4 h-4" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backside */}
                <div className="absolute w-[100%] p-6 h-full backface-hidden bg-[#D9D9D9] 
                dark:bg-gray-800 rounded-lg shadow-sm border border-gray-500 
                dark:border-gray-700 p-6 flex flex-col items-center justify-center rotate-y-180
                "
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)", // Start flipped
                    }}
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{customerName}</h3>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        went on a <span className="font-medium text-blue-600 dark:text-blue-400">{tripType}</span> to
                    </p>

                    <p className="text-lg font-bold text-gray-800 dark:text-yellow-400 mt-1">{tripLocation}</p>

                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Verified Customer</p>
                    <img
                        src={customerImage}
                        alt={customerName}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                </div>
            </motion.div>
        </div>

    )
}

export default CustomerTestimonial

