import { HttpClient } from './HttpClient';

const URL = 'https://maps.googleapis.com/maps/api/geocode/json';

const getLongLat = (city) => {
  return HttpClient.get(`${URL}?address=${city.name}`)
};

export const GeoLocation = { getLongLat };