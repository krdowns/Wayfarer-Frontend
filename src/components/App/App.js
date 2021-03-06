import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import CityPage from '../CityPage/CityPage'
import Post from '../Post/Post'
import ProfilePage from '../ProfilePage/ProfilePage'
import Slider from "../Carousel/Carousel"
import './App.css'


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
      joinDate: '',
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
//https://whispering-beach-66155.herokuapp.com/users/signup
  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup', 
			{ email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        currentCity: this.state.currentCity,
      }
      )
      .then( response => {
        localStorage.token = response.data.token
        console.log(response)
          this.setState({
            name: response.data.name,
            currentCity: response.data.currentCity,
            joinDate: response.data.joinDate,
            isLoggedIn: true
          }, this.props.history.push("/profilepage"))
          
      })
      
      .catch(err => console.log(err))
      
  }
  // https://whispering-beach-66155.herokuapp.com/users/login
  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/users/signup', {
      email: this.state.email,
      password: this.state.password,
    })
    .then( response => {
      localStorage.token = response.data.token
      console.log(response.data)
      this.setState({
            name: response.data.name,
            currentCity: response.data.currentCity,
            password: '',
            isLoggedIn: true,
            redirect: true
          }, this.props.history.push("/profilepage"))
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} handleLogOut={this.handleLogOut}/>
        <div className='body'>
          <Switch>

            <Route path='/citypage'
              render={() => {
                return (
                  <CityPage isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />
            <Route path='/profilepage'
              render={(props) => {
                return (
                  <ProfilePage isLoggedIn={this.state.isLoggedIn} name={this.state.name} currentCity={this.state.currentCity} joinDate={this.state.joinDate} />
                )
              }}
            />
            <Route path='/post'
              render={() => {
                return (
                  <Post />
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

export default withRouter(App);
