import React, { Component } from 'react';
import logo from './globe.png';
import './App.css';

const gasPrice = 2.51;

class GasCalculator extends Component {

  handleValueChange(value) {
    this.setState({currency: 'd',value});
  }

  

  render() {
    return (
      <div className="mainApp">
      <fieldset>
        <legend>Location Details</legend>
        <p>Enter starting location:</p>
        <input />
        <p>Enter ending location:</p>
        <input />
      </fieldset>

      <fieldset>
        <legend>Miles Details</legend>
        <p>Total Miles:</p>
        <input />
        <p>Enter Your Vehicle MPG:</p>
        <input onChange={this.handleValueChange}/>
      </fieldset>

      <fieldset disabled="disabled">
        <legend>Output </legend>
        <p>Current Gas Price:</p>
        <input value={gasPrice}/>
        <p>Total Cost:</p>
        <input />
      </fieldset>

      </div>
    );
  }
}

// class FieldInput extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(e) {
//     this.props.onChange(e.target.value);
//   }
//   render() {
//     const amount = this.props.amount;
//     const currency = this.props.currency;
//     return (
//       <fieldset>
//         <legend>Enter amount in {currencyNames[currency]}:</legend>
//         <input
//           value={amount}
//           onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

class Map extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome! Get started by choosing a location</h2>
        </div>
        <div>
          <GasCalculator />
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
