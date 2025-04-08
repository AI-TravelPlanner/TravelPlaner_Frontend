import React from "react";
import ActivityCard from "./ActivityCard";
import HotelCard from "./HotelCard";
import WeatherCard from "./WeatherCard";

const DayCard = ({ itinerary, weatherDetails, hotelDetails, days }) => {
  return (
    <div className="w-full lg:w-100 h-50 rounded-lg bg-blue-100 shadow-md p-2">
      <div className="grid grid-cols-12 w-full gap-1 rounded-lg min-w-0 min-h-0">
        {/* Day */}
        <div className="col-span-12 text-xs text-center">
          <p>{"Day " + days}</p>
        </div>

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
