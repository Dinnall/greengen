import React, { Component } from 'react';
import '../../stylesheets/index.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
     this.marketsHandleClick = this.marketsHandleClick.bind(this);
    this.snapLocationHandleClick = this.snapLocationHandleClick.bind(this);
  }

  marketsHandleClick(e) {
    e.preventDefault();
    this.props.history.push('/markets');
  }

  snapLocationHandleClick(e) {
    e.preventDefault();
    this.props.history.push('/snap');
  }

  render() {
    return (
      <div className="splash-container" data-aos="fade-up">
        <div className="splash-top">
        
          <div className="splash-top-image">
            <img src="http://blogs.e-rockford.com/goodforyou/files/2013/04/health-community-17030.jpg" alt=''/>
          </div>

          <div className="splash-top-info">
            <div className="splash-top-info-title">
              <img
                src="http://ih.constantcontact.com/fs183/1101867826120/img/1384.jpg?a=1115793956880"
                alt="GreenGen"
              />
              <h1 data-aos="fade-up" data-aos-delay="100">GreenGen</h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="300">Buying local, changing the community future.</p>
            <div className="splash-top-button-container" data-aos="fade-up" data-aos-delay="500">
              <button id="" onClick={this.marketsHandleClick}>
                View Markets
              </button>
              <button id="" onClick={this.snapLocationHandleClick}>
                Do you qualify for SNAP?
              </button>
            </div>
          </div>
        </div>{/* End above the fold content */}

        <div className="splash-features-container">
          <h3 className="splash-feature-title">Why buy local?</h3>

          <div className="splash-features">
            <div className="splash-feature-card">
              <div>
                <img src="https://i.imgur.com/u7NyCxx.png" alt="feature-1" />
              </div>
              <h3>Support Farmers</h3>
              <p>Buying from your local farmer allows you to support local agriculture and local economy</p>
            </div>

            <div className="splash-feature-card">
              <div>
                <img src="https://i.imgur.com/WB9xBxu.png" alt="feature-2" />
              </div>
              <h3>It’s Healthy!</h3>
              <p>There’s just no way around it, eating fresh, locally-grown fruits and veggies are great for your health.</p>
            </div>

            <div className="splash-feature-card">
              <div>
                <img src="https://i.imgur.com/IDI6oFc.png" alt="feature-3" />
              </div>
              <h3>Most Importantly— It’s Fun!</h3>
              <p>Excellent way to get connected to the neighborhood .</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
