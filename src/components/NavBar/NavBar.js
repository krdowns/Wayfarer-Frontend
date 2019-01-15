import React, { Component } from 'react'
import {Modal, Button} from "react-materialize"
import axios from 'axios'
import './NavBar.css'

class NavBar extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup', 
			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        localStorage.token = response.data.token
          this.setState({
            isLoggedIn: true
          })
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }


  render () {    
    return (
      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo left">Wayfarer</a>
            
              <Modal
              header='Sign Up'
              trigger={<Button waves='light'>Sign Up</Button>}>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.props.handleInput} />
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' onChange={this.props.handleInput} />
              <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
              </Modal>
              
              <Modal header="Log In"
              trigger={<Button waves="yellow">Login</Button>}>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.props.handleInput} />
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' onChange={this.props.handleInput} />
              <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
              </Modal>

            </div>
          </nav>
      </div>
    )
  }
}

export default NavBar
