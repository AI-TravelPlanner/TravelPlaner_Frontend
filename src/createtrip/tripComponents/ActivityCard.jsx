import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ActivityCard = ({ activity }) => {
  return (
    <div className="grid grid-cols-12 gap-1 rounded-lg w-full h-full min-w-0 min-h-0 ">
      {/* Image Section */}
      <div className="col-span-3 w-auto h-auto border-2 border-blue-300 rounded-lg overflow-hidden shadow-lg  flex-shrink-0">
        <img
          src="https://via.placeholder.com/150"
          alt="Activity"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="col-span-9 p-4 rounded-lg shadow-lg flex-shrink flex flex-col min-w-0 min-h-0">
        <div className="flex justify-between w-full">
          <p className="text-xs font-bold">Activity Name</p>
          <p className="text-xs font-bold">Price: $99.99</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
