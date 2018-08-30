import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import './../stylesheets/index.css';

import MarketMarkerGreen from "./MarketMakerGreen";
import MarketMarkerRed from "./MarketMakerRed";
import MarketInfo from "./MarketInfo";
import appleImageS from "../images/green_apple_small.png";
import appleImageM from "../images/green_apple_medium.png";
import appleImageL from "../images/green_apple_large.png";
import appleImageredS from "../images/red_apple_small.png";
import appleImageredM from "../images/red_apple_medium.png";
import appleImageredL from "../images/red_apple_large.png";

import Legend from "./Legend";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
      selectedMarketIndex: null,
      update: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentWillReceiveProps() {
    this.setState({
      update: this.state.update += 1
    })
  }


  componentDidMount() {
    axios
      .get("https://data.ny.gov/resource/7jkw-gj56.json?county='Queens'  OR county='Kings' OR county='New York' OR county='Richmond' OR county='Bronx'")
      .then(res => {
        this.setState({
          markets: res.data.filter(
            market => market.location && market.location_points.coordinates
          )
        });
      })
      .catch(err => {
        console.log("error fetching markets");
      });
  }

  onMarketClick = i => {
    const markets = this.state.markets;
    this.props.onMarketClick(i);
    this.setState({
      selectedMarketIndex: i,
      mapOptions: {center: {
        lat: markets[i].location_points.coordinates[1],
        lng: markets[i].location_points.coordinates[0]
      },
    zoom: 12}
    });
  };

  render() {
    const { markets, selectedMarketIndex } = this.state;
    const {mapOptions} = this.props
    const { zoom } = mapOptions;
    const imageGreen = zoom >= 18 ? appleImageL : zoom >= 17 ? appleImageM : appleImageS;
    const imageRed = zoom >= 18 ? appleImageredL : zoom >= 17 ? appleImageredM: appleImageredS;

    return <GoogleMapReact id="map-container" bootstrapURLKeys={{ key: "AIzaSyCQTUR2rqPrkIsOIBh7G_KjKE74P4kcKX0" }} {...this.props.mapOptions}>
                           {markets.map((market, i) => (market.snap_status === "Y" ? <div lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} style={{ width: 30, heigth: 30 }}>
          <MarketMarkerGreen id="market-marker" market={market} imageGreen={imageGreen} selected={market[i] === selectedMarketIndex} onMarketClick={() => this.onMarketClick(i)} key={i} lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} />
                {i === selectedMarketIndex && <div id="market-info">
                    {MarketInfo(markets[selectedMarketIndex])}
                  </div>}
              </div> : <div lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} style={{ width: 30, heigth: 30 }}>
                {" "}
                <MarketMarkerRed id="market-marker" market={market} imageRed={imageRed} selected={market[i] === selectedMarketIndex} onMarketClick={() => this.onMarketClick(i)} key={market.unique_key} lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} />
                {i === selectedMarketIndex && <div id="market-info">
                    {MarketInfo(markets[selectedMarketIndex])}
                  </div>}
              </div>))}
        <Legend />
      </GoogleMapReact>;
  }
}

export default Map;
