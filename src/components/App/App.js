import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
import CitiesContainer from '../CitiesContainer/CitiesContainer'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import './App.css'

class App extends Component {
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
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className='body'>
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route
              path='/'
              render={() => {
                return (
                  <About isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
