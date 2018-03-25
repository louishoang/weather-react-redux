import { HttpClient } from './HttpClient';

const URL = 'https://fcc-weather-api.glitch.me/api/current';

const getWeather = (city) => {
  return HttpClient.get(`${URL}/?lat=${city.lat}&lon=${city.long}`)
};

export const WeatherApi = { getWeather };