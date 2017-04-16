import React, { Component } from 'react';
import logo from './globe.png';
import './App.css';
import GoogleMapReact from 'google-map-react';

const gasPrice = 2.51;

function calculateTotalCost(milesRange, vehicleMPG) {
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
    this.state = {milesRange: 650, vehicleMPG:10};
    this.handleMPGChange = this.handleMPGChange.bind(this);
    this.handleMilesChange = this.handleMilesChange.bind(this);
  }

  handleMPGChange(value) {
    this.setState({vehicleMPG: value});
  }

  handleMilesChange(value) {
    this.setState({milesRange: value});
  }

  calculate

  render() {
    const milesRange = this.state.milesRange;
    const vehicleMPG = this.state.vehicleMPG;
    const cost = calculateTotalCost(milesRange, vehicleMPG);

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
        <input value={milesRange} onChange={this.handleMilesChange}/>
        <p>Enter Your Vehicle MPG:</p>
        <input value={vehicleMPG} onChange={this.handleMPGChange}/>
      </fieldset>

      <fieldset disabled="disabled">
        <legend>Output </legend>
        <p>Current Gas Price:</p>
        <input value={gasPrice}/>
        <p>Total Cost:</p>
        <input value={cost}/>
      </fieldset>

      </div>
    );
  }
}

// class Map extends Component {
//   render() {
//     return (
//       <div>
//       <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={'Kreyser Avrora'}
//         />
//       </GoogleMapReact>
//       </div>
//     );
//   }


  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  class SimpleMap extends Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    };

    render() {
      return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'AJ Bronson'}
          />
        </GoogleMapReact>
      );
    }
  }

  export class Map extends React.Component {
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = React.Component.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
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
          <SimpleMap/>
        </div>
      </div>
    );
  }
}

export default App;
