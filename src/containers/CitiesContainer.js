import React, {Component} from 'react';
import { connect } from 'react-redux';
import CityItem from '../components/CityItem';
import CityForm from './CityForm';
import { deleteCity } from '../actions';

class CitiesContainer extends Component{

  render() {
    const { cities } = this.props
    return(
      <div>
        <h1>Today's Weather</h1>
        <CityForm/>
        <ul>
          { 
            cities.map(city => 
              <CityItem key={city.id} {...city} handleDelete={this.props.deleteCity}/>)
          }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { cities: state.cities };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCity: (id) => dispatch(deleteCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);