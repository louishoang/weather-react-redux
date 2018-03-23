import * as Constants from '../constants';

const initialState = {
  cities: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case Constants.ADD_CITY:
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      }
    case Constants.DELETE_CITY:
      const cities = state.cities.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        cities: cities
      }
    default:
      return state;
  }
};

export default rootReducer;

