import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <Link to="/" className="Link" ><img  src="https://static.pechakucha.org/pechakucha/uploads/slide/image/56214b9dfbe577422d000003/full_Slide01.jpg" alt="M" className="logo" /></Link>
                <div className="nav-links">
                    <Link to="/markets" className="Link">Market Map </Link>
                    <Link to="/about" className="Link">About</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;