import React from "react";
import FlightCard from "./FlightCard";

const flights = [
    {
        companyIcon: "/src/assets/airline-icons/air-canada.svg",
        companyName: "Air Canada",
        departureTime: "08:00 AM",
        arrivalTime: "02:30 PM",
        flightDuration: "6h 30m",
        flightType: "Non-stop",
        price: "$450",
        startAirport: "Toronto Pearson (YYZ)",
        destinationAirport: "London Heathrow (LHR)"
    },
    {
        companyIcon: "/src/assets/airline-icons/delta-airlines.png",
        companyName: "Delta Airlines",
        departureTime: "09:15 AM",
        arrivalTime: "05:45 PM",
        flightDuration: "8h 30m",
        flightType: "Transit",
        price: "$520",
        startAirport: "New York JFK (JFK)",
        destinationAirport: "Paris Charles de Gaulle (CDG)"
    },
    {
        companyIcon: "/src/assets/airline-icons/emirates-airlines.png",
        companyName: "Emirates",
        departureTime: "10:30 PM",
        arrivalTime: "04:50 AM",
        flightDuration: "14h 20m",
        flightType: "Non-stop",
        price: "$980",
        startAirport: "Dubai Intl (DXB)",
        destinationAirport: "Sydney Intl (SYD)"
    },
    {
        companyIcon: "/src/assets/airline-icons/lufthansa-airlines.webp",
        companyName: "Lufthansa",
        departureTime: "06:00 PM",
        arrivalTime: "01:30 AM",
        flightDuration: "7h 30m",
        flightType: "Transit",
        price: "$670",
        startAirport: "Frankfurt Intl (FRA)",
        destinationAirport: "Los Angeles Intl (LAX)"
    },
    {
        companyIcon: "/src/assets/airline-icons/emirates-airlines.png",
        companyName: "Emirates",
        departureTime: "08:45 AM",
        arrivalTime: "04:20 PM",
        flightDuration: "7h 35m",
        flightType: "Non-Stop",
        price: "$750",
        startAirport: "Dubai Intl (DXB)",
        destinationAirport: "London Heathrow (LHR)"
    },
    {
        companyIcon: "/src/assets/airline-icons/delta-airlines.png",
        companyName: "Delta Airlines",
        departureTime: "10:15 PM",
        arrivalTime: "05:50 AM",
        flightDuration: "7h 35m",
        flightType: "Transit",
        price: "$690",
        startAirport: "John F. Kennedy Intl (JFK)",
        destinationAirport: "Paris Charles de Gaulle (CDG)"
    }
];

const FlightGrid = () => {
    return (


        <div className="flex flex-col items-center xl:flex-row xl:items-start bg-[#4A90E2] dark:bg-gray-800">

            {/* Promo section */}
            <div className="w-[90%] xl:w-1/2 flex flex-col p-10 xl:order-2">
                <p className="text-3xl text-[#FF4800] font-semibold p-5">TRAVEL SMARTER, SAVE MORE</p>
                <h2 className="text-5xl font-bold text-gray-900 p-5">Affordable Prices, Just for You</h2>
                <p className="text-2xl text-white p-10">
                    Your dream trip doesn’t have to break the bank. We’re here to offer unbeatable deals designed with you in mind.
                    Wherever you’re headed, we’ll help you get there for less. Let’s make your journey unforgettable.
                </p>
                <button className="self-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                    View More
                </button>
            </div>

            {/* Flights grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 justify-items-center xl:order-1">
                {flights.map((flight, index) => (
                    <FlightCard key={index} {...flight} />
                ))}
            </div>
        </div>
    );
};

export default FlightGrid;