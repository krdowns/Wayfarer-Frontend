import React, { Component } from 'react'
import {Carousel} from 'react-materialize'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
// import CitiesContainer from '../CitiesContainer/CitiesContainer'
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
    axios.post('http://localhost:3000/users/signup', 
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
    axios.post('http://localhost:3000/users/login', {
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
        <NavBar isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp}/>
        <div className='body'>
        <Carousel options={{ fullWidth: true, indicators: true  }} images={[
          'https://lorempixel.com/800/400/food/1',
          'https://lorempixel.com/800/400/food/2',
          'https://lorempixel.com/800/400/food/3',
          'https://lorempixel.com/800/400/food/4',
          'https://lorempixel.com/800/400/food/5'
        ]} />
        <div>
        </div>
          <Switch>
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
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
