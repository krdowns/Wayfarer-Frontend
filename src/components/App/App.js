import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
// import axios from 'axios'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'
import CitiesContainer from '../CitiesContainer/CitiesContainer'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import './App.css'

class App extends Component {
  render () {
    return (
      <NavBar />
    )
  }
}

export default App;
