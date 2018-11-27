import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home'
import About from './components/about'
import TheList from './components/the_list'

import './css/app.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <h1>fucking recycle </h1>
          <h3>new york</h3>
          <nav className="app-navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/thelist">The List</Link>
              </li>
            </ul>
          </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/thelist/" component={TheList} />
        </div>
      </Router>
    );
  }
}

export default App;
