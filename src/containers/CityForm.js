import React, { Component } from 'react';
import { addCity } from '../actions';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

class CityForm extends Component {
  constructor(){
    super();

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const name = this.state.name;
    if (name.length !== 0){
      this.props.addCity({ id: uuidv1(), name: this.state.name });
      this.setState({ name: '' });
    }
  }

  handleChange(e){
    this.setState({ name: e.target.value });
  }

  render(){
    const { name } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">
              SAVE
            </button>
          </div>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: city => dispatch(addCity(city))
  };
}

export default connect(null, mapDispatchToProps)(CityForm);