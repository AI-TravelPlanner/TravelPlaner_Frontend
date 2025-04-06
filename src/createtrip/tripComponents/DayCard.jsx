import React from "react";
import ActivityCard from "./ActivityCard";

const DayCard = () => {
  return (
    <div className="grid grid-cols-12 border-2 border-red-600 w-full">
      <div className="col-span-4 border-2 border-avocado-400 p-4 h-40">
        <div className="grid grid-rows-[80%_20%] gap-2 h-full">
          {/* Hotel area */}
          <div className="bg-gray-100 text-center border border-black rounded">
            Row 1 (80%)
          </div>

          {/* Weather Info area */}
          <div className="bg-gray-300 border border-black rounded">
            Row 2 (20%)
          </div>
        </div>
      </div>

      {/* Dail Activity area */}
      <div className="col-span-8 border-2 border-red-300 p-4 space-y-4">
        <div className=" border-2 border-cyan-100 p-1">
          <ActivityCard />
        </div>
        <div className="bg-green-200 p-1">Row 2</div>
        <div className="bg-yellow-200 p-1">Row 3</div>
      </div>
    </div>
  );
};

export default DayCard;
