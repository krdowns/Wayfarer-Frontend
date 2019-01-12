import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render () {    
    return (

      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo left">Wayfarer</a>
            <ul>
              <li><a href="/">Sign Up</a></li>
              <li><a href="/">Login</a></li>
            </ul>
            </div>
          </nav>
      </div>
    )
  }
}

export default NavBar