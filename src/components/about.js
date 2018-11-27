import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../css/about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <p>
          We are defined by our belief that the environmentally responsible 
          life style is attractive and fashionable. 
          <br />
          <br />
          We aim to make it easier to transition to a sustainable way of 
          living by providing environmentally-conscious products that are 
          thoughtfully made.
        </p>
      </div>
    );
  }
}

export default About;
