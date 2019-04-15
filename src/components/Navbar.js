import React, { Component } from "react";
import { Router, Route } from 'react-router-dom';
import logo from '../logo.jpg'

export class Navbar extends Component {
  render() {
    return (
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={ logo } alt='Salty Rogue Real Estate'></img>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Route class="nav-Route" exact path="/" component={Home}>
                  Home
                </Route>
              </li>
              <li class="nav-item">
                <Route class="nav-Route" path='./About.js' component={About}>
                  About
                </Route>
              </li>
              <li class="nav-item dropdown">
                <Route
                  class="nav-Route dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Current Projects
                </Route>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Route class="dropdown-item" path="./Projects/Projects.js">
                    Lehi 1
                  </Route>
                  <Route class="dropdown-item" path="./Projects/Projects.js">
                    Lehi 2
                  </Route>
                  <div class="dropdown-divider" />
                  <Route class="dropdown-item" path="./Projects/Projects.js">
                    Provo 1
                  </Route>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        </Router>
    );
  }
}

export default Navbar;
