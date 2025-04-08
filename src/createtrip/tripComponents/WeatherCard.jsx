import React from 'react';
import {
    FaSun,
    FaCloud,
    FaCloudRain,
    FaSnowflake,
    FaSmog,
    FaWind,
    FaCloudSun,
    FaBolt,
    FaCloudShowersHeavy
} from 'react-icons/fa';

const weatherIconsMap = {
    Clear: <FaSun className="text-yellow-500 w-16 h-16 mb-4" />,
    Sunny: <FaSun className="text-yellow-500 w-16 h-16 mb-4" />,
    Clouds: <FaCloud className="text-gray-500 w-16 h-16 mb-4" />,
    Cloudy: <FaCloud className="text-gray-500 w-16 h-16 mb-4" />,
    Rain: <FaCloudRain className="text-blue-500 w-16 h-16 mb-4" />,
    Drizzle: <FaCloudShowersHeavy className="text-blue-400 w-16 h-16 mb-4" />,
    Thunderstorm: <FaBolt className="text-yellow-400 w-16 h-16 mb-4" />,
    Snow: <FaSnowflake className="text-blue-200 w-16 h-16 mb-4" />,
    Mist: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
    Haze: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
    Fog: <FaSmog className="text-gray-400 w-16 h-16 mb-4" />,
    Windy: <FaWind className="text-gray-400 w-16 h-16 mb-4" />,
    Default: <FaCloudSun className="text-yellow-400 w-16 h-16 mb-4" />
};

const WeatherCard = ({ temperature, weatherDescription }) => {
    const weatherKey = Object.keys(weatherIconsMap).find(key =>
        weatherDescription.toLowerCase().includes(key.toLowerCase())
    ) || 'Default';

    const weatherIcon = weatherIconsMap[weatherKey];

    return (
        <div className="w-full h-full min-h-0 min-w-0 grid grid-cols-2 gap-2 px-2 dark:border-gray-700 bg-white dark:bg-gray-800 text-center">
            {/* {weatherIcon} */}
            <h2 className="font-bold">{temperature}°C</h2>
            <p className="text-gray-600 dark:text-gray-400">{weatherDescription}</p>
        </div>
    );
};

export default WeatherCard;