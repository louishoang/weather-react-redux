import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherSucceeded } from '../actions';
import { Link } from 'react-router-dom';

const URL = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';

class CityContainer extends Component{
  constructor({city}){
    super();
    this.state = {
      id: city.id,
      name: city.name,
      temp: null,
      description: '',
      icon: ''
    }
  }

  componentDidMount(){
    fetch(URL).then((response) => response.json()).then(data => {
      this.setState(
        {
          temp: data.main.temp, 
          description: data.weather[0].description,
          icon: data.weather[0].icon
        }
      );
    })
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
        <img width="100" height="100" src={icon}/>
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
    fetchWeatherSucceeded: data => dispatch(fetchWeatherSucceeded(data))
  }
}

export default connect(mapStatetoProps)(CityContainer);