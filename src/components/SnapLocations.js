import React, { Component } from "react";
import axios from "axios";

class SnapLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapLocations: []
    };
  }
  
  componentDidMount() {
    axios
      .get(
        "https://data.cityofnewyork.us/resource/p7eg-9sqe.json"
      )
      .then(res => {
        this.setState({
          snapLocations: res.data
        });
      })
      .catch(err => {
        console.log("error fetching snap facilities");
      });
  }

  render() {
    const { snapLocations } = this.state;
      return (
      <div >
        <h1 className="main-header ">These {snapLocations.length} facilities can assist with SNAP registration</h1>
           {snapLocations.length=== 0 ? "Loading..." : snapLocations.map((ele, idx)=> {
            return (
                 <div className="showcase">
                <section  key={idx}>
                  <h3 className="highlight">{ele.health_center}</h3>
                  <p>{ele.borough}</p>
                  <p>{ele.street_address}</p>
                  <p>{ele.services_provided}</p>
                  <p>{ele.accept_walk_ins}</p>
                  <p>{ele.telephone_number}</p>
                  <p>{ele.days_of_operation}</p>
                  <p>{ele.hours_of_operation}</p>
                  <p>{ele.languages_other_than_english}</p>
                </section>
                </div>              
            )
          })}
     </div>
    );
  }
}

export default SnapLocations;


