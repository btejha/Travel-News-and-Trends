// lib/api.js by TejhaBollu

import axios from 'axios';

const API_KEY = 'UYyge91y28IZpWbqBTsPm15NCbCK2E8J';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/travel.json';

export const fetchTravelNews = async () => {
    const response = await axios.get(`${BASE_URL}?api-key=${API_KEY}`);

    return response.data.results;
};
