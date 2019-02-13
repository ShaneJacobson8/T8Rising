import React, { Component } from 'react';
import Routing from "./Routing";


import './App.css';

class App extends Component {
  render() {
    return (
          <div className="App">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">T8Rising</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/WhatWeDo">What we do</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Help">How you can help</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Donate">Donate</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact Us</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

              </div>
            </nav>

            <Routing />


            <nav className="navbar fixed-bottom navbar-light">
              <a className="navbar-brand">Property of T8Rising</a>
          <a className="nav-link" href="./About">About T8Rising</a>
          <a className="nav-link" href="./Contact">Contact Us</a>
            </nav>
          </div>
     
    );
  }
}

export default App;
