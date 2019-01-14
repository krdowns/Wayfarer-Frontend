import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {    
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left">Wayfarer</a>
            <ul>
              <li>

              </li>
              <li>
                <Button />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar