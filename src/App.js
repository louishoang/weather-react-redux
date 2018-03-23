import React, { Component } from 'react';
import './App.css';
import Cities from './containers/CitiesContainer';
import CityForm from './containers/CityForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        Today's Weather
        <CityForm/>
        <Cities/>
      </div>
    );
  }
}

export default App;
