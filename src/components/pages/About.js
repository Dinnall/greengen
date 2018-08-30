import React, { Component } from 'react';
import '../../stylesheets/index.css';


class About extends Component {
    render() {
        return (
            <div className="Home fadein">
                <main>
                    <h1 className="fadein-1">Hi.</h1>
                    <h1 className="fadein-2">My name is Michael.</h1>
                    <h1 className="fadein-3">I'm a software engineer.</h1>
                    <h1 className="fadein-3">This is GreenGen a site I built for New Yorkers in search of a better way to eat. </h1>
                    <h1 className="fadein-3">Use the site to find the nearest farmers market to you</h1>
                </main>
            </div>
        )
    }
}

export default About;