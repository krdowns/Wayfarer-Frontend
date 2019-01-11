import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = [<NavItem key={1} href='/'></NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
      navBarItems.push(<NavItem key={5} href='/search'><input type="text" placeholder="Search Cities..."></input></NavItem>)
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
    }
    return (
      <Navbar brand='Wayfarer' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar