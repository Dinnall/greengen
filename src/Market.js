import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./components/pages/Home";
import MapAndBoro from "./components/MapAndBoro.js";
import './stylesheets/App.css';
import './stylesheets/index.css';


class Market extends Component {

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

    console.log("targetVal", targetVal);
    console.log('hello')
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
        <Switch>
          <Route exact path="/map" render={() => {
            return( <MapAndBoro mapOptions={this.state.mapOptions} 
                                handleSelect={this.handleSelect} 
                                markets={this.state.markets}
                                selectedBorough={this.state.selectedBorough} /> )
          }} />
          <Route path="/about" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Market;
