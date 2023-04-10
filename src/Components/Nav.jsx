import React from "react";
import './Nav.css'

function Nav() {
    return (
      <nav className="nav_bar">
        <div className="nav_bar-logo">
        <img src="./images/logo512.png" alt="App Logo" width="128" height="128"></img>
        </div>
        <ul className="nav_bar-links">
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="menu">Menu</a></li>
            <li><a href="reservations">Reservations</a></li>
            <li><a href="order online">Order Online</a></li>
            <li><a href="login">Login</a></li>
        </ul>
      </nav>
    );
  }
  export default Nav;