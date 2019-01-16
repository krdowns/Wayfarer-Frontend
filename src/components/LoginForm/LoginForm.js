import React, { Component } from 'react'
import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <form>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' onChange={this.props.handleInput} />
      </div>
      <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
    </form>
    )
  }
}

export default LogInForm