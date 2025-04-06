import React from "react";
import TravelForm from "./TravelForm";
import AnimatedButton from "./AnimatedButton";

const TripPage = () => {
  // return <TravelForm />;

  return (
    <div className="grid  min-h-screen border-3 border-blue-600">
      {/* <AnimatedButton /> */}
      <div className="w-full max-w-md p-4 border-3 border-pink-400 ">
        {/* <TravelForm /> */}
        <AnimatedButton />
      </div>
    </div>
  );
};

export default TripPage;
