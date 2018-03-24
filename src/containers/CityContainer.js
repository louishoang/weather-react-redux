import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityContainer extends Component{
  render(){
    const city = this.props.city;
    return(
      <div>Today's weather in {city.name}</div>
    )
  }
}
  
const mapStatetoProps = (state, ownProps) => {
  const currentCityId = ownProps.match.params.id;
  return { city: state.cities.filter(city => city.id === currentCityId)[0] }
}

export default connect(mapStatetoProps)(CityContainer);