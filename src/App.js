import React, { Component } from 'react';
import logo from './globe.png';
import './App.css';


function calculateTotalCost(milesRange, vehicleMPG, gasPrice) {
  if (isNaN(milesRange) ||
    isNaN(vehicleMPG) ||
    isNaN(gasPrice)) {
    return 'Ensure Input Fields are Numbers';
  }

  const cost = (milesRange / vehicleMPG) * gasPrice;

  if (cost === "Infinity" ||
      milesRange === '' ||
      vehicleMPG === '' ||
      gasPrice === '') {
    return 'Supply All Input Values'
  }

  return "$" + parseFloat(cost).toFixed(2);
}

class GasCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {milesRange: 650, vehicleMPG:10, gasPrice: 2.51, locationStart:'Provo, UT', locationEnd:'Sacramento, CA'};

    this.handleMPGChange = this.handleMPGChange.bind(this);
    this.handleMilesChange = this.handleMilesChange.bind(this);
    this.handleGasPriceChange = this.handleGasPriceChange.bind(this);
  }

  handleMPGChange(e) {
    if (Number.isNaN(e.target.value) || e.target.value < 0) {
      this.setState({vehicleMPG: ''});
      return;
    }

    this.setState({vehicleMPG: e.target.value});
  }

  handleMilesChange(e) {
    if (Number.isNaN(e.target.value) || e.target.value < 0) {
      this.setState({milesRange: ''});
      return;
    }

    this.setState({milesRange: e.target.value});
  }

  handleGasPriceChange(e) {
    if (Number.isNaN(e.target.value) || e.target.value < 0) {
      this.setState({gasPrice: ''});
      return;
    }

    this.setState({gasPrice: e.target.value});
  }

  render() {
    const locationStart = this.state.locationStart;
    const locationEnd = this.state.locationEnd;

    const milesRange = this.state.milesRange;
    const vehicleMPG = this.state.vehicleMPG;
    const gasPrice = this.state.gasPrice;

    const cost = calculateTotalCost(milesRange, vehicleMPG, gasPrice);

    return (
      <div className="mainApp">

      <fieldset>
        <legend>Location Details</legend>
        <p>Starting location:</p>
        <input value={locationStart}/>
        <p>Ending location:</p>
        <input value={locationEnd}/>
      </fieldset>

      <fieldset>
        <legend>Input</legend>
        <p>Total Miles to Travel:</p>
        <input value={milesRange} onChange={this.handleMilesChange} />
        <p>Vehicle MPG:</p>
        <input value={vehicleMPG} onChange={this.handleMPGChange}/>
        {vehicleMPG < 15 && <div id="mileage"><font color="#ff0000">Poor</font></div> }
        {vehicleMPG >= 15 && vehicleMPG < 20 && <div id="mileage"><font color="#b2b200">Fair</font></div> }
        {vehicleMPG >= 20 && vehicleMPG < 30 && <div id="mileage"><font color="#0000ff">Good</font></div> }
        {vehicleMPG >= 30 && <div id="mileage"><font color="#008000">Excellent</font></div> }
        <p>Gas Price:</p>
        <input value={gasPrice} onChange={this.handleGasPriceChange}/>
      </fieldset>

      <fieldset disabled="disabled">
        <legend>Output </legend>
        <p>Total Cost:</p>
        <input value={cost}/>
      </fieldset>

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
          <h3>Welcome to Gas Calculator!</h3>
        </div>
        <div>
          <GasCalculator />
        </div>
      </div>
    );
  }
}

export default App;
