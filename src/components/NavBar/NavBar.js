import React, { Component } from 'react'
import { Navbar, NavItem, Modal, Button } from 'react-materialize'
import LogInForm from '../LogInForm/LogInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import './NavBar.css'

class NavBar extends Component {
  render () {
    let navBarItems = []
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
    } else {
      navBarItems.push(<Modal header='Sign Up' trigger={<Button>Sign Up</Button>}><SignUpForm handleInput={this.props.handleInput} handleSignUp={this.props.handleSignUp}/>
      </Modal>)
      navBarItems.push(<Modal header='Login' trigger={<Button>Login</Button>}><LogInForm handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} />
          </Modal>)
    }
    return (
      <Navbar brand='Wayfarer' className='nav' right>
        {navBarItems}
      </Navbar>
    )
  }
}

export default NavBar