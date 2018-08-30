import React from 'react';
import ReactDOM from 'react-dom';
import SelectBorough from './SelectBorough';

export default class ToggleBottom extends React {
    state = {
        SelectBorough
        };

        onToggle = market => {
        this.setState({ selectedMarket: market });
        };
       render() {
        return (
            <div>
            <SelectBorough />
            <div id="map-container">
                <Map onChange={this.onToggle} />
            </div>
            </div>
        );
      
    }
}