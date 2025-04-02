import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { cn } from "@/lib/utils";

const FlightCard = ({
    companyIcon,
    companyName,
    departureTime,
    arrivalTime,
    flightDuration,
    flightType,
    price,
    startAirport,
    destinationAirport,
}) => {
    return (
        <div
            className={cn(
                "w-[90%] p-4 bg-white dark:bg-gray-800 border border-gray-300 ",
                "rounded-lg shadow-md flex flex-col space-y-4 hover:scale-105 transition-all"
            )}
        >
            {/* Airline Info */}
            <div className="flex items-center space-x-3">
                <img src={companyIcon} alt={companyName} className="w-10 h-10" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{companyName}</span>
            </div>

            {/* Flight Times & Duration */}
            <div className="flex items-center justify-between">
                <div className="text-center">
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{departureTime}</p>
                </div>
                <Plane className="w-6 h-6 text-blue-500" />
                <div className="text-center">
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{arrivalTime}</p>
                </div>
            </div>

            {/* Flight Details */}
            <div className="flex justify-between items-center">
                <p className="text-gray-600 dark:text-gray-300">{flightDuration} | {flightType}</p>
                <p className="text-xl font-bold text-green-600">CA {price}</p>
            </div>

            {/* Route */}
            <div className="text-center">
                <p className="text-md font-semibold text-gray-900 dark:text-white">
                    {startAirport} → {destinationAirport}
                </p>
            </div>
        </div>
    );
};

export default FlightCard;
