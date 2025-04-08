import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/gemini";

// Set the base URL for your API
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define a POST method
export const planTrip = async (endpoint, data) => {
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
    }
};

// Define a GET method
// export const getData = async (endpoint) => {
//     try {
//         const response = await axiosInstance.get(endpoint);
//         return response.data;
//     } catch (error) {
//         console.error("Error in GET request:", error);
//         throw error;
//     }
// };

export default axiosInstance;
