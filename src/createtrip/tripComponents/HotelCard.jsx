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
        <div className={cn("cursor-pointer w-full h-full min-h-0 min-w-0 dark:border-gray-700 bg-white dark:bg-gray-800")} onClick={handleFlip}>
            <motion.div
                className="relative preserve-3d duration-300 hover:scale-105"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{
                    transformStyle: "preserve-3d",
                }}>
                <div
                    className="absolute inset-0 w-full h-full rounded-lg shadow-xl border px-3 grid grid-row-3"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img src={hotelImage} alt={hotelName} className="w-full h-15 object-cover rounded-lg" />
                    <h2 className="font-bold">{hotelName}</h2>
                    <p className="text-sm text-gray-600">{hotelPrice}/Night</p>
                </div>
                <div
                    className='absolute inset-0 w-full h-full rounded-lg shadow-xl border grid grid-row-3'
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)", // Start flipped
                    }}
                >
                    <h2 className="font-bold">{hotelRoomType}</h2>
                    <p className="text-gray-600">{hotelAmenities}</p>
                    <p className="text-gray-600">{hotelContactNumber}</p>
                </div>
            </motion.div>
        </div>
    )
}

export default HotelCard