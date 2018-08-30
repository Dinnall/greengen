import React from "react";
import Map from "./Map";
import SelectBorough from "./SelectBorough";

class MapAndBoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarket: null
    }
  this.onMarketClick = this.onMarketClick.bind(this);
  }

  onMarketClick = market => {
    this.setState({ selectedMarket: market });
  };

  render() {
    return (
      <div>
        <SelectBorough handleSelect={this.props.handleSelect} mapOptions={this.props.mapOptions} markets={this.props.markets} />
        <div id="map-container">
          <Map onMarketClick={this.onMarketClick} markets={this.props.markets} mapOptions={this.props.mapOptions} />
        </div>
      </div>
    );
  }
}

export default MapAndBoro;
