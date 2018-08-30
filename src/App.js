import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Map from './components/Map';
import SnapLocations from './components/SnapLocations';
import NavBar from './components/NavBar';
import MapAndBoro from "./components/MapAndBoro.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      mapOptions: {
        defaultCenter: { lat: 40.7128, lng: -73.9 },
        defaultZoom: 11
      },
      markets: [],
      selectedBorough: ""
    }
  }

  handleSelect = (e) => {
    const targetVal = e.target.value
    if (targetVal === 'Richmond'){ 
      this.setState({
        selectedBorough: targetVal, 
        mapOptions: {center: { lat: 40.57953, lng: -74.15020 },
        zoom: 14
      }});
    }
      else if (targetVal === 'Queens'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions: {  center: { lat: 40.68149, lng: -73.83652 },
          zoom: 14
        }});
      } 
      else if (targetVal === 'New York'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions: {    center: { lat: 40.77306, lng: -73.97145 },
          zoom: 14
        }});
      } 
      else if (targetVal === 'Bronx'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions:  { center: { lat: 40.84985, lng: -73.86641 },
          zoom: 14
        }});
      } 
      else if (targetVal === 'Kings'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions:  { center: {lat: 40.6482, lng: -73.9442 },
            zoom: 14
        }});
      } 
    axios
      .get(
        `https://data.ny.gov/resource/7jkw-gj56.json?county=${e.target.value}&$order=market_name ASC`
      )
      .then(res => {
        console.log("response", res);
        this.setState({
          markets: res.data
        });
      });
  };
render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
                    <Route exact path="/markets" render={() => {
            return( <MapAndBoro mapOptions={this.state.mapOptions} 
                                handleSelect={this.handleSelect} 
                                markets={this.state.markets}
                                selectedBorough={this.state.selectedBorough} /> )
          }} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} /> 
          <Route path="/snap" component={SnapLocations} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
