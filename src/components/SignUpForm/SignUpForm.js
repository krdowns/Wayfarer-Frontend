import React, { Component } from 'react'
import './SignUpForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div>
        <form>
          <div>
            <input type='text' name='name' placeholder='name' onChange={this.props.handleInput} />
            <input type='text' name='currentCity' placeholder='Current City' onChange={this.props.handleInput} />
            <input type='text' name='email' placeholder="Email" onChange={this.props.handleInput} />
          </div>
          <div>
            <input type='password' name='password' placeholder="Password" onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm