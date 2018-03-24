import * as Constants from '../constants' ;

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

export const fetchWeatherSucceeded = (data) => {
  return({
    type: Constants.FETCH_WEATHER_DETAILS_SUCCEEDED,
    data
  })
}