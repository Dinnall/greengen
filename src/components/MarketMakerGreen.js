import React from "react";

const MarketMarkerGreen = ({ market, imageGreen, onMarketClick, selected }) => (
  <img
    className={selected ? "market selected" : "market"}
    alt=""
    src={imageGreen}
    
    onMouseDown={() => onMarketClick(market)}
  />
);

export default MarketMarkerGreen;
