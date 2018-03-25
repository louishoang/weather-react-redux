import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLongLat } from '../actions';

class CityContainer extends Component{
  constructor({city}){
    super();
    this.state = {
      id: city.id,
      name: city.name,
      temp: city.temp,
      description: city.description,
      icon: city.icon,
      lat: city.lat,
      long: city.long
    }
  }

  componentDidMount(){
    if (this.state.lat === null){
      this.props.getLongLat(this.state)
    }
  }

  render(){
    const { name, temp, description, icon } = this.state;
    
    return(
      <div>
        <div>
          <Link to="/">{`<< Home`}</Link>
        </div>
        Today's weather in {name} 
        <p>Temperature: {temp}&#176;F</p>
        <p>Description: {description}</p>
        <img width="100" height="100" src={icon} alt="weather"/>
      </div>
    )
  }
}
  
const mapStatetoProps = (state, ownProps) => {
  const currentCityId = ownProps.match.params.id;
  return { 
    city: state.cities.filter(city => city.id === currentCityId)[0] 
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    getLongLat: city => dispatch(getLongLat(city))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CityContainer);