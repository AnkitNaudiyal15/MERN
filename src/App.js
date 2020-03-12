import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/about-us.component"; 
import VehicleType from "./components/vehicle-type.component";  

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" target="_blank">
            <img src={logo} width="100" height="50" alt="Parking App"></img>
          </a>
          <Link to="/" className="navbar-brand">MERN Learning app</Link>
          <div className="nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create-vechile-type" className="nav-link">
                  Vechicle Type
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  Contact-us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact />
        <Route path="/about" exact component={AboutUs}/>
        <Route path="/create-vechile-type" exact component={VehicleType}/>
      </div>
    </Router>
  );
}

export default App;
