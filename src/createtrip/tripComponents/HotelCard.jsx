import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HotelCard = ({
    hotelName,
    hotelAddress,
    hotelRating,
    hotelPrice,
    hotelImage,
    hotelCheckInDate,
    hotelCheckOutDate,
    hotelRoomType,
    hotelAmenities,
    hotelBookingLink,
    hotelContactNumber,
    hotelDescription,
    hotelNearbyAttractions
}) => {

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
        <div className={cn("cursor-pointer")} onClick={handleFlip}>

            <motion.div
                className="relative preserve-3d duration-300 hover:scale-105"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Frontside */}
                <div
                    className={cn(
                        "absoulte inset-0 p-2 rounded-lg shadow-xl border border-gray-300",
                        "dark:bg-gray-800 dark:border-gray-700 bg-[#D9D9D9] h-full",
                    )}
                    style={{
                        backfaceVisibility: "hidden"
                    }}
                >
                    <div className="flex flex-col justify-between items-center h-full">
                        <img src={hotelImage} alt={hotelName} className="w-full h-32 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold">{hotelName}</h2>
                        <p className="text-gray-600">{hotelPrice}/Night</p>
                    </div>
                </div>

                {/* Backside */}
                <div
                    className="absolute inset-0 p-2 bg-[#D9D9D9] 
                    dark:bg-gray-800 rounded-lg shadow-sm border border-gray-500 
                    dark:border-gray-700 p-6 flex flex-col items-center justify-center min-h-full"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)", // Start flipped
                        height: "auto",
                        minHeight: "100%",
                    }}
                >
                    <h2 className="text-xl font-bold">{hotelRoomType}</h2>
                    <p className="text-gray-600">{hotelAmenities}</p>
                    <p className="text-gray-600">{hotelContactNumber}</p>
                    <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Book Now</Button>
                </div>
            </motion.div>

        </div>
    )
}

export default HotelCard