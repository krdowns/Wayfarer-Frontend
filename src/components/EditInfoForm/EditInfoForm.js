import React, { Component } from 'react'

import './EditInfoForm.css'

class EditInfoForm extends Component {
  render () {
    return (
      <form>
        <div className="post-modal">
          <label htmlFor='name'>Name</label>
          <input type='input' name='title' onChange={this.props.handleInput} />
        </div>
        <div className="post-subject-field">
          <label htmlFor='post'>Current City</label>
          <input type='input' name='post' className="text-area" onChange={this.props.handleInput} />
        </div>
        <input className="new-post-submit" value='Submit' type='submit' onClick={this.props.handleInput} />
      </form>
    )
  }
}

export default EditInfoForm