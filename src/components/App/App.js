import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
import CityPage from '../CityPage/CityPage'
import CitiesContainer from '../CitiesContainer/CitiesContainer'
import ProfilePage from '../ProfilePage/ProfilePage'
import './App.css'
import Slider from "../Carousel/Carousel"

class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      name: '',
      currentCity: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount (res) {
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
      name: '',
      currentCity: '',
      isLoggedIn: false
    })
    localStorage.clear()
    window.location.href = '/';
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
        password: this.state.password,
        name: this.state.name,
        currentCity: this.state.currentCity
      }
      )
      .then( response => {
        localStorage.token = response.data.token
          this.setState({
            name: response.data.name,
            currentCity: response.data.currentCity,
            isLoggedIn: true
          })
          console.log(response)
          window.location.href = '/ProfilePage';
      })
      
      .catch(err => console.log(err))
      
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/login', {
      email: this.state.email,
      password: this.state.password,
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
      window.location.href = '/ProfilePage';
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} handleLogOut={this.handleLogOut}/>
        <div className='body'>
          <Switch>
            <Route path='/CityPage'
              render={() => {
                return (
                  <CityPage isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />
            <Route path='/ProfilePage'
              render={(props) => {
                return (
                  <ProfilePage isLoggedIn={this.state.isLoggedIn} name={this.state.name} currentCity={this.state.currentCity} />
                )
              }}
            />
            <Route path='/' 
              render={() => {
                return (
                  <div>
                    <Slider />
                    <About isLoggedIn={this.state.isLoggedIn} />
                  </div>
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
