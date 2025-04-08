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

  const dayChunks = chunkArray(dailyItinery, 5);

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-h-screen mb-5 overflow-y-auto scrollbar-none">
      {dayChunks.map((chunk, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col gap-5 shadow-md rounded-lg bg-gray-200 dark:bg-gray-800 p-2 overflow-y-auto scrollbar-none"
        >
          {chunk.map((itinerary, index) => (
            <DayCard
              key={colIndex * 5 + index}
              days={itinerary.day}
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
