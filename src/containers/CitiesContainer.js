import React from 'react';
import { connect } from 'react-redux';

const CitiesContainer = ({cities}) => (
  <ul>
    { 
      cities.map(city => (
        <li key={city.id}>
          { city.name }
        </li>
      ))
    }
  </ul>
);

const mapStateToProps = state => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(CitiesContainer);