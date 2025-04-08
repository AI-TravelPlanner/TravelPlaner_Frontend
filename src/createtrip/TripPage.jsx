import React from "react";
import { useState } from "react";
import TravelForm from "./TravelForm";
import AnimatedButton from "./AnimatedButton";
import InfoDisplayCard from "./tripComponents/InfoDisplayCard";

const TripPage = () => {
  // return <TravelForm />;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [planTripFromGeminiJson, setPlanTripFromGeminiJson] = useState(null);

  console.log("Type of planTripFromGeminiJson:", typeof planTripFromGeminiJson);
  console.log("Content of planTripFromGeminiJson:", planTripFromGeminiJson);

  return (
    <div className={`grid min-h-screen ${isFormOpen ? "" : "justify-center"}`}>
      <div className="w-full p-4">
        <AnimatedButton
          planTripFromGeminiJson={planTripFromGeminiJson}
          setPlanTripFromGeminiJson={setPlanTripFromGeminiJson}
          setIsFormOpen={setIsFormOpen}
        />
      </div>
    </div>
  );

  // return <InfoDisplayCard />;
};

export default TripPage;
