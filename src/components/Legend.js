import React from "react";
import './../stylesheets/App.css';


import appleImageM from "../images/green_apple_medium.png";
import appleImageredM from "../images/red_apple_medium.png";

const Legend = () => {
  return (
    <div id="legend">
      <h3>Legend</h3>
      <div className="EBT">
        <img src={appleImageM} alt='' /> <h4>Accepts EBT/SNAP</h4>
      </div>
      <div className="NoEBT">
        <img src={appleImageredM} alt='' /> <h4>Does Not Accept EBT/SNAP</h4>
      </div>
    </div>
  );
};

export default Legend;
