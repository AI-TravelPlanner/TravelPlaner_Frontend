import React from "react";
import ActivityCard from "./ActivityCard";
import HotelCard from "./HotelCard";
import WeatherCard from "./WeatherCard";

const DayCard = ({ itinerary, weatherDetails, hotelDetails }) => {
  return (
    <div className="w-100 h-50 rounded-lg shadow-xl  p-3">
      <div className="grid grid-cols-12 w-full gap-1 rounded-lg min-w-0 min-h-0">
        {/* Hotel Info/ */}
        <div className="col-span-4 p-1">
          <div className="grid grid-rows-[80%_20%] gap-2 h-full">
            <div className="bg-gray-100 text-center rounded-lg">
              {/* Row 1 (80%) */}
              <HotelCard hotelDetails={hotelDetails} />
            </div>

            <div className="bg-gray-300 border rounded-lg">
              {/* Row 2 (20%) */}
              <WeatherCard weatherDetails={weatherDetails} />
            </div>
          </div>
        </div>

        {/* Daily Activity area */}
        <div className="col-span-8 flex gap-1 flex-col min-w-0 min-h-0">
          {itinerary.activities.map((activity, index) => (
            <div className="flex-shrink-0" key={index}>
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayCard;
