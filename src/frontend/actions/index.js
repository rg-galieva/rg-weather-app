import axios from 'axios'
import {FETCH_WEATHER} from '../constants';

const API_YAHOO_QUERY = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where ";

export function fetchWeather(city: 'Moscow') {
    const API_YAHOO_URL = API_YAHOO_QUERY + `text="${city}")&format=json`;
    const request = axios.get(API_YAHOO_URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}