import * as Constants from '../constants' ;

export const addCity = (city) => (
  {
    type: Constants.ADD_CITY,
    payload: city
  }
)

export const deleteCity = (city) => (
  {
    type: Constants.DELETE_CITY,
    payload: city
  }
)