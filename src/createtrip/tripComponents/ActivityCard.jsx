import React from "react";

const ActivityCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border rounded-lg ">
      {/* Image Section */}
      <div className=" col-span-4 w-full h-full border-2 border-blue-300 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Activity"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="col-span-8 p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold">Activity Name</h3>
        <p className="text-gray-600 text-xs mt-1">
          Description of the activity goes here.
        </p>
        <p className="text-sm font-bold mt-2">Price: $99.99</p>
      </div>
    </div>
  );
};

export default ActivityCard;
