import React, { Component } from 'react';
import logo from './globe.png';
import './App.css';


function calculateTotalCost(milesRange, vehicleMPG, gasPrice) {
  if (Number.isNaN(milesRange) ||
    Number.isNaN(vehicleMPG) ||
    Number.isNaN(gasPrice)) {
    return '';
  }
  return (milesRange / vehicleMPG) * gasPrice;
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
    if (Number.isNaN(e.target.value)) {
      this.setState({vehicleMPG: ''});
      return;
    }
    this.setState({vehicleMPG: e.target.value});
  }

  handleMilesChange(e) {
    if (Number.isNaN(e.target.value)) {
      this.setState({milesRange: ''});
      return;
    }
    this.setState({milesRange: e.target.value});
  }

  handleGasPriceChange(e) {
    if (Number.isNaN(e.target.value)) {
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
        <p>Total Miles:</p>
        <input value={milesRange} onChange={this.handleMilesChange}/>
        <p>Enter Your Vehicle MPG:</p>
        <input value={vehicleMPG} onChange={this.handleMPGChange}/>
        {vehicleMPG < 15 && <div class="mileage">Poor</div> }
        {vehicleMPG >= 15 && vehicleMPG < 20 && <div class="mileage">Fair</div> }
        {vehicleMPG >= 20 && vehicleMPG < 30 && <div class="mileage">Good</div> }
        {vehicleMPG >= 30 && <div class="mileage">Excellent</div> }
        <p>Current Gas Price:</p>
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
          <h2>Welcome to Gas Calculator!</h2>
        </div>
        <div>
          <GasCalculator />
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
