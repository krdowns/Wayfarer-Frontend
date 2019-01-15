import React, { Component } from 'react'
import { Navbar, NavItem, Modal } from 'react-materialize'
import LogInForm from '../LogInForm/LogInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogOut from '../LogOut/LogOut'
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = [<NavItem key={1} href='/'></NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem key={5} href='/CityPage'>Explore</NavItem>)
        navBarItems.push(
          <NavItem key={5} href='/ProfilePage'>Profile</NavItem>)
      navBarItems.push(
        <Modal header='Are you sure you want to log out?' trigger={<a className="formButtons">Log Out</a>}>
          <LogOut handleLogOut={this.props.handleLogOut}/>
        </Modal>)
    } else {
      navBarItems.push(
        <Modal header='Sign Up' trigger={<a className="formButtons">Sign Up</a>}>
          <SignUpForm handleInput={this.props.handleInput} handleSignUp={this.props.handleSignUp}/>
        </Modal>)
      navBarItems.push(
        <Modal header='Login' trigger={<a className="formButtons">Login</a>}>
          <LogInForm handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} />
        </Modal>)
    }
    return (
      <Navbar brand='WAYFARER' className='nav' right>
        <div className="navButtons">
          {navBarItems}
        </div>
      </Navbar>
    )
  }
}

export default NavBar