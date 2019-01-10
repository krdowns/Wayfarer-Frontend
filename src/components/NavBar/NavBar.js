import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {

    return (
      <nav>
        <ul className="navbarlogo">
          <li>Wayfarer</li>
        </ul>
        <ul className="navbarbuttons">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>

    )
  }
}

export default NavBar

// let navBarItems = [<NavItem key={1} href='/'>Cities</NavItem>]
// if (this.props.isLoggedIn) {
//   navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
// } else {
//   navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
//   navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
// }

// <Navbar brand='Wayfarer' className='nav' right>
// {navBarItems}
// </Navbar>