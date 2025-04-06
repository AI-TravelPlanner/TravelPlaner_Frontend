import axios from 'axios';

                          const BASE_URL = "http://localhost:8080/api/v1/gemini/plan-trip"; 

// Set the base URL for your API
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
