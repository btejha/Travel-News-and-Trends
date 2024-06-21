// lib/api.js by TejhaBollu

import axios from 'axios';

const API_KEY = 'UYyge91y28IZpWbqBTsPm15NCbCK2E8J';
const TOP_TRAVEL_STORIES_URL = 'https://api.nytimes.com/svc/topstories/v2/travel.json';
const ARTICLE_SEARCH_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


export const fetchTravelNews = async () => {
    const response = await axios.get(`${TOP_TRAVEL_STORIES_URL}?api-key=${API_KEY}`);
    return response.data.results;
};

export const searchArticles = async (query) => {
    const response = await axios.get(`${ARTICLE_SEARCH_URL}?q=${query}&api-key=${API_KEY}`);
    return response.data.response.docs;
};