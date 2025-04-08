import React from "react";
import ActivityCard from "./ActivityCard";

const DayCard = ({ itinerary }) => {
  return (
    <div className="w-100 h-43 rounded-lg shadow-xl border p-3 border-amber-800">
      <div className="grid grid-cols-12 w-full gap-1 rounded-lg min-w-0 min-h-0">
        {/* Hotel Info/ */}
        <div className="col-span-4 p-1">
          <div className="grid grid-rows-[80%_20%] gap-2 h-full">
            <div className="bg-gray-100 text-center border border-black rounded">
              Row 1 (80%)
            </div>

            <div className="bg-gray-300 border border-black rounded">
              Row 2 (20%)
            </div>
          </div>
        </div>

        {/* Daily Activity area */}
        <div className="col-span-8 flex flex-col min-w-0 min-h-0">
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
