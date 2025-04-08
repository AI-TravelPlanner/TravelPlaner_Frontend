import React from "react";
import ActivityCard from "./ActivityCard";
import HotelCard from "./HotelCard";
import WeatherCard from "./WeatherCard";

const DayCard = () => {
  return (
    <div className="w-100 h-43 rounded-lg shadow-xl border p-3 border-amber-800">

      <div className="grid grid-cols-12 w-full gap-1 rounded-lg min-w-0 min-h-0">


        {/* Hotel Info/ */}
        <div className="col-span-4 p-1">
          <div className="grid grid-rows-[80%_20%] gap-2 h-full">
            <div className="bg-gray-100 text-center border border-black rounded">
              {/* Row 1 (80%) */}
              <HotelCard
                hotelName="Sheraton"
                hotelAddress="Hotel Address"
                hotelRating="Hotel Rating"
                hotelPrice="$100"
                hotelImage="/src/assets/hotel-img/EmiratesHotel.webp"
                hotelCheckInDate={new Date().toLocaleDateString()}
                hotelCheckOutDate={new Date().toLocaleDateString()}
                hotelRoomType="Deluxe Room"
                hotelAmenities="Free Wi-Fi, Pool, Gym"
                hotelBookingLink="www.example.com"
                hotelContactNumber="123-456-7890"
                hotelDescription="Hotel Description"
                hotelNearbyAttractions="Nearby Attractions"
              />
            </div>

            <div className="bg-gray-300 border border-black rounded">
              {/* Row 2 (20%) */}
              <WeatherCard
                temperature={25}
                weatherDescription="Rainy"
              />
            </div>
          </div>
        </div>

        {/* Daily Activity area */}
        <div className="col-span-8 flex flex-col min-w-0 min-h-0">
          <div className="flex-shrink-0">
            <ActivityCard />
          </div>
          <div className="flex-shrink-0">
            <ActivityCard />
          </div>
          <div className="flex-shrink-0">
            <ActivityCard />
          </div>
        </div>


      </div>
    </div>
  );
};

export default DayCard;
