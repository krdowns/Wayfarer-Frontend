import React, { Component } from 'react'

import './EditInfoForm.css'

class EditInfoForm extends Component {
  render () {
    return (
      <form className="update-profile-form">
        <div className="update-profile-name">
          <label htmlFor='name'>Name</label>
          <input type='input' name='title' className="update-name" onChange={this.props.handleInput} />
        </div>
        <div className="update-profile-city">
          <label htmlFor='currentCity'>Current City</label>
          <input type='input' name='currentCity' className="update-current-city-field" onChange={this.props.handleInput} />
        </div>
        <input className="update-profile-submit" value='Save Update' type='submit' onClick={this.props.handleInput} />
      </form>
    )
  }
}

export default EditInfoForm