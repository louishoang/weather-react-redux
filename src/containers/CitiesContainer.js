import React from 'react';
import { connect } from 'react-redux';
import CityItem from '../components/CityItem';
import CityForm from './CityForm';

const CitiesContainer = ({cities}) => (
  <div>
    <h1>Today's Weather</h1>
    <CityForm/>
    <ul>
      { 
        cities.map(city => <CityItem key={city.id} {...city}/>)
      }
    </ul>
  </div>
);

const mapStateToProps = state => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(CitiesContainer);