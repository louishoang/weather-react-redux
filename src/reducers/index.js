import * as Constants from '../constants';
import { combineReducers } from 'redux';

const initialState = {
  cities: [],
  hasError: false,
  isLoading: false
};

const cities = (state = initialState.cities, action) => {
  switch (action.type){
    case Constants.ADD_CITY:
      return state.concat(action.payload);
    case Constants.DELETE_CITY:
      return state.filter(city => city.id !== action.payload.id);
    case Constants.UPDATE_CITY:
      return state.map(city => {
          if (city.id === action.payload.id){
            return city = action.payload
          } else {
            return city
          }
        }
      );
    default:
      return state;
  }
};

const fetchWeatherFailed = (state = initialState.hasError, action) => {
  switch (action.type) {
      case Constants.FETCH_WEATHER_DETAILS_FAILED:
        return action.hasError
      default:
        return state;
  }
}

const fetchingWeather = (state = initialState.isLoading, action) => {
  switch (action.type) {
      case Constants.FETCHING_WEATHER_DETAILS:
        return action.isLoading
      default:
        return state;
  }
}

export default combineReducers({
  cities,
  fetchWeatherFailed,
  fetchingWeather
});

