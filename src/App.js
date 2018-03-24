import React, { Component } from 'react';
import './App.css';
import Cities from './containers/CitiesContainer';
import { Route, Switch, Link } from 'react-router-dom';
import City from './containers/CityContainer';

const NoMatch = () => (
  <div>
    <Link to="/">{"<< Home"}</Link>
    <div>404 Page</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Cities} />
          <Route path="/cities/:id" component={City}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
