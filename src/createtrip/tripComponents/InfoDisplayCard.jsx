import React from "react";
import DayCard from "./DayCard";
import "./customscroll.css"; // Import the custom scrollbar CSS

const InfoDisplayCard = ({ planTripFromGeminiJson }) => {
  // const { duration, dailyItinery } = planTripFromGeminiJson;
  const {
    jsonNode: { dailyItinery, weather, hotelDetails },
  } = planTripFromGeminiJson;

  function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  const dayChunks = chunkArray(dailyItinery, 3);

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-h-screen overflow-y-auto scrollbar-none">
      {dayChunks.map((chunk, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {chunk.map((itinerary, index) => (
            <DayCard
              key={colIndex * 3 + index}
              hotelDetails={hotelDetails}
              weatherDetails={weather}
              itinerary={itinerary}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfoDisplayCard;
