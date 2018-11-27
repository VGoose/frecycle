import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import comingsoon from '../assets/images/fuckingrecycle.jpg'
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
        </header>
        <div className="home-content">
          Coming soon
          <img src={comingsoon} alt="coming soon"/>
        </div>
      </div>
    );
  }
}

export default Home;
