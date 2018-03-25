import * as Constants from '../constants' ;
import { GeoLocation } from '../api/GeoLocationApi';
import { WeatherApi } from '../api/WeatherApi';

export const addCity = (city) => (
  {
    type: Constants.ADD_CITY,
    payload: city
  }
)

export const deleteCity = (id) => (
  {
    type: Constants.DELETE_CITY,
    payload: id
  }
)

export const updateCity = (city) => (
  {
    type: Constants.UPDATE_CITY,
    payload: city
  }
)

export const fetchingWeather = (bool) => (
  {
    type: Constants.FETCHING_WEATHER_DETAILS,
    isLoading: bool
  }
)

export const fetchWeatherFailed = (bool) => (
  {
    type: Constants.FETCH_WEATHER_DETAILS_FAILED,
    hasError: bool
  }
)

export const fetchWeatherSucceeded = (data, city) => {
  return dispatch => {
    const weather = {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
    const cityData = Object.assign({}, city, weather)
    dispatch(updateCity(cityData))
  }
}

export function getLongLat(city) {
  return dispatch => {
    GeoLocation.getLongLat(city).then(
      response => dispatch(fetchLocationSucceeded(response.data, city))
    )
  }
}

export const fetchLocationSucceeded = (data, city) => {
  return dispatch => {
    const locationDetails = data.results[0].geometry.location
    const cityData = Object.assign(
        {},
        city, 
        { lat: locationDetails.lat, long: locationDetails.lng}
      )
  
    dispatch(getWeather(cityData))
  }
}

export function getWeather(city) {
  return dispatch => {
    dispatch(fetchingWeather(true))
    WeatherApi.getWeather(city).then(
      response => dispatch(fetchWeatherSucceeded(response.data, city)),
      dispatch(fetchingWeather(false))
    )
  }
}