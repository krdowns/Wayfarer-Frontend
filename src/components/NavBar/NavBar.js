import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {    
    return (
      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo left">Wayfarer</a>
            
              <Modal
              header='Modal Header'
              trigger={<Button waves='light'>Sign Up</Button>}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
              </Modal>
              
            
              <Modal header="Login!"
              trigger={<Button waves="yellow">Login</Button>}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
              </Modal>
              

            </div>
          </nav>
      </div>
    )
  }
}

export default NavBar