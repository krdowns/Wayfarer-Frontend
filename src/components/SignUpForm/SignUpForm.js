import React, { Component } from 'react'

import './SignUpForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm