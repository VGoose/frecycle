import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../css/about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <p>
          We are defined by our belief that the it can be easy to live a environmentally responsible 
          lifestyle. 
          <br /><br />
          Our goal is to empower consumers to make environmentally-conscious choices 
          by providing quality, and responsibly-made tools and products.  Through these small 
          choices, we hope to create a movement that will redefine the everyday person’s 
          way of living into one that is more thoughtful, and sustainable.
        </p>
      </div>
    );
  }
}

export default About;
