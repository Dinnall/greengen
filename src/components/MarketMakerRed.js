import React from "react";

const MarketMarkerRed = ({ market, imageRed, onMarketClick, selected }) => (
  <img
    className={selected ? "market selected" : "market"}
    alt=""
    src={imageRed}
    
    onMouseDown={() => onMarketClick(market)}
  />
);

export default MarketMarkerRed;
