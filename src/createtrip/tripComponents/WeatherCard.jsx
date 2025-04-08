import React from "react";
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaSmog,
  FaWind,
  FaCloudSun,
  FaBolt,
  FaCloudShowersHeavy,
} from "react-icons/fa";

// const weatherIconsMap = {
//     Clear: <FaSun className="text-yellow-500 w-16 h-16 mb-4" />,
//     Sunny: <FaSun className="text-yellow-500 w-16 h-16 mb-4" />,
//     Clouds: <FaCloud className="text-gray-500 w-16 h-16 mb-4" />,
//     Cloudy: <FaCloud className="text-gray-500 w-16 h-16 mb-4" />,
//     Rain: <FaCloudRain className="text-blue-500 w-16 h-16 mb-4" />,
//     Drizzle: <FaCloudShowersHeavy className="text-blue-400 w-16 h-16 mb-4" />,
//     Thunderstorm: <FaBolt className="text-yellow-400 w-16 h-16 mb-4" />,
//     Snow: <FaSnowflake className="text-blue-200 w-16 h-16 mb-4" />,
//     Mist: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
//     Haze: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
//     Fog: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
//     Windy: <FaWind className="text-gray-400 w-16 h-16 mb-4" />,
//     Default: <FaCloudSun className="text-yellow-400 w-16 h-16 mb-4" />
// };

const WeatherCard = ({ weatherDetails }) => {
  // const { weather, main } = weatherDetails;
  const { temperature, condition } = weatherDetails;
  return (
    <div className="w-full h-full min-h-0 min-w-0 grid grid-cols-2 gap-1 px-1 dark:bg-whitebg-gray-800 text-center">
      <h3 className="font-bold text-xs">{temperature}°C</h3>
      <h4 className="text-[10px] text-gray-600 dark:text-gray-400">
        {condition}
      </h4>
    </div>
  );
};

export default WeatherCard;
