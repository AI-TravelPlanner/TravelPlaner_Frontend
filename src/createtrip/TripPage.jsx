import React from "react";
import TravelForm from "./TravelForm";
import AnimatedButton from "./AnimatedButton";
import InfoDisplayCard from "./tripComponents/InfoDisplayCard";

const TripPage = () => {
  // return <TravelForm />;

  const [isFormOpen, setIsFormOpen] = React.useState(false);

  return (
    <div
      className={`grid min-h-screen border-3 border-blue-600 ${
        isFormOpen ? "" : "justify-center"
      }`}
    >
      <div className="w-full max-w-md p-4 border-3 border-pink-400 ">
        <AnimatedButton setIsFormOpen={setIsFormOpen} />
      </div>
    </div>
  );

  // return <InfoDisplayCard />;
};

export default TripPage;
